#!/usr/bin/env python3
"""Assemble index.html from src/, then make the Squarespace embed version."""
import os,re
here=os.path.dirname(os.path.abspath(__file__)); src=os.path.join(here,'src')
r=lambda n:open(os.path.join(src,n)).read()
html=r('shell.html')
for tag,f in (('/*__DATA__*/','data.js'),('/*__MATCH__*/','match.js'),('/*__ROUNDS__*/','rounds.js'),('/*__GAME__*/','game.js')):
    assert tag in html; html=html.replace(tag,r(f))
lbf=os.path.join(src,'lb_url.txt'); lb=open(lbf).read().strip() if os.path.exists(lbf) else ''
lb=os.environ.get('TGB_LB',lb)
html=html.replace('__LB__',lb)
open(os.path.join(here,'index.html'),'w').write(html)

# ---- Squarespace embed: scope every style under #shiny ----
css=html[html.index('<style>')+7:html.index('</style>')]
body=html[html.index('<body>')+6:html.index('</body>')]
font=re.search(r'<link href="https://fonts.googleapis.com/css2[^>]*>',html).group(0)
def block_end(s,j):
    d=0
    for k in range(j,len(s)):
        if s[k]=='{': d+=1
        elif s[k]=='}':
            d-=1
            if d==0: return k
    raise ValueError
def scope(css):
    out=[];i=0
    while True:
        j=css.find('{',i)
        if j<0: break
        sel=re.sub(r'/\*.*?\*/','',css[i:j],flags=re.S).strip(); k=block_end(css,j)
        if sel.startswith('@keyframes') or sel.startswith('@font-face'): out.append(sel+css[j:k+1])
        elif sel.startswith('@'): out.append(sel+'{'+scope(css[j+1:k])+'}')
        else:
            parts=[]
            for x in sel.split(','):
                x=x.strip()
                if x in (':root','html','body'): parts.append('#shiny')
                elif x=='*': parts+=['#shiny','#shiny *']
                else: parts.append('#shiny '+x)
            out.append(','.join(dict.fromkeys(parts))+css[j:k+1])
        i=k+1
    return '\n'.join(out)
extra='#shiny{border-radius:18px;overflow:hidden;min-height:0!important;text-align:left}#shiny h1,#shiny h2,#shiny li,#shiny button,#shiny input,#shiny small{letter-spacing:normal;text-transform:none}#shiny .altbox small,#shiny .chip{text-transform:uppercase;letter-spacing:.08em}'
snip=f"<!-- That's Good Bird — paste into a Squarespace Code block (Mode: HTML) -->\n{font}\n<style>\n{scope(css)}\n{extra}\n</style>\n<div id=\"shiny\">\n{body.strip()}\n</div>\n"
for f in ('thats-good-bird-squarespace.html','thats-good-bird-code.txt'): open(os.path.join(here,f),'w').write(snip)
print('index.html',len(html),'bytes | embed',len(snip),'bytes')

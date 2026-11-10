/* ---------- MATCHING (forgiving autocorrect) ---------- */
function norm(s){
  return s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"")
    .replace(/&/g," and ").replace(/['’`.]/g,"").replace(/[^a-z0-9]+/g," ").trim()
    .replace(/^(the|a|an) /,"");
}
function lev(a,b,max){
  if(Math.abs(a.length-b.length)>max) return 99;
  const m=[...Array(b.length+1).keys()];
  for(let i=1;i<=a.length;i++){
    let prev=m[0]; m[0]=i; let rowMin=m[0];
    for(let j=1;j<=b.length;j++){
      const tmp=m[j];
      m[j]=Math.min(m[j]+1,m[j-1]+1,prev+(a[i-1]===b[j-1]?0:1));
      prev=tmp; if(m[j]<rowMin) rowMin=m[j];
    }
    if(rowMin>max) return 99;
  }
  return m[b.length];
}
const tolFor=n=>n<=3?0:n<=4?1:n<=7?2:n<=11?3:4;
const STOP=new Set(["with","from","that","this","their","name","your","some","into","about","than","then","what"]);
function buildIndex(p){
  const entries=[], kws=[], seen=new Set();
  p.t.forEach((tier,ti)=>tier.forEach(a=>{
    const parts=a.split("|"); const display=parts[0];
    parts.forEach(x=>{
      if(x.startsWith("~")){kws.push({k:norm(x.slice(1)),display,tier:ti});return;}
      const v=norm(x); if(!v||seen.has(v)) return; seen.add(v);
      entries.push({v,c:v.replace(/ /g,""),display,tier:ti});
    });
  }));
  // unique single words -> answer (e.g. "Kershaw", "Pleasant", "Stargate")
  const words={};
  if(!kws.length || p.people){
    entries.forEach(e=>e.v.split(" ").forEach(w=>{
      if(w.length<4||STOP.has(w)) return;
      (words[w]=words[w]||new Map()).set(e.display,e);
    }));
  }
  const uniq=[];
  Object.entries(words).forEach(([w,m])=>{ if(m.size===1){const e=[...m.values()][0]; if(!seen.has(w)) uniq.push({v:w,display:e.display,tier:e.tier});} });
  return {entries,kws,uniq};
}
function judge(p,input){
  const v=norm(input); if(!v) return null;
  const I=p._idx||(p._idx=buildIndex(p));
  const vc=v.replace(/ /g,"");
  const out=(e,corrected)=>({display:e.display,tier:e.tier,corrected});
  // 1. exact
  let e=I.entries.find(x=>x.v===v||x.c===vc);
  if(e) return out(e,false);
  // 2. a full answer sits inside what they typed ("the movie barbie")
  const padded=" "+v+" ";
  let best=null;
  I.entries.forEach(x=>{ if(x.v.length>=3 && padded.includes(" "+x.v+" ") && (!best||x.v.length>best.v.length)) best=x; });
  if(best) return out(best,true);
  // 3. keyword facts ("his dad got kidnapped")
  let kw=null; const ps=" "+v;
  I.kws.forEach(k=>{ if(ps.includes(" "+k.k) && (!kw||k.tier>kw.tier)) kw=k; });
  if(kw) return out(kw,false);
  // 4. a distinctive single word ("kershaw", "stargate")
  e=I.uniq.find(x=>x.v===v); if(e) return out(e,true);
  // 5. start of an answer ("tagliat", "red dead onl")
  if(v.length>=4){
    const hits=new Map();
    I.entries.forEach(x=>{ if(x.v.startsWith(v)||x.c.startsWith(vc)) hits.set(x.display,x); });
    if(hits.size===1) return out([...hits.values()][0],true);
  }
  // 6. typos — closest spelling within tolerance
  let bd=99; best=null;
  I.entries.forEach(x=>{ const tl=tolFor(Math.min(vc.length,x.c.length)); const d=Math.min(lev(vc,x.c,tl),lev(v,x.v,tl)); if(d<=tl && d<bd){bd=d;best=x;} });
  if(best) return out(best,true);
  // 7. typo in a distinctive word ("kershw")
  if(v.indexOf(" ")<0 && v.length>=5){
    bd=99; best=null;
    I.uniq.forEach(x=>{ const tl=Math.min(v.length,x.v.length)<=6?1:2; const d=lev(v,x.v,tl); if(d<=tl&&d<bd){bd=d;best=x;} });
    if(best) return out(best,true);
  }
  // 8. benefit of the doubt: any real word they typed is close to a word in one answer
  const toks=v.split(" ").filter(w=>w.length>=4&&!STOP.has(w));
  const t0len=toks.reduce((m,t)=>Math.min(m,t.length),99);
  if(toks.length && !I.kws.length){
    let bestE=null,bestScore=0;
    I.entries.forEach(x=>{
      let sc=0;
      x.v.split(" ").forEach(w=>{ if(w.length<4||STOP.has(w))return; const tl=Math.min(w.length,t0len)<=6?1:2; toks.forEach(t=>{ if(lev(t,w,tl)<=tl && Math.min(t.length,w.length)>=4) sc++; }); });
      if(sc>bestScore||(sc===bestScore&&sc>0&&bestE&&x.tier<bestE.tier)){bestScore=sc;bestE=x;}
    });
    if(bestE) return out(bestE,true);
  }
  if(toks.length && I.kws.length){
    // fact questions: a misspelled keyword ("davidsen")
    let kh=null;
    I.kws.forEach(k=>{ if(k.k.length<5||k.k.includes(" "))return; toks.forEach(t=>{ if(lev(t,k.k,k.k.length<=6?1:2)<=(k.k.length<=6?1:2) && (!kh||k.tier>kh.tier)) kh=k; }); });
    if(kh) return out(kh,true);
  }
  return null;
}



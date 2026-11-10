/* ---------- SMALL HELPERS ---------- */
const $=id=>document.getElementById(id);
const WRAP=$("wrap");
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const ftText=pts=>(pts*FT_PER_PT).toLocaleString()+" ft";
const store={get(k){try{return JSON.parse(localStorage.getItem(k));}catch(e){return null;}},set(k,v){try{localStorage.setItem(k,JSON.stringify(v));}catch(e){}}};
const RM=(()=>{try{return matchMedia("(prefers-reduced-motion: reduce)").matches;}catch(e){return false;}})();
if(RM) WRAP.classList.add("rm");
const IN_FRAME=(()=>{try{return window.self!==window.top;}catch(e){return true;}})();
const buzz=p=>{try{if(navigator.vibrate)navigator.vibrate(p);}catch(e){}};

/* ---------- SOUND (all synthesized: chimes for feedback, caws for flavor) ---------- */
const SFX=(()=>{
  let ctx=null, out=null, muted=store.get("tgb-muted")===1;
  function ac(){
    if(!ctx){
      const C=window.AudioContext||window.webkitAudioContext; if(!C) return null;
      ctx=new C(); out=ctx.createGain(); out.gain.value=0.85;
      const comp=ctx.createDynamicsCompressor(); out.connect(comp); comp.connect(ctx.destination);
    }
    if(ctx.state==="suspended") ctx.resume();
    return ctx;
  }
  function tone(t,f,dur,vol,type,slide){
    const o=ctx.createOscillator(), g=ctx.createGain();
    o.type=type||"triangle"; o.frequency.setValueAtTime(f,t);
    if(slide) o.frequency.exponentialRampToValueAtTime(slide,t+dur);
    g.gain.setValueAtTime(0.0001,t); g.gain.linearRampToValueAtTime(vol,t+0.008); g.gain.exponentialRampToValueAtTime(0.0001,t+dur);
    o.connect(g); g.connect(out); o.start(t); o.stop(t+dur+0.03);
  }
  function bell(t,f,dur,vol){ tone(t,f,dur,vol,"triangle"); tone(t,f*2,dur*0.7,vol*0.35,"sine"); }
  function whoosh(t,dur,vol){
    const nb=ctx.createBuffer(1,Math.ceil(ctx.sampleRate*dur),ctx.sampleRate), d=nb.getChannelData(0); for(let i=0;i<d.length;i++) d[i]=Math.random()*2-1;
    const n=ctx.createBufferSource(); n.buffer=nb; const f=ctx.createBiquadFilter(); f.type="bandpass"; f.Q.value=1.2;
    f.frequency.setValueAtTime(500,t); f.frequency.exponentialRampToValueAtTime(2600,t+dur);
    const g=ctx.createGain(); g.gain.setValueAtTime(0.0001,t); g.gain.linearRampToValueAtTime(vol,t+dur*0.4); g.gain.exponentialRampToValueAtTime(0.0001,t+dur);
    n.connect(f); f.connect(g); g.connect(out); n.start(t); n.stop(t+dur+0.03);
  }
  function caw(t,base,dur,vol){
    const g=ctx.createGain(); g.gain.value=0;
    const o1=ctx.createOscillator(), o2=ctx.createOscillator(); o1.type="sawtooth"; o2.type="square";
    o1.frequency.setValueAtTime(base*1.25,t); o1.frequency.exponentialRampToValueAtTime(base*0.72,t+dur);
    o2.frequency.setValueAtTime(base*1.27,t); o2.frequency.exponentialRampToValueAtTime(base*0.70,t+dur);
    const nb=ctx.createBuffer(1,Math.ceil(ctx.sampleRate*dur),ctx.sampleRate), d=nb.getChannelData(0); for(let i=0;i<d.length;i++) d[i]=Math.random()*2-1;
    const n=ctx.createBufferSource(); n.buffer=nb; const ng=ctx.createGain(); ng.gain.value=0.35;
    const rasp=ctx.createGain(); rasp.gain.value=0.6; const lfo=ctx.createOscillator(); lfo.frequency.value=55; const lg=ctx.createGain(); lg.gain.value=0.4; lfo.connect(lg); lg.connect(rasp.gain);
    const f1=ctx.createBiquadFilter(); f1.type="bandpass"; f1.frequency.value=1150; f1.Q.value=2.5;
    const f2=ctx.createBiquadFilter(); f2.type="bandpass"; f2.frequency.value=2300; f2.Q.value=3.5;
    const mix=ctx.createGain(); o1.connect(mix); o2.connect(mix); n.connect(ng); ng.connect(mix);
    mix.connect(rasp); rasp.connect(f1); rasp.connect(f2); f1.connect(g); f2.connect(g); g.connect(out);
    g.gain.setValueAtTime(0,t); g.gain.linearRampToValueAtTime(vol,t+0.02); g.gain.setValueAtTime(vol,t+dur*0.55); g.gain.exponentialRampToValueAtTime(0.0001,t+dur);
    [o1,o2,n,lfo].forEach(x=>{x.start(t);x.stop(t+dur+0.05);});
  }
  const SCALE=[523.25,659.25,783.99,1046.5,1318.51,1567.98,2093]; // C major arpeggio
  function play(kind,arg){
    if(muted) return; if(!ac()) return; const t=ctx.currentTime+0.01;
    try{ switch(kind){
      case "click": tone(t,720,0.05,0.07,"sine",900); break;
      case "start": caw(t,620,0.24,0.32); bell(t+0.3,SCALE[0],0.18,0.16); bell(t+0.42,SCALE[2],0.25,0.16); break;
      case "go": bell(t,SCALE[3],0.3,0.2); break;
      case "correct": { const n=(arg||0)+2; for(let i=0;i<n;i++) bell(t+i*0.075,SCALE[i],i===n-1?0.45:0.16,0.2);
        if(arg>=2) caw(t+n*0.075+0.08,560+arg*70,0.2,0.26); if(arg>=4) caw(t+n*0.075+0.34,900,0.22,0.26); break; }
      case "honor": bell(t,SCALE[0],0.14,0.14); bell(t+0.09,SCALE[1],0.25,0.14); break;
      case "miss": tone(t,220,0.16,0.2,"sine",110); tone(t,150,0.1,0.07,"square",90); break;
      case "skip": whoosh(t,0.22,0.22); break;
      case "tick": tone(t,arg<=1?1400:1000,0.035,0.07,"square"); break;
      case "timeout": bell(t,SCALE[2],0.2,0.16); bell(t+0.16,SCALE[1],0.2,0.16); bell(t+0.32,SCALE[0],0.45,0.16); break;
      case "star": bell(t,SCALE[3+(arg||0)],0.35,0.18); break;
      case "round": [0,2,3,4].forEach((s,i)=>bell(t+i*0.11,SCALE[s],i===3?0.6:0.16,0.18)); caw(t+0.62,640,0.22,0.26); caw(t+0.9,740,0.3,0.28); break;
      case "copy": bell(t,SCALE[4],0.1,0.12); bell(t+0.09,SCALE[5],0.2,0.12); break;
    } }catch(e){}
  }
  function toggle(){ muted=!muted; store.set("tgb-muted",muted?1:0); if(!muted) play("click"); return muted; }
  return {play,toggle,isMuted:()=>muted};
})();

/* ---------- SAVED STATE ---------- */
const DAYKEY="tgb"+SALT+"-"+todayKey();
let DAY = store.get(DAYKEY) || {day:dayNum(), done:[], cur:null};   // done=[{score,results}], cur = round in progress
if(!Array.isArray(DAY.done)) DAY={day:dayNum(),done:[],cur:null};
const PLAN = buildRounds(dayNum());
const totalScore=()=>DAY.done.reduce((a,r)=>a+r.score,0);
const starsFor=score=>score>=450?3:score>=300?2:score>=150?1:0;
function streakNow(){ const s=store.get("tgb-streak"); return s&&s.last>=dayNum()-1?s.count:0; }
function bumpStreak(){ const d=dayNum(), s=store.get("tgb-streak")||{last:0,count:0}; if(s.last===d) return; s.count=s.last===d-1?s.count+1:1; s.last=d; store.set("tgb-streak",s); }


/* ---------- LEADERBOARD (shared scores for the day; needs a database URL in data-lb) ---------- */
const LB=(()=>{
  const URL=(WRAP.dataset.lb||"").trim().replace(/\/+$/,""), on=/^https:\/\//.test(URL);
  let pid=store.get("tgb-pid"); if(!pid){ pid=Math.random().toString(36).slice(2,10)+Date.now().toString(36).slice(-4); store.set("tgb-pid",pid); }
  let name=store.get("tgb-name")||"", rows=null, err=false, tab="all", editing=false, lastLoad=0, busy=false, again=false;
  const path=()=>`${URL}/tgb${SALT}/${todayKey()}`;
  const clamp=(v,max)=>{ v=Math.round(+v); return v>=0&&v<=max?v:-1; };
  async function post(){
    if(!on||!name||!DAY.done.length) return;
    const r=[]; for(let i=0;i<ROUNDS;i++) r.push(DAY.done[i]?DAY.done[i].score:-1);
    try{ const res=await fetch(`${path()}/${pid}.json`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({n:name,r,t:totalScore(),u:Date.now()})}); if(!res.ok) throw 0; }catch(e){ err=true; }
  }
  async function load(force){
    if(!on) return; if(busy){ if(force) again=true; return; } if(!force&&Date.now()-lastLoad<4000) return; busy=true;
    try{
      const res=await fetch(path()+".json",{cache:"no-store"}); if(!res.ok) throw 0;
      const j=(await res.json())||{};
      rows=Object.entries(j).filter(([k,v])=>v&&typeof v.n==="string"&&v.n.trim()).map(([k,v])=>{
        const r=[]; for(let i=0;i<ROUNDS;i++) r.push(clamp(Array.isArray(v.r)?v.r[i]:-1,700));
        return {id:k,n:v.n.trim().slice(0,16),r,t:r.reduce((a,x)=>a+(x>0?x:0),0),played:r.filter(x=>x>=0).length};
      }).filter(x=>x.played>0);
      err=false; lastLoad=Date.now();
    }catch(e){ err=true; }
    busy=false; render();
    if(again){ again=false; load(true); }
  }
  function ranked(k){ // k = "all" or round index
    if(!rows) return [];
    const list=k==="all"?rows.map(x=>({...x,v:x.t})):rows.filter(x=>x.r[k]>=0).map(x=>({...x,v:x.r[k]}));
    return list.sort((a,b)=>b.v-a.v||b.played-a.played||a.n.localeCompare(b.n));
  }
  function leader(k){ const l=ranked(k); if(!l.length) return null; const top=l.filter(x=>x.v===l[0].v); return top.length>1?"tie":top[0].n; }
  function render(){
    const b=$("board"); if(!on){ b.classList.add("hidden"); return; }
    $("lbJoin").classList.toggle("hidden",!!name&&!editing);
    const tabs=[["all","Overall"]]; for(let i=0;i<ROUNDS;i++) tabs.push([i,"Round "+(i+1)]);
    $("lbTabs").innerHTML=tabs.map(([k,l])=>`<button type="button" data-k="${k}" class="${String(tab)===String(k)?"on":""}">${l}</button>`).join("");
    if(err&&!rows){ $("lbWinners").textContent=""; $("lbRows").innerHTML=""; $("lbNote").textContent="Couldn't reach the leaderboard. Tap ↻ to try again."; return; }
    if(!rows){ $("lbNote").textContent="Loading…"; return; }
    $("lbTabs").classList.toggle("hidden",ROUNDS===1); if(ROUNDS===1) tab="all";
    const w=[]; for(let i=0;ROUNDS>1&&i<ROUNDS;i++){ const n=leader(i); if(n) w.push(`R${i+1} 👑 <b>${n==="tie"?"Tied":esc(n)}</b>`); }
    const o=leader("all"); if(o&&rows.some(x=>x.played>=ROUNDS)) w.push(`Day 👑 <b>${o==="tie"?"Tied":esc(o)}</b>`);
    $("lbWinners").innerHTML=w.join(" &nbsp;·&nbsp; ");
    const list=ranked(tab); let rank=0, prev=null;
    $("lbRows").innerHTML=list.map((x,i)=>{ if(x.v!==prev){ rank=i+1; prev=x.v; }
      const sub=tab==="all"&&x.played<ROUNDS?`<small>${x.played} of ${ROUNDS} rounds</small>`:"";
      return `<li class="${x.id===pid?"me":""}"><span class="rk">${rank===1?"👑":rank}</span><span class="nm">${esc(x.n)}${x.id===pid?" <small>(you)</small>":""}${sub}</span><span class="vl">${ftText(x.v)}</span></li>`; }).join("");
    const mine=list.findIndex(x=>x.id===pid);
    let note="";
    if(!list.length) note=tab==="all"?"No scores yet today. Be the first!":"Nobody has finished this round yet.";
    else if(!name) note="Add your name to get on the board.";
    else if(mine<0&&!DAY.done.length) note=`Playing as <b style="color:var(--ink)">${esc(name)}</b>. You'll show up after your first round. `;
    else if(name) note=`Playing as <b style="color:var(--ink)">${esc(name)}</b>. `;
    if(name&&!editing) note+=`<button type="button" class="linkish" id="lbEdit">Change name</button>`;
    if(err) note+=" · Couldn't refresh just now.";
    $("lbNote").innerHTML=note;
  }
  function visible(v){ if(!on) return; $("board").classList.toggle("hidden",!v); if(v){ render(); load(false); } }
  async function sync(){ await post(); await load(true); }
  if(on){
    $("lbJoin").addEventListener("submit",e=>{ e.preventDefault(); const v=$("lbName").value.replace(/\s+/g," ").trim().slice(0,16); if(!v) return;
      name=v; editing=false; store.set("tgb-name",name); SFX.play("copy"); try{ $("lbName").blur(); }catch(_){} render(); sync(); });
    $("lbTabs").addEventListener("click",e=>{ const k=e.target&&e.target.dataset&&e.target.dataset.k; if(k===undefined) return; tab=k==="all"?"all":+k; SFX.play("click"); render(); });
    $("lbNote").addEventListener("click",e=>{ if(e.target&&e.target.id==="lbEdit"){ editing=true; $("lbName").value=name; render(); $("lbName").focus(); } });
    $("lbRefresh").addEventListener("click",()=>{ SFX.play("click"); load(true); });
    setInterval(()=>{ if(!$("board").classList.contains("hidden")&&!document.hidden) load(false); },20000);
    document.addEventListener("visibilitychange",()=>{ if(!document.hidden&&!$("board").classList.contains("hidden")) load(false); });
  }
  return {on,visible,sync,setTab:k=>{tab=k;},setName:v=>{name=v;}};
})();

/* ---------- SCENE ---------- */
let S=null, timerId=null, deadline=0, lastSec=-1;
const SECONDS=25;
function stars(){ const sky=$("stars"); for(let i=0;i<34;i++){ const s=document.createElement("i"); s.className="star"; s.style.left=Math.random()*100+"%"; s.style.top=Math.random()*78+"%"; s.style.animationDelay=(Math.random()*3)+"s"; sky.appendChild(s); } }
function scene(pct){
  const lift=Math.min(pct*3,1);
  $("crow").style.bottom=(12+lift*30)+"px";
  $("world").style.transform=`translateY(${pct*230}px)`;
  $("ground").style.transform=`translateY(${lift*34}px)`;
  $("stars").style.opacity=0.4+pct*0.6;
}
let shownFt=0, altAnim=0;
function countUp(el,from,to,dur,suffix,onDone){
  if(RM||from===to||!window.requestAnimationFrame){ el.textContent=to.toLocaleString()+suffix; onDone&&onDone(); return 0; }
  const t0=performance.now();
  const step=now=>{ const k=Math.min(1,(now-t0)/dur), e=1-Math.pow(1-k,3), v=Math.round(from+(to-from)*e); el.textContent=v.toLocaleString()+suffix; if(el.id==="altitude") shownFt=v; if(k<1) altAnim=requestAnimationFrame(step); else onDone&&onDone(); };
  return altAnim=requestAnimationFrame(step);
}
function setAltitude(score,instant){
  scene(Math.min(score/700,1));
  const target=score*FT_PER_PT, el=$("altitude");
  cancelAnimationFrame(altAnim);
  if(instant){ shownFt=target; el.textContent=target.toLocaleString()+" ft"; return; }
  if(target>shownFt){ el.classList.remove("bump"); void el.offsetWidth; el.classList.add("bump"); }
  countUp(el,shownFt,target,650," ft"); if(RM) shownFt=target;
}
const iconFor=r=>r.tier>=0?TIERS[r.tier].icon:(r.skipped?"🙈":"🌾");
function renderHoard(popLast){ const items=S.results.filter(r=>r.tier>=0); $("hoard").innerHTML=items.map((r,i)=>`<span class="${popLast&&i===items.length-1?"pop":""}">${TIERS[r.tier].icon}</span>`).join(""); }
function renderPips(){ let h=""; for(let i=0;i<PER;i++){ const r=S.results[i]; h+=r?(r.tier>=0?`<i class="done" style="--c:${TIERS[r.tier].color}"></i>`:`<i class="miss"></i>`):`<i class="${i===S.i?"cur":""}"></i>`; } $("pips").innerHTML=h; }
function crowDo(cls){ const c=$("crow"); c.classList.remove("celebrate","flinch"); void c.getBoundingClientRect(); c.classList.add(cls); }
function floatPts(text,color){
  const sky=$("sky"), c=$("crow"), f=document.createElement("div"); f.className="floatpts"; f.textContent=text; f.style.color=color;
  const sr=sky.getBoundingClientRect(), cr=c.getBoundingClientRect();
  f.style.left=(cr.left-sr.left+58)+"px"; f.style.top=Math.max(26,cr.top-sr.top-6)+"px";
  sky.appendChild(f); setTimeout(()=>f.remove(),1200);
}
function feathers(n){ if(RM) return; const sky=$("sky");
  for(let i=0;i<n;i++){ const f=document.createElement("div"); f.className="feather"; f.textContent=["🪶","✨","🪶"][i%3];
    f.style.left=(Math.random()*95)+"%"; f.style.animationDuration=(1.4+Math.random()*1.4)+"s"; f.style.animationDelay=(Math.random()*.6)+"s";
    f.style.setProperty("--r",(Math.random()*360-180)+"deg"); sky.appendChild(f); setTimeout(()=>f.remove(),3600); } }
function enter(id){ const e=$(id); e.classList.remove("enter"); void e.offsetWidth; e.classList.add("enter"); }
let curScreen="intro";
function show(screen){ curScreen=screen; ["intro","game","summary","pboard"].forEach(s=>$(s).classList.toggle("hidden",s!==screen)); LB.visible(screen==="intro"||screen==="summary"); WRAP.classList.toggle("playing",screen==="game"); enter(screen); LB.visible(screen!=="game"); }
function keepVisible(){ try{ const vh=window.visualViewport?visualViewport.height:innerHeight; const fb=$("form").getBoundingClientRect().bottom, top=$("sky").getBoundingClientRect().top; if(fb>vh-6||top<-40) $("sky").scrollIntoView({block:"start",behavior:RM?"auto":"smooth"}); }catch(e){} }

/* ---------- INTRO ---------- */
function renderStreak(){ const n=streakNow(), el=$("streak"); el.classList.toggle("hidden",n<1); el.textContent="🔥 "+n; el.title=n+"-day streak"; }
function renderIntro(){
  $("dayLabel").textContent="Today's Flight #"+dayNum();
  $("howRounds").textContent=ROUNDS===1?"1 round":ROUNDS+" rounds";
  $("legend").innerHTML=TIERS.map(t=>`<div><span>${t.icon}</span><b style="color:${t.color}">${t.pts}</b><small>${t.name}</small></div>`).join("");
  $("legendFull").innerHTML=TIERS.map(t=>`<span>${t.icon}</span><span style="color:${t.color};font-weight:600">${t.name}</span><span class="p">${t.pts} pts</span>`).join("")
    +`<span>🌾</span><span style="color:var(--bad);font-weight:600">Scarecrowed (no answer)</span><span class="p">0 pts</span>`;
  const n=DAY.done.length, mid=DAY.cur&&DAY.cur.round===n+1&&DAY.cur.results.length>0&&DAY.cur.results.length<PER;
  $("startDaily").textContent=n>=ROUNDS?"See today's results":mid?`Continue Round ${n+1}`:n>0?`Play Round ${n+1}`:"Play";
  $("progressNote").textContent=n>=ROUNDS?(ROUNDS===1?"Today's flight is done. New flight tomorrow.":`All ${ROUNDS} rounds done. New flight tomorrow.`):n>0?`${n} of ${ROUNDS} rounds done · ${ftText(totalScore())} so far`:"";
  renderStreak();
}

/* ---------- ROUND FLOW ---------- */
function start(){
  const n=DAY.done.length;
  if(n>=ROUNDS){ S={round:ROUNDS,...DAY.done[ROUNDS-1]}; showSummary(false); return; }
  const c=DAY.cur;
  S=(c&&c.round===n+1&&c.results.length<PER)?{round:n+1,qs:PLAN[n],i:c.results.length,results:c.results,score:c.score}:{round:n+1,qs:PLAN[n],i:0,results:[],score:0};
  launch();
}
/* A bonus round that doesn't count: fresh questions, no leaderboard, no streak. */
function startFun(){
  const used=new Set(PLAN.flat()), pool=P.map((_,i)=>i).sort(()=>Math.random()-0.5).sort((a,b)=>used.has(a)-used.has(b));
  const qs=[], groups=new Set();
  for(const i of pool){ const g=groupOf(P[i].topic); if(qs.length<PER&&!groups.has(g)){ qs.push(i); groups.add(g); } }
  S={fun:true,round:0,qs:qs.sort(()=>Math.random()-0.5),i:0,results:[],score:0};
  launch();
}
const roundName=()=>S.fun?"Fun round":ROUNDS===1?"Today's flight":"Round "+S.round;
function launch(){
  show("game"); setAltitude(S.score,true); renderHoard(false);
  prep(); S.locked=true;
  const sp=$("splash"), tx=$("splashText"); sp.classList.remove("hidden"); tx.textContent=roundName();
  const again=()=>{ tx.style.animation="none"; void tx.offsetWidth; tx.style.animation=""; };
  setTimeout(()=>{ tx.textContent="Go!"; again(); SFX.play("go"); },RM?300:750);
  setTimeout(()=>{ sp.classList.add("hidden"); S.locked=false; beginTimer(); },RM?600:1200);
}
function prep(){
  const p=P[S.qs[S.i]];
  $("roundChip").textContent=roundName();
  renderPips();
  const qn=$("question"); qn.textContent=p.q; qn.classList.remove("qfade"); void qn.offsetWidth; qn.classList.add("qfade");
  S.tries=[]; S.skipped=false; $("tryMsg").textContent="";
  $("play").classList.remove("hidden"); $("result").classList.add("hidden");
  const a=$("answer"); a.value=""; a.disabled=false; $("go").disabled=false; $("skip").disabled=false;
  $("timebar").style.transform="scaleX(1)"; $("timer").className="timer"; $("secs").className="secs"; $("secs").textContent=SECONDS;
  a.focus({preventScroll:true}); setTimeout(keepVisible,380);
}
function beginTimer(){ deadline=Date.now()+SECONDS*1000; lastSec=-1; clearInterval(timerId); timerId=setInterval(tick,100); tick(); }
function ask(){ prep(); beginTimer(); }
function tick(){
  const left=Math.max(0,deadline-Date.now()), sec=Math.ceil(left/1000);
  $("timebar").style.transform=`scaleX(${left/(SECONDS*1000)})`;
  const T=$("timer"); T.classList.toggle("mid",left<12000&&left>=6000); T.classList.toggle("low",left<6000);
  if(sec!==lastSec){ lastSec=sec; $("secs").textContent=sec; $("secs").classList.toggle("low",sec<=5); if(sec<=5&&sec>0) SFX.play("tick",sec); }
  if(left<=0) submit(true);
}
function skip(){ if($("answer").disabled||S.locked) return; S.skipped=true; SFX.play("skip"); finish(P[S.qs[S.i]],"",null); }
function honor(){ if($("answer").disabled||!S.tries.length) return; const raw=S.tries.pop(); finish(P[S.qs[S.i]],raw,{display:raw,tier:0,corrected:false,honor:true}); }
function submit(timeout){
  const a=$("answer"); if(a.disabled||S.locked) return;
  const p=P[S.qs[S.i]], raw=a.value.trim(), hit=raw?judge(p,raw):null;
  if(!hit&&!timeout){
    if(!raw) return;
    S.tries.push(raw); a.value=""; a.classList.remove("shake"); void a.offsetWidth; a.classList.add("shake"); a.focus({preventScroll:true});
    $("tryMsg").innerHTML=`“${esc(raw)}” isn't on the list. Try again!<br><button type="button" class="honor" id="honorBtn">🤞 I'm sure it's right (+10)</button>`;
    SFX.play("miss"); crowDo("flinch"); buzz(40);
    return;
  }
  if(raw&&!hit) S.tries.push(raw);
  finish(p,raw,hit);
}
function finish(p,raw,hit){
  clearInterval(timerId); $("timer").classList.add("off"); $("secs").className="secs off";
  $("answer").disabled=true; $("go").disabled=true; $("skip").disabled=true; $("tryMsg").textContent="";
  const misses=S.tries.length;
  S.results.push({q:p.q,skipped:!!S.skipped&&!hit,honor:!!(hit&&hit.honor),input:raw||S.tries[misses-1]||"",tier:hit?hit.tier:-1,display:hit?hit.display:"",misses});
  if(hit) S.score+=TIERS[hit.tier].pts;
  if(!S.fun){ DAY.cur={round:S.round,results:S.results,score:S.score}; store.set(DAYKEY,DAY); }
  setAltitude(S.score); renderHoard(!!hit); renderPips();
  const missTxt=misses?` (after ${misses} miss${misses>1?"es":""})`:"";
  if(hit){
    const t=TIERS[hit.tier];
    $("tierName").innerHTML=`${t.icon} <span style="color:${t.color}">${t.name}</span>`;
    $("pts").textContent="+"+t.pts; $("pts").style.color=t.color;
    $("your").innerHTML=`You said: <b style="color:var(--ink)">${esc(hit.display)}</b>${missTxt}`+(hit.honor?`<div class="fix">🤞 Benefit of the doubt</div>`:hit.corrected?`<div class="fix">✨ Autocorrected from “${esc(raw)}”</div>`:"");
    SFX.play(hit.honor?"honor":"correct",hit.tier); crowDo("celebrate"); floatPts("+"+t.pts+" "+t.icon,t.color); buzz(hit.tier>=3?[30,40,30,40,60]:25);
    if(hit.tier>=4) feathers(12);
  }else{
    $("tierName").innerHTML=S.skipped?`🙈 <span style="color:var(--muted)">Skipped</span>`:`🌾 <span style="color:var(--bad)">${misses?"Scarecrowed":"Out of time"}</span>`;
    $("pts").textContent="+0"; $("pts").style.color="var(--muted)";
    $("your").textContent=misses?`Your guesses: ${S.tries.join(", ")}`:(S.skipped?"No worries. Here's what would have counted:":"Here's what would have counted:");
    if(!S.skipped){ SFX.play("timeout"); crowDo("flinch"); buzz([60,40,60]); }
  }
  $("ladder").innerHTML=TIERS.map((t,k)=>`<div class="${hit&&k===hit.tier?"on":""}" style="--c:${t.color}" title="${t.name}">${t.icon}</div>`).join("");
  const filled=[4,3,2,1,0].filter(k=>p.t[k]&&p.t[k].length), nm=k=>p.t[k].map(a=>a.split("|")[0]);
  const top=nm(filled[0]).slice(0,3), nxt=filled[1]!==undefined?nm(filled[1]).slice(0,2):[];
  $("rareList").innerHTML=`Shiniest answers: <b>${top.map(esc).join("</b>, <b>")}</b>`+(nxt.length?` · Also: ${nxt.map(esc).join(", ")}`:"");
  $("next").textContent=S.i===PER-1?(S.fun||ROUNDS===1?"Finish":`Finish Round ${S.round}`):"Next question";
  $("play").classList.add("hidden"); $("result").classList.remove("hidden");
  try{ $("answer").blur(); }catch(e){}
}
function next(){
  S.i++;
  if(S.i>=PER&&S.fun){ showSummary(true); return; }
  if(S.i>=PER){
    DAY.done.push({score:S.score,results:S.results}); DAY.cur=null; store.set(DAYKEY,DAY);
    bumpStreak();
    if(DAY.done.length>=ROUNDS){ const b=store.get("tgb-best"+SALT)||0; if(totalScore()>b) store.set("tgb-best"+SALT,totalScore()); }
    LB.setTab(DAY.done.length>=ROUNDS?"all":S.round-1);
    showSummary(true); LB.sync();
  } else ask();
}

/* ---------- SUMMARY ---------- */
let cdTimer=null;
function showSummary(fresh){
  show("summary"); clearInterval(timerId);
  setAltitude(S.score,!fresh); renderHoard(false); renderStreak();
  const n=DAY.done.length, fun=!!S.fun, allDone=n>=ROUNDS&&!fun;
  $("sumLabel").textContent=fun?"Fun round · doesn't count":ROUNDS===1?"Today's flight complete":`Round ${S.round} of ${ROUNDS} complete`;
  const st=starsFor(S.score), spans=$("sumStars").children;
  for(let k=0;k<3;k++){ spans[k].className=""; spans[k].style.animationDelay=""; }
  void $("sumStars").offsetWidth;
  for(let k=0;k<st;k++){ spans[k].style.animationDelay=(0.25+k*0.28)+"s"; spans[k].className="on"; if(fresh) setTimeout(()=>SFX.play("star",k),250+k*280); }
  countUp($("sumAlt"),fresh?0:S.score*FT_PER_PT,S.score*FT_PER_PT,900," ft");
  const verdict=S.score>=600?"Legendary hoarder.":S.score>=450?"A very shiny nest.":S.score>=300?"Respectable crow.":S.score>=150?"Mostly strinky coal.":"Scarecrow got you.";
  $("sumScore").textContent=`${S.score} of 700 points · ${verdict}`;
  $("sumList").innerHTML=S.results.map((r,i)=>{ const t=r.tier>=0?TIERS[r.tier]:null;
    const ans=r.display?esc(r.display):(r.input?`<s>${esc(r.input)}</s>`:(r.skipped?"Skipped":"No answer"));
    return `<li style="animation-delay:${0.1+i*0.05}s"><span class="ic">${iconFor(r)}</span><span class="tx"><span class="qq">${esc(r.q)}</span><span class="aa" style="${t?"":"color:var(--muted);font-weight:500"}">${ans}</span></span><b style="color:${t?t.color:"var(--muted)"}">${t?"+"+t.pts:"0"}</b></li>`; }).join("");
  $("again").classList.toggle("hidden",allDone||fun); $("again").textContent=`Play Round ${n+1}`;
  $("funBtn").classList.toggle("hidden",!(fun||n>=ROUNDS)); $("funBtn").className=(fun?"big":"big ghost")+($("funBtn").classList.contains("hidden")?" hidden":"");
  $("backDay").classList.toggle("hidden",!fun); $("backDay").textContent=n>=ROUNDS?"Back to today's results":"Back to today's flight";
  $("copy").classList.toggle("hidden",fun); $("openBoard2").classList.toggle("hidden",fun||LB.on);
  $("copy").className=(allDone?"big":"big ghost")+(fun?" hidden":"");
  $("copy").textContent="Share results"; $("shareBox").style.display="none";
  $("dayBox").classList.toggle("hidden",!allDone);
  clearInterval(cdTimer);
  if(allDone){
    $("dayRows").classList.toggle("hidden",ROUNDS===1); if(ROUNDS===1){ const dt=$("dayTotal").parentElement; dt.style.borderTop="0"; dt.style.marginTop="0"; dt.style.paddingTop="0"; } $("dayRows").innerHTML=DAY.done.map((r,i)=>`<div class="dayrow"><span>Round ${i+1} <span class="st">${"★".repeat(starsFor(r.score))}${"☆".repeat(3-starsFor(r.score))}</span></span><span>${ftText(r.score)}</span></div>`).join("");
    $("dayTotal").textContent=ftText(totalScore());
    const best=store.get("tgb-best"+SALT)||0, sn=streakNow();
    $("dayMeta").textContent=[best>totalScore()?`Your best day: ${ftText(best)}`:(best?"That's your best day yet!":""), sn>1?`🔥 ${sn}-day streak`:""].filter(Boolean).join(" · ");
    const cd=()=>{ const now=new Date(), mid=new Date(now); mid.setHours(24,0,0,0); const s=Math.max(0,Math.floor((mid-now)/1000)); $("nextIn").textContent=`Next flight in ${Math.floor(s/3600)}h ${String(Math.floor(s%3600/60)).padStart(2,"0")}m ${String(s%60).padStart(2,"0")}s`; };
    cd(); cdTimer=setInterval(cd,1000);
  }
  if(fresh){ SFX.play("round"); if(S.score>=300) feathers(S.score>=450?22:12); }
}
function shareText(){
  const lines=DAY.done.map((r,i)=>`R${i+1} ${r.results.map(iconFor).join("")} ${ftText(r.score)}`);
  const sn=streakNow();
  return `That's Good Bird #${dayNum()} 🐦‍⬛${myName()?" · "+myName():""}\n${lines.join("\n")}\nTotal: ${ftText(totalScore())}`+(sn>1?` · 🔥${sn}`:"")+`\n🏆 ${codeFor(myEntry())}`;
}
async function share(){
  const txt=shareText(); SFX.play("copy");
  if(navigator.share&&!IN_FRAME){ try{ await navigator.share({text:txt}); return; }catch(e){ if(e&&e.name==="AbortError") return; } }
  try{ await navigator.clipboard.writeText(txt); $("copy").textContent="Copied! Paste it to your friends"; }
  catch(e){ const b=$("shareBox"); b.value=txt; b.style.display="block"; b.focus(); b.select(); $("copy").textContent="Copy the text below"; }
}

/* ---------- LEADERBOARD (scores travel as a short code inside shared results) ---------- */
const LBKEY="tgb"+SALT+"-lb-"+todayKey();
const myName=()=>String(store.get("tgb-name")||"").trim();
const b64e=s=>btoa(unescape(encodeURIComponent(s))).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"");
const b64d=s=>{ try{ return decodeURIComponent(escape(atob(s.replace(/-/g,"+").replace(/_/g,"/")))); }catch(e){ return null; } };
const sumOf=body=>{ let c=7; for(const ch of body) c=(c*31+ch.charCodeAt(0))%997; return c; };
function myEntry(){ const r=[]; for(let i=0;i<ROUNDS;i++) r.push(DAY.done[i]?DAY.done[i].score:null); return {name:myName()||"You",r,me:true}; }
function codeFor(e){ const body=`${dayNum()}.${b64e(e.name)}.${e.r.map(v=>v==null?"x":v).join("-")}`; return `TGB:${body}.${sumOf(body)}`; }
function parseCodes(text){
  const out=[], re=/TGB:(\d+)\.([A-Za-z0-9_-]+)\.([0-9x-]+)\.(\d+)/g; let m;
  while((m=re.exec(text))){
    if(sumOf(`${m[1]}.${m[2]}.${m[3]}`)!==+m[4]) continue;
    const name=b64d(m[2]); if(!name) continue;
    const r=m[3].split("-").slice(0,ROUNDS).map(v=>v==="x"?null:Math.max(0,Math.min(700,parseInt(v,10)||0)));
    while(r.length<ROUNDS) r.push(null);
    out.push({day:+m[1],name:name.replace(/\s+/g," ").trim().slice(0,14)||"Friend",r});
  }
  return out;
}
const friends=()=>{ const f=store.get(LBKEY); return f&&typeof f==="object"?f:{}; };
const roundsDone=e=>e.r.filter(v=>v!=null).length;
const totalOf=e=>e.r.reduce((a,v)=>a+(v||0),0);
function addFriends(){
  const found=parseCodes($("pasteIn").value), f=friends(), added=[], msg=[]; SFX.play("click");
  if(!found.length){ $("addMsg").textContent="No score code found. Ask your friend to tap Share results and send you the whole message."; return; }
  found.forEach(e=>{
    if(e.day!==dayNum()){ msg.push(`${e.name}'s score is from flight #${e.day}, not today's.`); return; }
    const k=e.name.toLowerCase();
    if(myName()&&k===myName().toLowerCase()){ msg.push("That one is your own score."); return; }
    if(!f[k]||roundsDone(e)>=roundsDone(f[k])){ f[k]={name:e.name,r:e.r}; added.push(e.name); }
  });
  store.set(LBKEY,f);
  if(added.length){ $("pasteIn").value=""; msg.unshift(`Added ${added.join(" and ")}.`); SFX.play("copy"); }
  $("addMsg").textContent=msg.join(" "); renderBoard();
}
let lbTab="all", boardFrom="intro";
function openBoard(){ SFX.play("click"); boardFrom=curScreen==="summary"?"summary":"intro"; $("addMsg").textContent=""; show("pboard"); renderBoard(); }
function renderBoard(){
  $("boardLabel").textContent="Flight #"+dayNum();
  const all=[myEntry(),...Object.entries(friends()).map(([k,e])=>({...e,k}))];
  const val=(e,t)=>t==="all"?(roundsDone(e)?totalOf(e):null):e.r[+t];
  const ranked=t=>all.filter(e=>val(e,t)!=null).sort((a,b)=>val(b,t)-val(a,t));
  $("pTabs").classList.toggle("hidden",ROUNDS===1); if(ROUNDS===1) lbTab="all";
  let w=""; for(let i=0;ROUNDS>1&&i<ROUNDS;i++){ const top=ranked(String(i))[0]; w+=`<div><small>Round ${i+1}</small><b>${top?"👑 "+esc(top.name):"—"}</b></div>`; }
  const lead=ranked("all")[0], everyoneDone=all.every(e=>roundsDone(e)===ROUNDS);
  w+=`<div class="day"><small>${everyoneDone&&lead?"Day winner":"Leading"}</small><b>${lead?"👑 "+esc(lead.name):"—"}</b></div>`;
  $("pWinners").innerHTML=w; $("pWinners").style.gridTemplateColumns=ROUNDS===1?"1fr":"";
  $("pTabs").innerHTML=[["all","Overall"],...Array.from({length:ROUNDS},(_,i)=>[String(i),"Round "+(i+1)])].map(([t,l])=>`<button type="button" data-t="${t}" class="${lbTab===t?"on":""}">${l}</button>`).join("");
  const rows=ranked(lbTab), rest=all.filter(e=>val(e,lbTab)==null);
  $("rank").innerHTML=[...rows,...rest].map((e,i)=>{ const v=val(e,lbTab);
    const sub=ROUNDS===1?(v==null?"Hasn't played yet":`${v} of 700 points`):lbTab==="all"?e.r.map((x,j)=>`R${j+1} ${x==null?"—":(x*FT_PER_PT).toLocaleString()}`).join(" · "):(v==null?"Hasn't played this round":`${v} of 700 points`);
    return `<li class="${e.me?"me":""}"><span class="pos">${v==null?"·":(i===0&&v>0?"👑":i+1)}</span><span class="who"><span class="nm">${esc(e.name)}${e.me?" (you)":""}</span><span class="sub">${sub}</span></span><span class="sc">${v==null?"—":ftText(v)}</span>${e.me?"":`<button type="button" class="rm" data-k="${esc(e.k)}" aria-label="Remove ${esc(e.name)}">×</button>`}</li>`; }).join("");
  $("rankNote").textContent=all.length<2?"Just you so far. When friends share their results, paste them in below.":"";
}

/* ---------- EVENTS ---------- */
$("form").addEventListener("submit",e=>{ e.preventDefault(); submit(false); });
$("next").addEventListener("click",()=>{ if(S.i<PER-1) SFX.play("click"); next(); });
$("startDaily").addEventListener("click",()=>{
  if(DAY.done.length<ROUNDS&&!myName()){ const n=$("nameIn"); n.classList.remove("shake"); void n.offsetWidth; n.classList.add("shake"); n.focus(); $("progressNote").textContent="Add your name first, so friends can find you on the leaderboard."; SFX.play("miss"); return; }
  if(DAY.done.length<ROUNDS) SFX.play("start"); start(); });
$("nameIn").value=myName();
if(LB.on){ $("openBoard").classList.add("hidden"); $("openBoard2").classList.add("hidden"); }
$("nameIn").addEventListener("input",e=>{ const v=e.target.value.replace(/\s+/g," ").trim().slice(0,14); store.set("tgb-name",v); LB.setName(v); });
$("nameIn").addEventListener("keydown",e=>{ if(e.key==="Enter"){ e.preventDefault(); e.target.blur(); } });
$("openBoard").addEventListener("click",()=>openBoard());
$("openBoard2").addEventListener("click",()=>openBoard());
$("boardBack").addEventListener("click",()=>{ SFX.play("click"); if(boardFrom==="summary") show("summary"); else { renderIntro(); show("intro"); } });
$("addFriend").addEventListener("click",addFriends);
$("pTabs").addEventListener("click",e=>{ const b=e.target.closest("button"); if(!b) return; lbTab=b.dataset.t; SFX.play("click"); renderBoard(); });
$("rank").addEventListener("click",e=>{ const b=e.target.closest(".rm"); if(!b) return; const f=friends(); delete f[b.dataset.k]; store.set(LBKEY,f); renderBoard(); });
$("again").addEventListener("click",()=>{ SFX.play("start"); start(); });
$("funBtn").addEventListener("click",()=>{ SFX.play("start"); startFun(); });
$("backDay").addEventListener("click",()=>{ SFX.play("click"); if(DAY.done.length>=ROUNDS) start(); else { setAltitude(0,true); $("hoard").innerHTML=""; renderIntro(); show("intro"); } });
$("skip").addEventListener("click",skip);
$("tryMsg").addEventListener("click",e=>{ if(e.target&&e.target.id==="honorBtn") honor(); });
$("copy").addEventListener("click",share);
$("mute").addEventListener("click",()=>{ $("mute").textContent=SFX.toggle()?"🔇":"🔊"; });
$("mute").textContent=SFX.isMuted()?"🔇":"🔊";
const helpOpen=o=>{ $("modal").classList.toggle("hidden",!o); if(o) $("closeHelp").focus(); };
$("help").addEventListener("click",()=>{ SFX.play("click"); helpOpen(true); });
$("closeHelp").addEventListener("click",()=>{ SFX.play("click"); helpOpen(false); });
$("modal").addEventListener("click",e=>{ if(e.target===$("modal")) helpOpen(false); });
document.addEventListener("keydown",e=>{
  if(e.key==="Escape") helpOpen(false);
  if(e.key==="Enter"&&!$("game").classList.contains("hidden")&&!$("result").classList.contains("hidden")&&document.activeElement!==$("next")){ e.preventDefault(); $("next").click(); }
});

try{ if(window.visualViewport) visualViewport.addEventListener("resize",()=>{ if(!$("game").classList.contains("hidden")&&!$("play").classList.contains("hidden")&&document.activeElement===$("answer")) keepVisible(); }); }catch(e){}

stars(); renderIntro(); setAltitude(0,true); enter("intro"); LB.visible(true);

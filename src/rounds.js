/* ---------- DAILY ROUNDS ---------- */
const ROUNDS=1, PER=7;
const SALT=2; // bump to reshuffle the questions and reset saved scores for everyone
const LAUNCH = new Date(2026,10,10); // Nov 10, 2026 = #1
function todayKey(){const d=new Date();return d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0");}
function dayNum(){const d=new Date();d.setHours(0,0,0,0);return Math.round((d-LAUNCH)/864e5)+1;}
function rng(seed){return()=>{seed|=0;seed=seed+0x6D2B79F5|0;let t=Math.imul(seed^seed>>>15,1|seed);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296;};}
function shuffle(arr,rand){for(let i=arr.length-1;i>0;i--){const j=Math.floor(rand()*(i+1));[arr[i],arr[j]]=[arr[j],arr[i]];}return arr;}
/* Build the day's rounds of 7 for the day: no prompt repeats, and each round mixes as many topics as possible. Same for everyone on the same date. */
/* Related topics count as one subject, so a round never doubles up (e.g. two video-game questions). */
const GROUP={"Video Games":"games","Fortnite":"games","Red Dead Redemption 2":"games","ROG Ally":"games",
  "Steph Curry":"nba","LeBron James":"nba",
  "Beta Theta Pi":"frats","Delta Tau Delta":"frats","Phi Gamma Delta":"frats","Fraternities":"frats",
  "Kevin Wolf":"mrbeast","MrBeast":"mrbeast"};
const MAX_PER_DAY=2; // no subject shows up more than twice in a day
const groupOf=t=>GROUP[t]||t;
function buildRounds(day){
  const rand=rng(day*7919+13+SALT*104729);
  let left=shuffle(P.map((_,i)=>i),rand);
  const rounds=[], usedToday={};
  for(let r=0;r<ROUNDS;r++){
    const byGroup={};
    left.forEach(i=>{const g=groupOf(P[i].topic); if((usedToday[g]||0)<MAX_PER_DAY)(byGroup[g]=byGroup[g]||[]).push(i);});
    // favor subjects used least today, then ones with more questions left
    const groups=shuffle(Object.keys(byGroup),rand).sort((x,y)=>((usedToday[x]||0)-(usedToday[y]||0))||(byGroup[y].length-byGroup[x].length));
    const pick=groups.slice(0,PER).map(g=>byGroup[g][0]);
    for(const i of left){ if(pick.length>=PER)break; if(!pick.includes(i)&&!pick.some(j=>P[j].topic===P[i].topic))pick.push(i); }
    for(const i of left){ if(pick.length>=PER)break; if(!pick.includes(i))pick.push(i); }
    pick.forEach(i=>{const g=groupOf(P[i].topic); usedToday[g]=(usedToday[g]||0)+1;});
    left=left.filter(i=>!pick.includes(i));
    rounds.push(shuffle(pick,rand));
  }
  return rounds;
}


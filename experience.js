// Book navigation follows the document; every source and calculator stays in the page.
(()=>{
const chapters=[
{id:'home',title:'Same curriculum. Unequal support.',label:'The opening question',tone:'peach',fact:'Qadam',factLabel:'A step toward equal support',summary:'Can AI-assisted professional support help reduce institutional inequality between rural and urban schools in Kazakhstan?'},
{id:'problem',title:'Geography shapes opportunity.',label:'01 / The problem',tone:'peach',fact:'67%',factLabel:'of schools in rural areas · December 2024',summary:'A common curriculum does not guarantee equal access to resources, expertise or professional support.'},
{id:'data',title:'Behind the numbers.',label:'02 / The data',tone:'mint',fact:'8.8 pp',factLabel:'urban–rural advancement gap · 2023',summary:'Explore six figures on institutional resources, teacher support and the potential and risks of AI.'},
{id:'research',title:'From access to effectiveness.',label:'03 / The research',tone:'lilac',fact:'4',factLabel:'steps in the research argument',summary:'Resources, institutional support, effective development and guided AI use shape the argument for a pilot.'},
{id:'solution',title:'A step forward.',label:'04 / The solution',tone:'gold',fact:'200',factLabel:'target teachers in the proposed pilot',summary:'Qadam Teacher combines curriculum resources, AI guidance and human mentoring. It remains a conceptual proposal.'},
{id:'cost',title:'The hidden price of AI.',label:'04B / The cost',tone:'blue',fact:'₸60.1m',factLabel:'baseline estimate · hypothetical pilot',summary:'Explore how infrastructure, human expertise, AI processing and governance shape the modeled investment.'},
{id:'verdict',title:'Yes. As an opportunity.',label:'05 / The verdict',tone:'forest',fact:'5',factLabel:'conditions for a justified pilot',summary:'Independent evaluation, responsible governance, equitable access, professional autonomy and proportionate costs.'}
];
let entries=[],active=-1,ticking=false,flipTimer,settleTimer,ready=false;
const book=document.querySelector('#reading-book'),spread=document.querySelector('#book-spread');
if(!book)return;
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
function shorten(text,max=210){text=text.replace(/\s+/g,' ').trim();return text.length>max?text.slice(0,max).replace(/\s+\S*$/,'')+'…':text;}
function rebuild(){
 entries=[];
 chapters.forEach(ch=>{
 const section=document.getElementById(ch.id);if(!section)return;
 entries.push({...ch,el:section,anchor:ch.id});
 const selectors=ch.id==='data'?'.figure':ch.id==='research'?'.research-article':ch.id==='cost'?'.subsection,.true-price':ch.id==='solution'?'#existing-initiatives,.solution-grid,.case-studies':[];
 if(!selectors.length)return;
 section.querySelectorAll(selectors).forEach((el,i)=>{
 if(!el.id)el.id=ch.id+'-reading-page-'+(i+1);
 const title=el.querySelector('h3,h4')?.textContent||'The true price of Qadam Teacher';
 const summary=el.querySelector('.figure-desc,p:not(.source)')?.textContent||ch.summary;
 const fact=el.querySelector('.callout,.gap-numbers strong,.case-studies strong')?.textContent;
 entries.push({...ch,el,anchor:el.id,title,summary:shorten(summary),fact:fact?shorten(fact,22):ch.fact,factLabel:fact?'Explore the evidence and its limitations':ch.factLabel,label:ch.label+' / '+String(i+1).padStart(2,'0')});
 });
 });
 entries.sort((a,b)=>a.el.getBoundingClientRect().top-b.el.getBoundingClientRect().top);
 ready=true;sync(true);
}
function render(index,initial=false){
 const ch=entries[index];if(!ch)return;
 const backwards=index<active;
 clearTimeout(flipTimer);clearTimeout(settleTimer);
 book.classList.remove('is-turning','is-turning-back');
 if(!initial&&!reduce){void book.offsetWidth;book.classList.add(backwards?'is-turning-back':'is-turning');}
 const fill=()=>{
 document.querySelector('#book-label').textContent=ch.label;
 document.querySelector('#book-title').textContent=ch.title;
 document.querySelector('#book-summary').textContent=shorten(ch.summary);
 document.querySelector('#book-fact').textContent=ch.fact;
 document.querySelector('#book-fact-label').textContent=ch.factLabel;
 document.querySelector('#book-page-link').href='#'+ch.anchor;
 document.querySelector('#book-folio-left').textContent=String(index*2+1).padStart(2,'0');
 document.querySelector('#book-folio-right').textContent=String(index*2+2).padStart(2,'0');
 document.querySelector('#book-position').textContent=(index+1)+' / '+entries.length;
 document.querySelector('#book-prev').disabled=index===0;
 document.querySelector('#book-next').disabled=index===entries.length-1;
 spread.dataset.tone=ch.tone;
 document.querySelector('#book-status').textContent='Now reading: '+ch.title;
 };
 if(initial||reduce)fill();else flipTimer=setTimeout(fill,220);
 settleTimer=setTimeout(()=>book.classList.remove('is-turning','is-turning-back'),740);
 active=index;
}
function sync(initial=false){
 if(!ready)return;
 const target=innerHeight*.33;
 let index=0;entries.forEach((entry,i)=>{if(entry.el.getBoundingClientRect().top<=target)index=i;});
 if(index!==active)render(index,initial);
 const current=entries[index].el.getBoundingClientRect().top;
 const next=entries[index+1]?.el.getBoundingClientRect().top;
 const local=next===undefined?Math.min(1,Math.max(0,-current/Math.max(1,entries[index].el.offsetHeight))):Math.min(1,Math.max(0,(target-current)/Math.max(1,next-current)));
 document.querySelector('#book-track').style.width=((index+local)/entries.length*100)+'%';
}
function requestSync(){if(ticking)return;ticking=true;requestAnimationFrame(()=>{sync();ticking=false;});}
function go(delta){const next=entries[Math.max(0,Math.min(entries.length-1,active+delta))];if(next)next.el.scrollIntoView({behavior:reduce?'instant':'smooth',block:'start'});}
document.querySelector('#book-prev').onclick=()=>go(-1);
document.querySelector('#book-next').onclick=()=>go(1);
function collapse(){const collapsed=book.classList.toggle('is-collapsed');book.classList.remove('is-expanded');document.querySelector('#book-expand').setAttribute('aria-expanded','false');document.querySelector('#book-collapse').textContent=collapsed?'+':'−';document.querySelector('#book-collapse').setAttribute('aria-label',collapsed?'Show reading book':'Minimize reading book');document.querySelector('#book-collapse').setAttribute('aria-expanded',String(!collapsed));}
document.querySelector('#book-collapse').onclick=collapse;
function expand(){book.classList.remove('is-collapsed');document.querySelector('#book-collapse').textContent='−';document.querySelector('#book-collapse').setAttribute('aria-expanded','true');document.querySelector('#book-collapse').setAttribute('aria-label','Minimize reading book');const expanded=book.classList.toggle('is-expanded');document.querySelector('#book-expand').setAttribute('aria-expanded',String(expanded));document.querySelector('#book-expand').setAttribute('aria-label',expanded?'Reduce reading book':'Enlarge reading book');}
document.querySelector('#book-expand').onclick=expand;
document.querySelector('#open-reading-book').onclick=()=>{if(!book.classList.contains('is-expanded'))expand();};
addEventListener('keydown',e=>{if(e.key==='Escape'&&book.classList.contains('is-expanded'))expand();});
addEventListener('scroll',requestSync,{passive:true});addEventListener('resize',requestSync);
document.addEventListener('toggle',requestSync,true);
// Tables are rebuilt by the calculators. Delegated controls keep working after each update.
function cellSortValue(text){let value=text.trim();if(/^(?:₸|[+−-]?\d|approximately\s+\d)/i.test(value)){const n=Number(value.replace(/approximately\s*/i,'').replace(/[^0-9.\-]/g,''));if(Number.isFinite(n))return n;}return value.toLocaleLowerCase();}
document.addEventListener('click',e=>{
 const sortButton=e.target.closest('[data-sort-column]');
 if(sortButton){const table=sortButton.closest('table'),body=table.tBodies[0],col=Number(sortButton.dataset.sortColumn);if(!body)return;
 const th=sortButton.closest('th'),direction=th.getAttribute('aria-sort')==='ascending'?'descending':'ascending';
 table.querySelectorAll('th').forEach(h=>{h.removeAttribute('aria-sort');const arrow=h.querySelector('.sort-arrow');if(arrow)arrow.textContent='↕';});
 th.setAttribute('aria-sort',direction);sortButton.querySelector('.sort-arrow').textContent=direction==='ascending'?'↑':'↓';
 const rows=[...body.rows];rows.sort((a,b)=>{const av=cellSortValue(a.cells[col]?.textContent||''),bv=cellSortValue(b.cells[col]?.textContent||'');let result=typeof av==='number'&&typeof bv==='number'?av-bv:String(av).localeCompare(String(bv),undefined,{numeric:true});return direction==='ascending'?result:-result;});
 rows.forEach((row,i)=>{row.classList.remove('table-row-enter');body.appendChild(row);row.style.animationDelay=Math.min(i*16,160)+'ms';void row.offsetWidth;row.classList.add('table-row-enter');});
 return;
 }
 const row=e.target.closest('.data-table tbody tr');if(row&&!e.target.closest('a,button,input,select')){row.classList.toggle('row-selected');row.setAttribute('aria-selected',String(row.classList.contains('row-selected')));}
});
document.addEventListener('keydown',e=>{const row=e.target.closest('.data-table tbody tr');if(row&&e.target===row&&(e.key==='Enter'||e.key===' ')){e.preventDefault();row.classList.toggle('row-selected');row.setAttribute('aria-selected',String(row.classList.contains('row-selected')));}});
const watched=document.querySelector('#figures');if(watched){new MutationObserver(()=>rebuild()).observe(watched,{childList:true});}
if(matchMedia('(max-width: 700px)').matches)collapse();
rebuild();
})();

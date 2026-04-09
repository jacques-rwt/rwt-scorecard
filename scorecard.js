const QUESTIONS=[{cat:0,q:"What is your annual EBITDA?",hint:"EBITDA scale opens doors. Push above $5M and you start attracting institutional buyers and a more competitive process. Fall below $3M and that buyer pool narrows significantly, requiring a targeted approach to marketing your business.",options:[{text:"Less than $1M",score:20},{text:"$1M to $3M",score:35},{text:"$3M to $5M",score:55},{text:"$5M to $10M",score:75},{text:"Over $10M",score:100}]},{cat:0,q:"How consistent was your EBITDA for the last 3 years?",hint:"When earnings swing year to year, buyers rebuild the numbers themselves and apply conservative adjustments. Consistency is one of the most important drivers of buyer confidence in the underlying business.",options:[{text:"Declining, or swings of more than 20% year on year",score:20},{text:"Broadly flat with some variability and no clear trend",score:40},{text:"Steady growth with limited volatility",score:70},{text:"Consistent growth with 3 or more years of clear track record",score:100}]},{cat:0,q:"What is the quality of your financial reporting?",hint:"The credibility of financial statements is directly tied to their verifiability. Where reporting standards fall short, buyers and lenders will typically offset their uncertainty by applying more conservative assumptions to the underlying results.",options:[{text:"Cash basis or limited reporting",score:20},{text:"Accrual basis but informal",score:40},{text:"CPA-prepared statements",score:60},{text:"Reviewed financials",score:75},{text:"Audited financials",score:100}]},{cat:0,q:"Are your profit margins and cash flow consistent, or do they vary significantly?",hint:"Predictable cash flow and margins give you a stronger hand at the negotiating table. Inconsistency is one of the most common triggers for buyers to push back on price once a deal is underway.",options:[{text:"Margins and working capital swing materially and are hard to predict",score:20},{text:"Generally predictable with some seasonal or one-off variation",score:60},{text:"Highly predictable. We know what drives it and can model it forward",score:100}]},{cat:1,q:"What does your organic growth look like for the next 12-24 months?",hint:"Businesses with a convincing growth story command higher prices. When buyers can't point to specific drivers, they'll typically treat current earnings as the peak, not the launchpad.",options:[{text:"Limited growth or declining",score:20},{text:"Stable with low growth",score:40},{text:"Moderate growth with supporting tailwinds",score:55},{text:"Strong identifiable growth drivers",score:75},{text:"Clear growth levers backed by a track record",score:100}]},{cat:1,q:"What does your forward-looking revenue look like?",hint:"Give buyers a clear view of what's coming and they'll price with confidence. A well-documented pipeline and contracted backlog removes the guesswork. Leave it informal or hard to quantify and buyers will fill in the blanks themselves... conservatively",options:[{text:"No formal pipeline. Revenue visibility beyond the current month is limited",score:20},{text:"Some pipeline exists but it is informal, undocumented or difficult to quantify",score:45},{text:"Documented pipeline with clear stages and a reasonable contracted or committed backlog",score:70},{text:"Strong, well-documented pipeline with significant contracted backlog and reliable conversion history",score:100}]},{cat:1,q:"What proportion of reported earnings reflects reinvestment versus owner lifestyle expenses?",hint:"Buyers pay for profit they can actually access. When a business has been structured around owner income, reported earnings can overstate what's genuinely available to a new owner once the numbers are properly normalised.",options:[{text:"Business is largely optimised around owner income with limited reinvestment",score:20},{text:"Some reinvestment happening but the business is not yet systematically building for growth",score:45},{text:"Mix of owner income and reinvestment with clear infrastructure being built",score:70},{text:"Reinvestment is systematic. People, systems and capacity are being actively built",score:100}]},{cat:2,q:"What percentage of total revenue comes from your single largest customer?",hint:"Diversified revenue is one of the cleanest signals of business resilience a buyer can see. Where concentration is high, buyers will price in the uncertainty and look to the deal structure to protect themselves.",options:[{text:"Over 40%",score:20},{text:"25% to 40%",score:40},{text:"10% to 25%",score:55},{text:"5% to 10%",score:75},{text:"Less than 5%",score:100}]},{cat:2,q:"What share of your revenue is contractually committed or backed by a visible backlog?",hint:"Visible, contractually backed revenue is one of the most direct routes to a higher price. It gives buyers the certainty they need to model with confidence and lenders the comfort to support the deal. A strong backlog carries similar weight, converting future work into something concrete buyers can underwrite.",options:[{text:"Mostly one-off or transactional",score:20},{text:"Mix of transactional and repeat customers",score:40},{text:"High repeat customer base with strong informal renewal rates",score:60},{text:"Meaningful proportion of contracted or committed revenue",score:75},{text:"Predominantly recurring or contracted revenue with strong durability",score:100}]},{cat:2,q:"How stable are your gross margins, and to what extent does your pricing reflect genuine market power rather than discounting?",hint:"Strong, consistent margins tell buyers the business has real pricing power, and that's something they'll pay for. Thin margins or regular discounting raises the question of whether price is the only lever, and buyers will reflect that fragility in how they model the business.",options:[{text:"Frequent discounting or margin pressure. Competing primarily on price",score:20},{text:"Stable margins but limited ability to raise prices without losing business",score:45},{text:"Strong margins with some demonstrated pricing flexibility",score:70},{text:"Clear pricing power. Customers pay for differentiation, not just price",score:100}]},{cat:3,q:"How dependent is the business on your day-to-day involvement to operate and generate revenue?",hint:"The less the business needs you, the more it's worth to a buyer. Deep owner dependency doesn't just affect value, it shapes how the deal is structured, with buyers seeking to defer or condition payment around the risk of you walking out the door.",options:[{text:"Owner drives most decisions and key relationships and would be very difficult to replace",score:20},{text:"Owner is heavily involved but some decisions and relationships have been delegated",score:45},{text:"Day-to-day operations run without the owner. Owner is focused on strategy",score:70},{text:"Business operates independently. Owner could step back without material disruption",score:100}]},{cat:3,q:"How capable and complete is the management team that would remain in place after the owner exits?",hint:"The right management team doesn't just support the deal, it strengthens it. When the team is thin, buyers have to plan for post-close hires, and that cost and uncertainty will be reflected in both their price and their appetite for the transaction.",options:[{text:"No clear second layer. Execution depends on the owner or one or two key individuals",score:20},{text:"Some informal leaders but roles and accountability are not clearly defined",score:45},{text:"Defined managers with clear accountability and reasonable depth",score:70},{text:"Proven leadership team with real depth. Could operate and grow without the founder",score:100}]},{cat:3,q:"What structural incentives are in place to retain key people through and after a transaction?",hint:"Key people have options when a deal is on the table, and buyers know this. Structural retention incentives give buyers confidence the team stays. Where loyalty to the current owner is doing that job, buyers will treat post-close continuity as an open question, and open questions affect price.",options:[{text:"Key staff turnover is a real risk with limited formal incentives in place",score:20},{text:"Competitive compensation and generally stable team with some informal retention arrangements",score:60},{text:"Strong retention infrastructure with formal incentives, low turnover and a committed team",score:100}]},{cat:4,q:"How well documented are your core processes, and how consistently does the business track performance through KPIs?",hint:"Clear, documented processes accelerate due diligence and give buyers the confidence to commit to a stronger price. Where knowledge lives in people's heads rather than on paper, buyers will take longer to get comfortable.",options:[{text:"Largely tribal knowledge. Minimal documentation and no consistent KPIs",score:20},{text:"Core processes documented and some KPIs in use but not yet systematic",score:60},{text:"Well-documented processes with KPIs that drive decisions. Operationally transparent",score:100}]},{cat:4,q:"How mature and scalable are the systems and tools currently running the business?",hint:"Modern, scalable systems are a signal that the business is ready for what comes next. Spreadsheets and manual processes tell buyers the opposite; that there's work to do after close, and they'll price that work into what they're willing to pay.",options:[{text:"Spreadsheets and manual processes. Limited formal systems in place",score:20},{text:"Core ERP, CRM or ops systems in place with reasonably consistent adoption",score:60},{text:"Integrated, well-adopted systems with reliable reporting and clean data",score:100}]},{cat:4,q:"Can the business absorb significant growth without material operational disruption or additional capital investment?",hint:"Buyers arrive with a growth plan, the question is whether your business can handle it. Operations that can absorb that growth without breaking down are worth more. Where they can't, the cost of getting there doesn't sit with the buyer, it comes off your price.",options:[{text:"Meaningful growth would strain current people, systems or infrastructure",score:20},{text:"Some near-term capacity exists but medium-term growth would require reinvestment",score:60},{text:"Built to scale. Infrastructure, people and systems can absorb growth without disruption",score:100}]},{cat:5,q:"What key person or supplier dependencies exist, and how are those risks currently managed?",hint:"Buyers will look for dependencies. The businesses that fare best are those that have already identified them and can speak to how they're managed. Where those dependencies remain unaddressed, buyers will use them as leverage to seek better terms or additional protections.",options:[{text:"Multiple single points of failure with no clear backup or mitigation plan",score:20},{text:"Some key dependencies exist and have been identified but not fully mitigated",score:45},{text:"Key risks have been identified and meaningfully mitigated with some redundancy in place",score:75},{text:"Strong redundancy across people and supply chain. No critical single points of failure",score:100}]},{cat:5,q:"Are there any outstanding legal, regulatory or compliance issues a buyer would need to know about?",hint:"Proactive disclosure of legal and compliance issues is almost always the better position. Buyers who uncover problems themselves have both the grounds and the motivation to push back hard; on price, on terms, or on whether to proceed at all.",options:[{text:"Known legal, compliance or structural issues that would likely surface in due diligence",score:20},{text:"Some areas need tidying up but nothing expected to be a serious problem",score:40},{text:"Generally clean with minor gaps that are understood and manageable",score:60},{text:"Diligence-ready. Corporate structure, compliance and legal records are clean and current",score:80},{text:"Highly organised with no known issues and minimal friction expected through a full due diligence process",score:100}]},{cat:5,q:"How secure is your revenue from existing customers?",hint:"Buyers will always ask what keeps customers once the current owner is gone. Formal contracts, embedded relationships and switching costs all provide compelling answers, and the more clearly those can be demonstrated, the more confidence buyers have in the revenue they're paying for.",options:[{text:"Mostly transactional with no formal agreements or long-term customer relationships",score:20},{text:"Some long-standing customers but relationships are informal and undocumented",score:45},{text:"Strong repeat customer base with a mix of formal contracts and reliable informal renewals",score:70},{text:"Revenue well secured through formal contracts, committed customers or high switching costs",score:100}]},{cat:5,q:"How complete and well-organised are your tax, HR, IP and corporate records ahead of due diligence?",hint:"Clean, well-organised records are one of the simplest ways to keep a deal on track. Gaps and disorganisation slow due diligence, introduce uncertainty and give buyers grounds to request protections at closing that might otherwise never have come up.",options:[{text:"Records are incomplete or disorganised across tax, HR or IP",score:20},{text:"Some areas need attention but no issues expected to be significant",score:45},{text:"Mostly well-organised with minor gaps that are known and manageable",score:70},{text:"Complete and well-organised across all areas. Ready to open a data room with confidence",score:100}]},];

const CATEGORIES=[{name:"Financial Quality & Scale",weight:0.25,cls:"c1",color:"#6366f1"},{name:"Growth Profile",weight:0.20,cls:"c2",color:"#0891b2"},{name:"Customer Concentration & Revenue Quality",weight:0.20,cls:"c3",color:"#d97706"},{name:"Management & Owner Dependence",weight:0.15,cls:"c4",color:"#7c3aed"},{name:"Operations & Scalability",weight:0.10,cls:"c5",color:"#059669"},{name:"Risk, Complexity & Cleanliness",weight:0.10,cls:"c6",color:"#6b7280"},];

const CAT_INTROS=["The quality of your financials sets the tone for the entire transaction. How they're prepared, how consistent they are, and how clearly they reflect true cash flow determines how confidently a buyer can anchor value and how much risk they perceive in doing so.","The multiple a buyer pays reflects their confidence in what the business can become, not just what it is today. Growth trajectory, reinvestment discipline and a repeatable sales engine are the signals that drive that confidence, and with it, a willingness to pay more.","Durable revenue commands a premium. Buyers assess that durability through three lenses: concentration, contractual structure and pricing power. The answers directly shape how much confidence they place in the revenue they're acquiring and what they're willing to pay for it.","The cleanest deals come from businesses where value is embedded in the business itself, not its owner. Owner dependence is one of the most common structuring challenges in private transactions, and the more pronounced it is, the more it shapes how a deal gets done rather than simply what it's worth.","Buyers are acquiring an operating business. The quality of that operation matters as much as the financial profile. Strong processes, capable systems and real capacity tell buyers the platform is ready. Where those foundations are weak, the friction and cost of fixing them post-close will be reflected in the deal.","These factors rarely determine whether a deal happens, but they significantly influence how it's structured. Diligence surprises and legal complexity give buyers negotiating leverage they wouldn't otherwise have.",];

const CAT_COMMENTARY=[["Buyers will anchor early valuation conversations here. Your financial scale and consistency open the door to a broad, competitive buyer universe.","Your financials present a mixed picture. Buyers will engage but will spend time normalising earnings and probing for consistency. Clean up reporting before a process.","Financial quality and scale will be the primary diligence focus. Buyers will rebuild the numbers themselves, which takes time and often leads to conservative adjustments."],["A credible growth story with identifiable drivers gives buyers confidence to stretch on valuation. Your growth profile is a genuine asset in a transaction.","Moderate growth is workable. Buyers will want to understand what drives it and whether it's durable. Be ready to support projections with pipeline data.","Flat or declining growth shifts the deal narrative to a cash flow story. Buyers will apply more conservative multiples and focus on what's sustaining current earnings."],["A diversified, visible revenue base is one of the cleanest signals a buyer can receive. This category will support your valuation and reduce structural complexity.","Some concentration or visibility gaps exist. Buyers will probe customer relationships and model attrition scenarios. Documentation of repeat rates and contract terms will help.","Revenue concentration or visibility issues are present. Buyers typically respond with earnout provisions, escrow holdbacks, or price adjustments. This will be a diligence focus."],["Low owner dependence and a strong team are meaningful deal assets. Buyers can underwrite the transition with confidence, which reduces the case for deferred consideration.","Some dependence on key individuals exists. Buyers will assess transition risk carefully. A clear handover plan and retention arrangements for key staff should be in place.","Owner or key person dependence is high. Expect this to drive deal structure significantly. Earnouts, long transition periods, or retention provisions are likely responses."],["Operational infrastructure is strong. Buyers can integrate and scale the business without a period of disruption, which supports both valuation and deal certainty.","Core operational foundations exist but have gaps. Buyers will assess what investment is needed post-close to support their growth plan, and may factor this into pricing.","Operational immaturity will require post-close investment. Buyers will discount the purchase price or extend the integration timeline to account for the work required."],["Legal and structural cleanliness reduces diligence friction and signals institutional quality. This category will not create obstacles in a transaction.","Some areas of complexity exist. Buyers will find the gaps. Known issues disclosed proactively are far less damaging than surprises discovered mid-diligence.","Legal, compliance, or structural issues are present. These are among the most reliable causes of deal delays and price re-trades. Address known issues before entering a process."],];

let current=0;
let answers=new Array(20).fill(null);
let userData={biz:'',name:'',email:'',phone:''};


function getBand(s){
  if(s>=75)return{label:"Strong value profile",text:"Your business presents well across the key factors buyers evaluate. You are likely to attract a competitive buyer universe, and your profile supports confident underwriting. The areas flagged below are worth addressing but are unlikely to be deal-breakers.",color:"#f0fdf4",border:"#bbf7d0",textColor:"#15803d",icon:"✦"};
  if(s>=55)return{label:"Solid foundation with focus areas",text:"Your business has genuine strengths that buyers will recognise, and specific areas where they will spend diligence time and potentially seek deal structure protection. The split below tells you exactly where their attention will land.",color:"#fffbeb",border:"#fde68a",textColor:"#b45309",icon:"◈"};
  return{label:"Early stage with clear opportunities",text:"Your profile reflects a business with real potential. Buyers will approach cautiously and seek structural protection in a transaction. Many of the improvements available are achievable before a process begins, and the return on that preparation is significant.",color:"#fef2f2",border:"#fecaca",textColor:"#b91c1c",icon:"◇"};
}

function getCatScore(catIdx){
  const qs=QUESTIONS.filter(q=>q.cat===catIdx);
  const ans=qs.map(q=>{const qIdx=QUESTIONS.indexOf(q);return answers[qIdx];}).filter(a=>a!==null);
  if(ans.length===0)return 0;
  return Math.round(ans.reduce((s,a)=>s+a,0)/ans.length);
}

function getOverallScore(){
  let weighted=0,totalW=0;
  CATEGORIES.forEach((cat,i)=>{const s=getCatScore(i);weighted+=s*cat.weight;totalW+=cat.weight;});
  return Math.round(weighted/totalW);
}

function submitToHubSpot(name,email,biz,phone){
  try{
    var nameParts=name.trim().split(' ');
    var firstName=document.getElementById('modal-firstname')?document.getElementById('modal-firstname').value.trim():nameParts[0]||'';
    var lastName=document.getElementById('modal-lastname')?document.getElementById('modal-lastname').value.trim():nameParts.slice(1).join(' ')||'';
    var fields=[{name:'firstname',value:firstName},{name:'lastname',value:lastName},{name:'email',value:email},{name:'company',value:biz}];
    if(phone)fields.push({name:'phone',value:phone});
    fetch('https://api.hsforms.com/submissions/v3/integration/submit/21247897/42be6bb3-4276-4cbe-9586-bac58ac14a4c',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({fields:fields,context:{pageUri:window.location.href,pageName:'RWT Capital M&A Scorecard'}})
    }).catch(function(e){console.warn('HubSpot submission failed:',e);});
  }catch(e){console.warn('HubSpot submission error:',e);}
}

// Sync landing page optional fields into results header live
function syncLandingToResults(){
  const name=document.getElementById('input-name').value.trim();
  const biz=document.getElementById('input-biz').value.trim();
  userData.name=name;
  userData.biz=biz||'Your Business';
  document.getElementById('res-name').textContent=userData.biz;
  document.getElementById('res-person').textContent=name;
}

// Sync modal fields into results header live (biz name updates in real time)
function syncModalToResults(){
  const name=document.getElementById('modal-firstname').value.trim();
  const biz=document.getElementById('modal-biz').value.trim();
  if(name)document.getElementById('res-person').textContent=name;
  if(biz)document.getElementById('res-name').textContent=biz;
  else if(userData.biz)document.getElementById('res-name').textContent=userData.biz;
}

function clearModalError(id){
  document.getElementById(id).classList.remove('input-error');
}

function startQuiz(){
  const name=document.getElementById('input-name').value.trim();
  const biz=document.getElementById('input-biz').value.trim();
  userData.name=name;
  userData.biz=biz||'Your Business';
  current=0;
  answers=new Array(20).fill(null);
  showView('quiz');
  renderQuestion();
}

function showView(id){
  document.querySelectorAll('.view').forEach(v=>v.classList.remove('active'));
  document.getElementById('view-'+id).classList.add('active');
}

function renderQuestion(){
  const q=QUESTIONS[current];
  const cat=CATEGORIES[q.cat];
  const pct=Math.round(((current+1)/20)*100);
  document.getElementById('progress-fill').style.width=pct+'%';
  document.getElementById('progress-label').textContent=`Question ${current+1} of 20`;
  document.getElementById('progress-cat').textContent=cat.name;
  document.getElementById('btn-back').style.visibility=current===0?'hidden':'visible';
  const btnNext=document.getElementById('btn-next');
  btnNext.textContent=current===19?'See my results →':'Continue →';
  btnNext.className='btn-next'+(answers[current]!==null?' enabled':'');
  const catQuestions=QUESTIONS.filter(qq=>qq.cat===q.cat);
  const catAnswered=catQuestions.filter(qq=>answers[QUESTIONS.indexOf(qq)]!==null).length;
  const catTotal=catQuestions.length;
  const catAvg=catAnswered>0?catQuestions.reduce((sum,qq)=>{const a=answers[QUESTIONS.indexOf(qq)];return sum+(a!==null?a:0);},0)/catAnswered:0;
  const catPct=Math.round((catAnswered/catTotal)*100);
  const barColor=catAvg>=70?'#16a34a':catAvg>=45?'#d97706':catAnswered===0?cat.color:'#dc2626';
  const catProgressHTML=`
    <div style="margin-bottom:20px;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
        <span style="font-size:12px;font-weight:500;color:${cat.color};letter-spacing:0.05em;text-transform:uppercase;">${catAnswered} of ${catTotal} answered</span>
        ${catAnswered>0?`<span style="font-size:12px;font-weight:600;color:${barColor};">${Math.round(catAvg)}/100</span>`:`<span style="font-size:12px;color:#9ca3af;">Not yet answered</span>`}
      </div>
      <div style="height:6px;background:#e5e7eb;border-radius:3px;overflow:hidden;">
        <div style="height:100%;width:${catPct}%;background:${barColor};border-radius:3px;transition:width 0.4s ease;"></div>
      </div>
    </div>`;
  const catIntroHTML=`
    <div style="border-left:4px solid ${cat.color};background:${cat.color}18;padding:18px 20px;margin-bottom:28px;">
      <div style="display:inline-block;padding:4px 14px;border-radius:20px;border:1.5px solid ${cat.color};font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:${cat.color};margin-bottom:12px;">${cat.name}</div>
      <p style="font-family:'Playfair Display',serif;font-size:15px;line-height:1.75;color:#374151;margin:0;font-weight:600;">${CAT_INTROS[q.cat]}</p>
    </div>`;
  const area=document.getElementById('question-area');
  area.innerHTML=`
    ${catIntroHTML}
    ${catProgressHTML}
    <h2 class="question-title">${q.q}</h2>
    <p class="question-hint">${q.hint}</p>
    <div class="options-grid">
      ${q.options.map(opt=>`<div class="option-card ${answers[current]===opt.score?'selected':''}" onclick="selectOption(${opt.score},this)"><div class="option-dot"></div><div class="option-text">${opt.text}</div></div>`).join('')}
    </div>`;
}

function selectOption(score,el){
  answers[current]=score;
  document.querySelectorAll('.option-card').forEach(c=>c.classList.remove('selected'));
  el.classList.add('selected');
  document.getElementById('btn-next').classList.add('enabled');
}

function nextQuestion(){
  if(answers[current]===null)return;
  if(current<19){current++;renderQuestion();}
  else{showResults();}
}

function prevQuestion(){
  if(current>0){current--;renderQuestion();}
}

function restart(){
  document.getElementById('input-name').value='';
  document.getElementById('input-biz').value='';
  userData={biz:'',name:'',email:'',phone:''};
  showView('landing');
}

function showResults(){
  showView('results');
  const overall=getOverallScore();
  const band=getBand(overall);

  // Populate header from whatever we know so far
  document.getElementById('res-name').textContent=userData.biz||'Your Business';
  document.getElementById('res-person').textContent=userData.name||'';
  document.getElementById('res-email').textContent='';
  document.getElementById('res-date').textContent='Completed '+new Date().toLocaleDateString('en-GB',{day:'numeric',month:'long',year:'numeric'});

  document.getElementById('res-score').textContent=overall;

  document.getElementById('band-card').innerHTML=`
    <div class="band-icon" style="background:${band.color};color:${band.textColor};font-size:22px;">${band.icon}</div>
    <div class="band-content">
      <div class="band-title" style="color:${band.textColor};">${band.label}</div>
      <div class="band-text" style="color:#374151;">${band.text}</div>
    </div>`;
  document.getElementById('band-card').style.cssText+=`background:${band.color};border-color:${band.border};`;

  const catScores=CATEGORIES.map((c,i)=>({...c,idx:i,score:getCatScore(i)}));
  const drivers=catScores.filter(c=>c.score>=65).sort((a,b)=>b.score-a.score);
  const focus=catScores.filter(c=>c.score<65).sort((a,b)=>a.score-b.score);

  document.getElementById('split-grid').innerHTML=`
    <div class="split-card" style="background:#f0fdf4;border-color:#bbf7d0;">
      <div class="split-card-head"><div class="split-dot" style="background:#16a34a;"></div><div class="split-card-title" style="color:#15803d;">Value drivers</div></div>
      ${drivers.length>0?drivers.map(c=>`<span class="split-tag" style="background:#dcfce7;color:#15803d;">${c.name}: ${c.score}</span>`).join(''):'<span style="font-size:13px;color:#6b7280;">Complete all questions to see your value drivers.</span>'}
    </div>
    <div class="split-card" style="background:#fffbeb;border-color:#fde68a;">
      <div class="split-card-head"><div class="split-dot" style="background:#d97706;"></div><div class="split-card-title" style="color:#b45309;">Buyer focus areas</div></div>
      ${focus.length>0?focus.map(c=>`<span class="split-tag" style="background:#fef9c3;color:#92400e;">${c.name}: ${c.score}</span>`).join(''):'<span style="font-size:13px;color:#6b7280;">No significant focus areas identified.</span>'}
    </div>`;

  const catList=document.getElementById('categories-list');
  catList.innerHTML=CATEGORIES.map((cat,i)=>{
    const score=getCatScore(i);
    const isGreen=score>=70,isAmber=score>=45;
    const comm=CAT_COMMENTARY[i][isGreen?0:isAmber?1:2];
    const badgeStyle=isGreen?'background:#dcfce7;color:#15803d;':isAmber?'background:#fef9c3;color:#92400e;':'background:#fee2e2;color:#b91c1c;';
    const catQuestions=QUESTIONS.map((q,qi)=>({...q,qi})).filter(q=>q.cat===i);
    const qaHTML=catQuestions.map(q=>{
      const qScore=answers[q.qi];
      const chosenOption=q.options.find(o=>o.score===qScore);
      const answerText=chosenOption?chosenOption.text:'';
      const dotColor=qScore>=70?'#16a34a':qScore>=45?'#d97706':'#dc2626';
      const pillStyle=qScore>=70?'color:#16a34a;background:#f0fdf4;':qScore>=45?'color:#d97706;background:#fffbeb;':'color:#dc2626;background:#fef2f2;';
      return`<div style="display:flex;gap:16px;align-items:flex-start;">
        <div style="flex-shrink:0;width:20px;height:20px;border-radius:50%;background:${dotColor};display:flex;align-items:center;justify-content:center;margin-top:1px;">
          <svg width="10" height="8" viewBox="0 0 10 8"><polyline points="1,4 4,7 9,1" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </div>
        <div style="flex:1;min-width:0;">
          <div style="font-size:13px;color:#6b7280;margin-bottom:2px;">${q.q}</div>
          <div style="font-size:14px;font-weight:500;color:#0f1219;">${answerText}</div>
        </div>
        <div style="flex-shrink:0;font-size:13px;font-weight:500;padding:3px 10px;border-radius:20px;${pillStyle}">${qScore}</div>
      </div>`;
    }).join('');
    return`<div class="category-row">
      <div class="cat-row-top">
        <span class="cat-name">${cat.name}</span>
        <span class="cat-badge" style="${badgeStyle}">${isGreen?'Value driver':isAmber?'Moderate':'Focus area'}: ${score}/100</span>
      </div>
      <div class="cat-bar-track"><div class="cat-bar-fill" style="width:${score}%;background:${cat.color};"></div></div>
      <div class="cat-commentary">${comm}</div>
      <div style="border-top:1px solid #e5e7eb;margin-top:20px;padding-top:20px;display:flex;flex-direction:column;gap:14px;">${qaHTML}</div>
    </div>`;
  }).join('');

  // Populate CTA preview cards
  const preview=document.getElementById('cta-preview-cards');
  if(preview){
    const scoreColor=overall>=70?'#16a34a':overall>=45?'#d97706':'#dc2626';
    preview.innerHTML=`
      <div style="background:var(--white);border:1px solid var(--border);border-radius:10px;padding:14px 16px;">
        <div style="font-size:11px;color:var(--muted);margin-bottom:4px;">Overall score</div>
        <div style="font-size:22px;font-weight:600;color:${scoreColor};">${overall}<span style="font-size:13px;color:var(--muted);font-weight:400;">/100</span></div>
      </div>
      <div style="background:var(--white);border:1px solid var(--border);border-radius:10px;padding:14px 16px;">
        <div style="font-size:11px;color:var(--muted);margin-bottom:8px;">6 categories</div>
        <div style="display:flex;flex-direction:column;gap:6px;">
          ${CATEGORIES.map(c=>{const s=getCatScore(CATEGORIES.indexOf(c));return`<div style="display:flex;align-items:center;gap:8px;"><div style="flex:1;height:4px;background:var(--border);border-radius:2px;overflow:hidden;"><div style="width:${s}%;height:100%;background:${c.color};border-radius:2px;"></div></div><span style="font-size:11px;color:var(--muted);min-width:24px;">${s}</span></div>`;}).join('')}
        </div>
      </div>
      <div style="background:var(--white);border:1px solid var(--border);border-radius:10px;padding:14px 16px;">
        <div style="font-size:11px;color:var(--muted);margin-bottom:4px;">Format</div>
        <div style="font-size:13px;font-weight:600;color:var(--ink);">PDF report</div>
        <div style="font-size:11px;color:var(--muted);">Formatted for print and sharing</div>
      </div>`;
  }

  setTimeout(()=>drawGauge(overall),80);
  setTimeout(()=>{
    const existing=Chart.getChart('radar-chart');
    if(existing)existing.destroy();
    const ctx=document.getElementById('radar-chart').getContext('2d');
    new Chart(ctx,{type:'bar',data:{labels:CATEGORIES.map(c=>{const words=c.name.split(' ');const lines=[];let cur='';words.forEach(w=>{if((cur+' '+w).trim().length>18&&cur.length>0){lines.push(cur.trim());cur=w;}else{cur=(cur+' '+w).trim();}});if(cur)lines.push(cur.trim());return lines;}),datasets:[{label:'Score',data:CATEGORIES.map((c,i)=>getCatScore(i)),backgroundColor:CATEGORIES.map(c=>c.color+'cc'),borderColor:CATEGORIES.map(c=>c.color),borderWidth:2,borderRadius:6}]},options:{responsive:true,maintainAspectRatio:true,clip:false,plugins:{legend:{display:false},tooltip:{callbacks:{label:ctx=>` Score: ${ctx.raw}/100`}}},scales:{y:{min:0,max:100,beginAtZero:true,ticks:{stepSize:25,font:{family:'DM Sans'}},grid:{color:'#f3f4f6'}},x:{ticks:{font:{family:'DM Sans',size:11},maxRotation:0,minRotation:0,autoSkip:false},grid:{display:false}}},layout:{padding:{bottom:10,left:0,right:16,top:0}}}});
  },100);
}

// ---- PDF Modal ----
function openPdfModal(){
  // Pre-fill modal from whatever we already have
  const modalFirstname=document.getElementById('modal-firstname');
  const modalBiz=document.getElementById('modal-biz');
  if(!modalFirstname.value && userData.name) modalFirstname.value=userData.name.split(' ')[0]||userData.name;
  if(!modalBiz.value && userData.biz && userData.biz!=='Your Business') modalBiz.value=userData.biz;
  document.getElementById('pdf-modal-overlay').classList.add('active');
  document.body.style.overflow='hidden';
}

function closePdfModal(){
  document.getElementById('pdf-modal-overlay').classList.remove('active');
  document.body.style.overflow='';
}

function submitModalAndGeneratePDF(){
  const name=document.getElementById('modal-firstname').value.trim();
  const biz=document.getElementById('modal-biz').value.trim();
  const email=document.getElementById('modal-email').value.trim();
  const phone=document.getElementById('modal-phone').value.trim();
  let hasError=false;
  if(!name){document.getElementById('modal-firstname').classList.add('input-error');hasError=true;}
  const emailValid=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if(!email||!emailValid){document.getElementById('modal-email').classList.add('input-error');hasError=true;}
  if(hasError)return;

  // Update userData with confirmed details
  userData.name=name;
  userData.biz=biz||userData.biz||'Your Business';
  userData.email=email;
  userData.phone=phone;

  // Update results header with final confirmed details
  document.getElementById('res-name').textContent=userData.biz;
  document.getElementById('res-person').textContent=userData.name;
  document.getElementById('res-email').textContent=userData.email;

  // Submit to HubSpot
  submitToHubSpot(name,email,userData.biz,phone);

  closePdfModal();

  // Small delay to let results header re-render before PDF capture
  setTimeout(()=>saveAsPDF(),150);
}

// Close modal on overlay click
document.getElementById('pdf-modal-overlay').addEventListener('click',function(e){
  if(e.target===this)closePdfModal();
});

function drawGauge(targetScore){
  const canvas=document.getElementById('gauge-canvas');
  if(!canvas)return;
  const ctx=canvas.getContext('2d');
  const W=canvas.width,H=canvas.height;
  const cx=W/2,cy=H-20;
  const outerR=163,innerR=94;
  const startAngle=Math.PI;
  const totalSegments=100;
  function segColor(pct){
    if(pct<0.33){const t=pct/0.33;const r=Math.round(220+(255-220)*(1-t));const g=Math.round(38+(160-38)*t);return`rgb(${r},${g},20)`;}
    else if(pct<0.66){const t=(pct-0.33)/0.33;return`rgb(255,${Math.round(160+(220-160)*t)},20)`;}
    else{const t=(pct-0.66)/0.34;const r=Math.round(255-(255-22)*t);const g=Math.round(220-(220-163)*(1-t));return`rgb(${r},${g},${Math.round(20+74*t)})`;}
  }
  const totalFrames=60;
  const filledSegments=Math.round((targetScore/100)*totalSegments);
  function drawFrame(frame){
    ctx.clearRect(0,0,W,H);
    const progress=Math.min(frame/totalFrames,1);
    const eased=1-Math.pow(1-progress,3);
    const currentFilled=Math.round(filledSegments*eased);
    const gap=0.008;
    for(let i=0;i<totalSegments;i++){
      const segStart=startAngle+(i/totalSegments)*Math.PI+gap;
      const segEnd=startAngle+((i+1)/totalSegments)*Math.PI-gap;
      const pct=i/totalSegments;
      ctx.beginPath();
      ctx.moveTo(cx+innerR*Math.cos(segStart),cy+innerR*Math.sin(segStart));
      ctx.arc(cx,cy,outerR,segStart,segEnd);
      ctx.arc(cx,cy,innerR,segEnd,segStart,true);
      ctx.closePath();
      ctx.fillStyle=i<currentFilled?segColor(pct):'rgba(255,255,255,0.12)';
      ctx.fill();
    }
    const needleAngle=startAngle+(currentFilled/totalSegments)*Math.PI;
    const needleLen=outerR-6;
    const nx=cx+needleLen*Math.cos(needleAngle);
    const ny=cy+needleLen*Math.sin(needleAngle);
    ctx.beginPath();ctx.moveTo(cx,cy);ctx.lineTo(nx,ny);
    ctx.strokeStyle='#A6A6A6';ctx.lineWidth=3;ctx.lineCap='round';ctx.stroke();
    ctx.beginPath();ctx.arc(cx,cy,8,0,Math.PI*2);
    ctx.fillStyle='#A6A6A6';ctx.globalAlpha=0.7;ctx.fill();ctx.globalAlpha=1;
    ctx.fillStyle='rgba(255,255,255,0.5)';ctx.font='10px DM Sans, sans-serif';
    ctx.textAlign='center';ctx.textBaseline='middle';
    [0,25,50,75,100].forEach(val=>{
      const a=startAngle+(val/100)*Math.PI;
      const dist=outerR+14;
      let lx=cx+dist*Math.cos(a);
      let ly=cy+dist*Math.sin(a);
      if(val===0)lx=Math.max(lx,12);
      if(val===100)lx=Math.min(lx,W-12);
      ctx.fillText(val,lx,ly);
    });
    if(frame<totalFrames){requestAnimationFrame(()=>drawFrame(frame+1));}
    else{
      const midY=cy-innerR*0.55;
      ctx.font="700 54px 'Playfair Display', serif";
      ctx.fillStyle='#ff5500';ctx.textAlign='center';ctx.textBaseline='middle';
      ctx.fillText(targetScore,cx,midY);
    }
  }
  drawFrame(0);
}

function saveAsPDF(){
  var btn=document.getElementById('pdf-btn');
  var restartBtn=document.querySelector('.btn-restart');
  var originalText=btn.textContent;
  btn.textContent='Generating PDF...';btn.disabled=true;
  if(restartBtn)restartBtn.style.display='none';
  var pdf=new window.jspdf.jsPDF({orientation:'portrait',unit:'mm',format:'a4'});
  var W=210,H=297;var margin=14;var usable=W-margin*2;var y=0;
  function newPage(){pdf.addPage();y=margin;}
  function checkSpace(needed){if(y+needed>H-12)newPage();}
  function hexToRgb(hex){hex=hex.replace('#','');if(hex.length===3)hex=hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];return[parseInt(hex.slice(0,2),16),parseInt(hex.slice(2,4),16),parseInt(hex.slice(4,6),16)];}
  function lighten(rgb,amt){amt=amt===undefined?0.8:amt;return[Math.round(rgb[0]+(255-rgb[0])*amt),Math.round(rgb[1]+(255-rgb[1])*amt),Math.round(rgb[2]+(255-rgb[2])*amt)];}
  function setFont(size,style,color){pdf.setFontSize(size);pdf.setFont('helvetica',style||'normal');if(color)pdf.setTextColor(color[0],color[1],color[2]);else pdf.setTextColor(15,18,25);}
  function fillRect(x,ry,w,h,rgb,strokeRgb){pdf.setFillColor(rgb[0],rgb[1],rgb[2]);if(strokeRgb){pdf.setDrawColor(strokeRgb[0],strokeRgb[1],strokeRgb[2]);pdf.roundedRect(x,ry,w,h,1.5,1.5,'FD');}else pdf.roundedRect(x,ry,w,h,1.5,1.5,'F');}
  function drawLine(x1,y1,x2,y2,rgb){pdf.setDrawColor(rgb[0],rgb[1],rgb[2]);pdf.setLineWidth(0.2);pdf.line(x1,y1,x2,y2);}
  function pngToJpeg(src,w,h,bgColor,quality){var c=document.createElement('canvas');c.width=w;c.height=h;var ctx=c.getContext('2d');ctx.fillStyle=bgColor;ctx.fillRect(0,0,w,h);var img=new Image();img.src=src;ctx.drawImage(img,0,0,w,h);return c.toDataURL('image/jpeg',quality||0.85);}
  // SVG logos are now inline - render them via canvas using svgToJpeg helper
  function svgElToJpeg(el,w,h,bgColor,quality){
    if(!el)return null;
    try{
      var svgEl=el.querySelector('svg');if(!svgEl)return null;
      var xml=new XMLSerializer().serializeToString(svgEl);
      var svg64=btoa(unescape(encodeURIComponent(xml)));
      var img=new Image();img.src='data:image/svg+xml;base64,'+svg64;
      var c=document.createElement('canvas');c.width=w;c.height=h;
      var ctx=c.getContext('2d');ctx.fillStyle=bgColor;ctx.fillRect(0,0,w,h);
      ctx.drawImage(img,0,0,w,h);
      return c.toDataURL('image/jpeg',quality||0.85);
    }catch(e){return null;}
  }
  var whiteLogoEl=document.querySelector('.results-header [aria-label="RWT Capital"]');
  var footerLogoEl=document.querySelector('#view-results [style*="border-top"] [aria-label="RWT Capital"]');
  var whiteLogo=svgElToJpeg(whiteLogoEl,420,240,'#1e2c4d',0.85);
  var footerLogo=svgElToJpeg(footerLogoEl,320,180,'#ffffff',0.85);
  var gaugeCanvas=document.getElementById('gauge-canvas');
  var gaugeImg=gaugeCanvas?gaugeCanvas.toDataURL('image/png'):null;
  var gaugeAspect=gaugeCanvas?gaugeCanvas.width/gaugeCanvas.height:2.5;
  var headerH=95;
  fillRect(0,0,W,headerH,[30,44,77]);
  if(whiteLogo){try{pdf.addImage(whiteLogo,'JPEG',margin,6,42,24);}catch(e){}}
  pdf.link(margin,6,42,24,{url:'https://www.rwtcapital.com/'});
  setFont(6.5,'normal',[255,255,255]);pdf.setGState(new pdf.GState({opacity:0.45}));
  pdf.text('RWT CAPITAL M\u0026A SCORECARD',W-margin,10,{align:'right'});
  pdf.setGState(new pdf.GState({opacity:1}));
  setFont(6.5,'normal',[255,255,255]);pdf.setGState(new pdf.GState({opacity:0.45}));
  pdf.text('PREPARED FOR',W/2,28,{align:'center'});
  pdf.setGState(new pdf.GState({opacity:1}));
  setFont(22,'bold',[255,255,255]);pdf.text(userData.biz||'Your Business',W/2,36,{align:'center'});
  setFont(9,'normal',[255,255,255]);pdf.setGState(new pdf.GState({opacity:0.65}));
  pdf.text(userData.name||'',W/2,43,{align:'center'});
  pdf.setGState(new pdf.GState({opacity:1}));
  setFont(7,'normal',[255,255,255]);pdf.setGState(new pdf.GState({opacity:0.45}));
  var dateStr='Completed '+new Date().toLocaleDateString('en-GB',{day:'numeric',month:'long',year:'numeric'});
  pdf.text(dateStr,W/2,49,{align:'center'});
  pdf.setGState(new pdf.GState({opacity:1}));
  if(gaugeImg){var gaugeW=64;var gaugeH=gaugeW/gaugeAspect;var gx=W/2-gaugeW/2;var gy=53;pdf.addImage(gaugeImg,'PNG',gx,gy,gaugeW,gaugeH);}
  else{var overall=getOverallScore();setFont(30,'bold',[255,85,0]);pdf.text(String(overall),W/2,82,{align:'center'});}
  y=headerH+4;
  var overall2=getOverallScore();var band=getBand(overall2);
  var bandBg=hexToRgb(band.color);var bandBorder=hexToRgb(band.border);var bandText=hexToRgb(band.textColor);
  var bandLines=pdf.splitTextToSize(band.text,usable-18);
  var bandH=7+5+bandLines.length*4+6;
  checkSpace(bandH);fillRect(margin,y,usable,bandH,bandBg,bandBorder);
  setFont(9.5,'bold',bandText);pdf.text(band.label,margin+7,y+7);
  setFont(7.5,'normal',[55,65,81]);pdf.text(bandLines,margin+7,y+13);
  y+=bandH+6;
  checkSpace(14);setFont(14,'bold',[15,18,25]);pdf.text('Where buyers will focus',margin,y+7);
  setFont(7.5,'normal',[107,114,128]);pdf.text('Based on your responses, here is how a typical buyer would read your business.',margin,y+12);
  y+=17;
  var catScores=CATEGORIES.map(function(c,i){return{name:c.name,score:getCatScore(i),color:c.color};});
  var drivers=catScores.filter(function(c){return c.score>=65;}).sort(function(a,b){return b.score-a.score;});
  var focus=catScores.filter(function(c){return c.score<65;}).sort(function(a,b){return a.score-b.score;});
  var maxRows=Math.max(drivers.length,focus.length);
  var splitH=14+maxRows*8+6;checkSpace(splitH);
  var colW=(usable-4)/2;
  fillRect(margin,y,colW,splitH,[240,253,244],[187,247,208]);
  pdf.setFillColor(22,163,74);pdf.circle(margin+6,y+6.5,2,'F');
  setFont(7,'bold',[21,128,61]);pdf.text('VALUE DRIVERS',margin+10,y+8);
  drivers.forEach(function(d,i){var rgb=hexToRgb(d.color);var bg=lighten(rgb,0.78);fillRect(margin+4,y+12+i*8,colW-8,6.5,bg);setFont(7,'normal',rgb);pdf.text(d.name+': '+d.score,margin+7,y+16.5+i*8);});
  var fx=margin+colW+4;
  fillRect(fx,y,colW,splitH,[255,251,235],[253,230,138]);
  pdf.setFillColor(217,119,6);pdf.circle(fx+6,y+6.5,2,'F');
  setFont(7,'bold',[180,83,9]);pdf.text('BUYER FOCUS AREAS',fx+10,y+8);
  focus.forEach(function(d,i){var rgb=hexToRgb(d.color);var bg=lighten(rgb,0.78);fillRect(fx+4,y+12+i*8,colW-8,6.5,bg);setFont(7,'normal',rgb);pdf.text(d.name+': '+d.score,fx+7,y+16.5+i*8);});
  y+=splitH+8;newPage();y=margin;
  setFont(14,'bold',[15,18,25]);pdf.text('Category breakdown',margin,y+7);
  setFont(7.5,'normal',[107,114,128]);pdf.text('Score by category, weighted to reflect how buyers typically prioritise each area',margin,y+12);
  y+=18;
  var chartH=60;var barW=usable/CATEGORIES.length;
  [0,25,50,75,100].forEach(function(val){var lineY=y+chartH-(val/100)*chartH;setFont(6,'normal',[156,163,175]);pdf.text(String(val),margin-2,lineY+1,{align:'right'});pdf.setDrawColor(229,231,235);pdf.setLineWidth(0.2);pdf.line(margin,lineY,margin+usable,lineY);});
  CATEGORIES.forEach(function(cat,i){var score=getCatScore(i);var rgb=hexToRgb(cat.color);var bx=margin+i*barW+barW*0.15;var bW=barW*0.7;var bH=(score/100)*chartH;var bY=y+chartH-bH;pdf.setFillColor(rgb[0],rgb[1],rgb[2]);pdf.roundedRect(bx,bY,bW,bH,1,1,'F');setFont(5.5,'normal',[107,114,128]);var label=pdf.splitTextToSize(cat.name,barW-2);pdf.text(label,bx+bW/2,y+chartH+5,{align:'center'});});
  y+=chartH+18;
  setFont(14,'bold',[15,18,25]);pdf.text('Your results by category',margin,y+7);y+=12;
  CATEGORIES.forEach(function(cat,ci){
    var score=getCatScore(ci);var isGreen=score>=70,isAmber=score>=45;
    var badgeText=(isGreen?'Value driver':isAmber?'Moderate':'Focus area')+' \u2013 '+score+'/100';
    var badgeRgb=isGreen?[21,128,61]:isAmber?[180,83,9]:[185,28,28];
    var badgeBgRgb=isGreen?[240,253,244]:isAmber?[255,251,235]:[254,242,242];
    var comm=CAT_COMMENTARY[ci][isGreen?0:isAmber?1:2];
    var catRgb=hexToRgb(cat.color);
    var catQs=QUESTIONS.map(function(q,qi){return{q:q,qi:qi};}).filter(function(x){return x.q.cat===ci;});
    var commLines=pdf.splitTextToSize(comm,usable-14);var commH=commLines.length*4;
    var qaBlocks=catQs.map(function(item){var qScore=answers[item.qi];var opt=item.q.options.find(function(o){return o.score===qScore;});var ansText=opt?opt.text:'-';var ansLines=pdf.splitTextToSize(ansText,usable-32);return{item:item,ansText:ansText,ansLines:ansLines,qScore:qScore,h:4+ansLines.length*4.2+5};});
    var qaH=qaBlocks.reduce(function(s,b){return s+b.h;},0);
    var rowH=9+3+2.5+4+commH+5+1+5+qaH+6;checkSpace(rowH);
    fillRect(margin,y,usable,rowH,[255,255,255],[229,231,235]);fillRect(margin,y,3,rowH,catRgb);
    setFont(9,'bold',[42,47,61]);pdf.text(cat.name,margin+7,y+7);
    setFont(7,'bold',badgeRgb);var badgeW=pdf.getTextWidth(badgeText)+8;fillRect(W-margin-badgeW-2,y+2.5,badgeW+2,6.5,badgeBgRgb);pdf.text(badgeText,W-margin-badgeW+2,y+7.5);
    var barY=y+10.5;fillRect(margin+6,barY,usable-12,2,[229,231,235]);if(score>0)fillRect(margin+6,barY,(score/100)*(usable-12),2,catRgb);
    var commY=barY+5;setFont(7,'normal',[107,114,128]);pdf.text(commLines,margin+7,commY);
    var divY=commY+commH+3;drawLine(margin+6,divY,W-margin-6,divY,[229,231,235]);
    var qaY=divY+5;
    qaBlocks.forEach(function(block){var dotRgb=block.qScore>=70?[22,163,74]:block.qScore>=45?[217,119,6]:[220,38,38];pdf.setFillColor(dotRgb[0],dotRgb[1],dotRgb[2]);pdf.circle(margin+10,qaY-1,1.8,'F');setFont(6.5,'normal',[107,114,128]);pdf.text(block.item.q.q,margin+14,qaY-1.5);setFont(7,'bold',[15,18,25]);pdf.text(block.ansLines,margin+14,qaY+3);setFont(7,'bold',dotRgb);pdf.text(String(block.qScore),W-margin-4,qaY+1.5,{align:'right'});qaY+=block.h;});
    y+=rowH+4;
  });
  checkSpace(55);drawLine(margin,y+2,W-margin,y+2,[229,231,235]);y+=8;
  setFont(7,'bold',[42,47,61]);pdf.text('SCORECARD DISCLAIMER',margin,y);y+=5;
  setFont(6.5,'normal',[107,114,128]);
  var disclaimers=['The M\u0026A Value Scorecard has been prepared by RWT Capital Corp. and is provided for informational purposes only.','The results generated from this scorecard are based solely on the responses you have provided and are intended to offer general insights into how a potential buyer may view your business. These results do not constitute a formal valuation, financial opinion, or investment advice, and should not be relied upon as the sole basis for any business or transaction-related decision.','This scorecard does not constitute an offer or solicitation to buy or sell any securities or businesses, nor does it create any advisory, fiduciary, or client relationship with RWT Capital Corporation.','While reasonable efforts have been made to ensure the accuracy and relevance of the information provided, no representation or warranty, express or implied, is made as to its completeness or accuracy. RWT Capital assumes no obligation to update or revise the results or underlying information.',"By using this scorecard, you acknowledge that any decisions made based on the results are your sole responsibility. If you'd like to explore your results further or discuss your business in more detail, our team would be happy to connect."];
  disclaimers.forEach(function(p){checkSpace(14);var lines=pdf.splitTextToSize(p,usable);pdf.text(lines,margin,y);y+=lines.length*3.6+3;});
  checkSpace(22);y+=4;drawLine(margin,y,W-margin,y,[229,231,235]);y+=6;
  if(footerLogo){try{pdf.addImage(footerLogo,'JPEG',margin,y,26,15);pdf.link(margin,y,26,15,{url:'https://www.rwtcapital.com/'});}catch(e){}}
  setFont(7.5,'bold',[42,47,61]);pdf.text('Confidential. Prepared for the exclusive use of the recipient',W-margin,y+9,{align:'right'});
  y+=20;checkSpace(30);
  fillRect(margin,y,usable,30,[30,44,77]);
  setFont(12,'bold',[255,255,255]);pdf.text('Want to talk through what this means?',margin+8,y+10);
  setFont(7.5,'normal',[255,255,255]);pdf.setGState(new pdf.GState({opacity:0.75}));
  var ctaLines=pdf.splitTextToSize("This scorecard reflects the lens we apply at the start of every mandate. If you'd like to discuss your specific situation, we're happy to have that conversation.",usable*0.62);
  pdf.text(ctaLines,margin+8,y+17);pdf.setGState(new pdf.GState({opacity:1}));
  var btnX=W-margin-42;var btnY=y+9;var btnW=40;var btnH=12;
  fillRect(btnX,btnY,btnW,btnH,[255,255,255]);
  setFont(8,'bold',[30,44,77]);pdf.text('Get in touch',btnX+btnW/2,btnY+(btnH/2)+(pdf.getFontSize()*0.3528/2),{align:'center'});
  pdf.link(btnX,btnY,btnW,btnH,{url:'https://www.rwtcapital.com/#contact'});
  var bizName=(userData&&userData.biz&&userData.biz!=='Your Business')?userData.biz:'Scorecard';
  var rawPdf=pdf.output('arraybuffer');
  if(window.PDFLib){
    window.PDFLib.PDFDocument.load(rawPdf,{ignoreEncryption:true}).then(function(pdfDoc){return pdfDoc.save({useObjectStreams:true});}).then(function(compressedPdf){
      var blob=new Blob([compressedPdf],{type:'application/pdf'});
      var url=URL.createObjectURL(blob);var a=document.createElement('a');a.href=url;
      a.download='RWT Capital MA Scorecard - '+bizName+'.pdf';
      document.body.appendChild(a);a.click();document.body.removeChild(a);
      setTimeout(function(){URL.revokeObjectURL(url);},1000);
      btn.textContent=originalText;btn.disabled=false;if(restartBtn)restartBtn.style.display='';
    }).catch(function(e){
      console.error('Compression failed:',e);pdf.save('RWT Capital MA Scorecard - '+bizName+'.pdf');
      btn.textContent=originalText;btn.disabled=false;if(restartBtn)restartBtn.style.display='';
    });
  }else{
    pdf.save('RWT Capital MA Scorecard - '+bizName+'.pdf');
    btn.textContent=originalText;btn.disabled=false;if(restartBtn)restartBtn.style.display='';
  }
}
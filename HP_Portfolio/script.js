const $=s=>document.querySelector(s),$$=s=>document.querySelectorAll(s);
const skills={java:{title:'JAVA CORE',text:'My primary programming focus for backend logic and software development fundamentals.',items:['Core Java','OOP','Exception Handling','Multithreading']},web:{title:'WEB TECHNOLOGIES',text:'I build practical front ends using structured HTML and responsive CSS.',items:['HTML5','CSS','Responsive UI','Web structure']},js:{title:'JAVASCRIPT',text:'Basic JavaScript used to make interfaces interactive and dynamic.',items:['DOM','Events','Dynamic UI','Client-side logic']},sql:{title:'MYSQL / SQL',text:'Database skills used for application data management.',items:['MySQL','SQL Queries','Data management','Backend integration']},oop:{title:'OOP',text:'A core Java strength for reusable and maintainable code.',items:['Classes & Objects','Inheritance','Polymorphism','Encapsulation']},tools:{title:'DEVELOPER TOOLS',text:'Tools used while developing and testing projects.',items:['Eclipse IDE','VS Code','XAMPP','MySQL Workbench']}};
function showSkill(k){let d=skills[k];$('#skillPanel').innerHTML=`<h3>${d.title}</h3><p>${d.text}</p><ul>${d.items.map(x=>`<li>${x}</li>`).join('')}</ul>`;$$('.skill').forEach(b=>b.classList.toggle('active',b.dataset.skill===k))}$$('.skill').forEach(b=>b.onclick=()=>showSkill(b.dataset.skill));showSkill('java');
let p=0,boot=setInterval(()=>{p+=4;$('#bootProgress').style.width=p+'%';if(p>=100){clearInterval(boot);$('#bootText').textContent='SYSTEM READY.';$('#enterBtn').classList.remove('hidden')}},60);$('#enterBtn').onclick=()=>{$('#bootScreen').style.opacity=0;$('#bootScreen').style.transition='.5s';setTimeout(()=>$('#bootScreen').remove(),500)};
$('#menuBtn').onclick=()=>$('#nav').classList.toggle('open');$$('nav a').forEach(a=>a.onclick=()=>$('#nav').classList.remove('open'));
const obs=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add('visible')),{threshold:.12});$$('.reveal').forEach(x=>obs.observe(x));
let cart=0;$$('[data-add]').forEach(b=>b.onclick=()=>{cart++;$('#cartCount').textContent='CART: '+cart;b.textContent='✓';setTimeout(()=>b.textContent='+',600)});
const modal=$('#modal'),mc=$('#modalContent');$$('.demo-btn').forEach(b=>b.onclick=()=>{if(b.dataset.demo==='voting'){mc.innerHTML=`<p class="eyebrow">LIVE SIMULATION / VOTING SYSTEM</p><h2>Election Control</h2><p>Interactive front-end simulation of the project workflow.</p><div class="sim"><button data-action="register">Register Voter</button><button data-action="candidate">Register Candidate</button><button data-action="start">Start Election</button><button data-action="vote">Cast Vote</button><button data-action="stop">Stop Election</button><div id="simResult" class="sim-result">STATUS: WAITING FOR ACTION</div></div>`;$$('.sim button').forEach(x=>x.onclick=()=>$('#simResult').textContent={register:'VOTER REGISTRATION: RECORD CREATED',candidate:'CANDIDATE NOMINATION: SUBMITTED',start:'ELECTION STATUS: ACTIVE',vote:'VOTE: ACCEPTED → DATABASE',stop:'ELECTION STATUS: STOPPED'}[x.dataset.action])}else{mc.innerHTML=`<p class="eyebrow">LIVE SIMULATION / FOOD ORDERING</p><h2>Order Flow</h2><p>Menu → cart → order workflow.</p><div class="sim"><button data-food="Pizza">Add Pizza</button><button data-food="Burger">Add Burger</button><button data-food="Pasta">Add Pasta</button><button id="checkout">Place Order</button><div id="simResult" class="sim-result">CART: EMPTY</div></div>`;let items=[];$$('[data-food]').forEach(x=>x.onclick=()=>{items.push(x.dataset.food);$('#simResult').textContent='CART: '+items.join(', ')});$('#checkout').onclick=()=>$('#simResult').textContent=items.length?`ORDER PLACED: ${items.length} ITEM(S) → RESTAURANT`:'ADD AN ITEM FIRST'}modal.classList.remove('hidden')});$('#closeModal').onclick=()=>modal.classList.add('hidden');modal.onclick=e=>e.target===modal&&(modal.classList.add('hidden'));
$('#resumeBtn').onclick=()=>{mc.innerHTML=`<p class="eyebrow">RESUME VIEWER</p><h2>Harshvardhan Patil</h2><p>Open the included resume PDF.</p><div class="sim"><a class="neon-btn" href="resume.pdf" target="_blank">OPEN PDF ↗</a></div>`;modal.classList.remove('hidden')};
const cmds={help:'Commands: about, skills, projects, education, contact, clear',about:'MCA student • Java-focused developer • practical builder',skills:'Java | OOP | SQL/MySQL | HTML | CSS | JavaScript | Eclipse | VS Code | XAMPP',projects:'01 Online Voting System | 02 Online Food Restaurant Ordering System',education:'MCA — K.K. Wagh Institute • BCA — S.G.M. College, Karad',contact:'Email: harshpatilhp2004@gmail.com | Mobile: +91 7498145900 | GitHub: github.com/PatilHarsh2004 | LinkedIn: /harsh-r-patil-a76345329'};$('#terminalInput').onkeydown=e=>{if(e.key!=='Enter')return;let q=e.target.value.trim().toLowerCase(),out=$('#terminalOutput');if(q==='clear'){out.innerHTML='';e.target.value='';return}out.innerHTML+=`<p><span style="color:var(--accent)">harsh@portfolio:~$</span> ${q}</p><p>${cmds[q]||`Command not found: ${q}. Type <em>help</em>.`}</p>`;e.target.value=''};



/* Dark / light mode */
const themeBtn = document.getElementById('themeBtn');
const savedTheme = localStorage.getItem('harsh-theme');
if (savedTheme === 'light') document.body.classList.add('light');
function updateThemeButton(){
  if(!themeBtn) return;
  themeBtn.setAttribute('aria-label', document.body.classList.contains('light') ? 'Switch to dark mode' : 'Switch to light mode');
  themeBtn.title = document.body.classList.contains('light') ? 'Switch to dark mode' : 'Switch to light mode';
}
updateThemeButton();
if(themeBtn){
  themeBtn.addEventListener('click',()=>{
    document.body.classList.toggle('light');
    localStorage.setItem('harsh-theme',document.body.classList.contains('light')?'light':'dark');
    updateThemeButton();
  });
}

/* Keep the Home underline/navigation state in sync while scrolling. */
const sections=[...document.querySelectorAll('main section[id]')];
const navLinks=[...document.querySelectorAll('#nav a')];
const navObserver=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      navLinks.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+entry.target.id));
    }
  });
},{rootMargin:'-35% 0px -55% 0px',threshold:0});
sections.forEach(section=>navObserver.observe(section));

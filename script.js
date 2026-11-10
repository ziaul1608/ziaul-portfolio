document.documentElement.classList.add('js');
(function(){
var $=function(i){return document.getElementById(i)};
var n=0,lc=$('lc'),t=setInterval(function(){n=Math.min(100,n+4);lc.textContent=String(n).padStart(3,'0');if(n>=100)clearInterval(t)},50);
function clk(){try{$('ck').textContent=new Date().toLocaleTimeString('en-IN',{timeZone:'Asia/Kolkata',hour:'numeric',minute:'2-digit',hour12:true}).toLowerCase()}catch(e){}}clk();setInterval(clk,30000);
var m=$('menu');$('mo').onclick=function(){m.classList.add('o')};$('mc').onclick=function(){m.classList.remove('o')};
m.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){m.classList.remove('o')})});
var r=document.documentElement;$('tt').onclick=function(){r.setAttribute('data-theme',r.getAttribute('data-theme')==='light'?'dark':'light')};
document.querySelectorAll('.door').forEach(function(d){d.onclick=function(){d.classList.toggle('o')}});
var c=$('cd');c.parentNode.addEventListener('mousemove',function(e){var b=c.getBoundingClientRect(),x=(e.clientX-b.left)/b.width-.5,y=(e.clientY-b.top)/b.height-.5;c.style.transform='rotateY('+x*14+'deg) rotateX('+(-y*14)+'deg)'});
c.parentNode.addEventListener('mouseleave',function(){c.style.transform=''});
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});
document.querySelectorAll('.rv').forEach(function(e){io.observe(e)});
var b=$('cpb'),E='ziaulmustafa2005@gmail.com';
function ok(){b.textContent='Copied ✓';setTimeout(function(){b.textContent='Copy email'},2000)}
function fb(){try{var x=document.createElement('textarea');x.value=E;x.style.cssText='position:fixed;opacity:0';document.body.appendChild(x);x.select();document.execCommand('copy');document.body.removeChild(x);ok()}catch(e){b.textContent=E}}
b.onclick=function(){try{navigator.clipboard.writeText(E).then(ok,fb)}catch(e){fb()}};
})();

(() => {
const room=document.querySelector('.room'),avatar=room.querySelector('.avatar'),cat=room.querySelector('[data-open="cat"]');
cat.innerHTML='<img src="assets/cottage-kitten.png" alt="在小屋里散步的奶油色小猫"><span>小屋守护员</span>';
cat.setAttribute('aria-label','点击认识散步的小屋守护猫');
let catX=50,catY=32;
function wander(){if(document.hidden)return;const nextX=39+Math.random()*24,nextY=25+Math.random()*17;cat.classList.toggle('facing-left',nextX<catX);cat.classList.add('cat-walking');catX=nextX;catY=nextY;cat.style.left=catX+'%';cat.style.bottom=catY+'%';setTimeout(()=>{cat.classList.remove('cat-walking');updatePrompt()},6200)}
setInterval(wander,8500);setTimeout(wander,2500);
const prompt=document.createElement('div');prompt.className='near-prompt';prompt.setAttribute('aria-live','polite');room.appendChild(prompt);
const names={memory:'回忆相框',gift:'神秘礼物',cake:'生日蛋糕',letter:'一封信',stars:'星光灯',cat:'小屋守护员',plant:'绿植',music:'留声机'};
function updatePrompt(){const roomRect=room.getBoundingClientRect(),ar=avatar.getBoundingClientRect(),ax=ar.left+ar.width/2,ay=ar.top+ar.height*.68;let nearest=null,best=Infinity;for(const el of room.querySelectorAll('.object')){el.classList.remove('nearby');const rect=el.getBoundingClientRect(),cx=rect.left+rect.width/2,cy=rect.top+rect.height/2,d=Math.hypot((ax-cx)*.78,ay-cy);if(d<best){best=d;nearest={el,cx,cy}}}if(!nearest||best>Math.max(95,roomRect.width*.18)||document.getElementById('overlay').classList.contains('show')){prompt.classList.remove('show');return}nearest.el.classList.add('nearby');prompt.textContent='✨ 点击探索'+names[nearest.el.dataset.open];prompt.style.left=((nearest.cx-roomRect.left)/roomRect.width*100)+'%';prompt.style.top=((nearest.cy-roomRect.top)/roomRect.height*100)+'%';prompt.classList.add('show')}
room.addEventListener('click',()=>setTimeout(updatePrompt,250));avatar.addEventListener('transitionend',updatePrompt);window.addEventListener('resize',updatePrompt);document.getElementById('close').addEventListener('click',()=>setTimeout(updatePrompt,200));setTimeout(updatePrompt,500);
})();

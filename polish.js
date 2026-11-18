(() => {
content.letter.body='<p>信封里藏着一段只写给你的话。</p><button class="envelope-stage" id="openLetter" aria-label="拆开信封">💌</button><div class="letter-paper" id="letterPaper">亲爱的晓盼：<br>26 岁生日快乐。谢谢你来到我的生活里，让平凡的日子有了更多期待。愿新的一岁，你能勇敢地奔向喜欢的事，也能安心地停下来休息。愿你被这个世界温柔以待；如果偶尔不顺利，记得还有我陪在你身边。<br>未来的故事，我们继续一起写。<br>生日快乐，我的女孩。♡</div>';
const overlay=document.getElementById('overlay');
overlay.addEventListener('click',e=>{if(e.target.id==='openLetter'){e.target.classList.add('opening');setTimeout(()=>{e.target.style.display='none';document.getElementById('letterPaper')?.classList.add('show')},750)}if(e.target.id==='blowReal'){setTimeout(()=>stars(26),550)}if(e.target.id==='saveWish')stars(16)});
function stars(count){const card=overlay.querySelector('.card');for(let i=0;i<count;i++){const star=document.createElement('span');star.className='wish-star';star.textContent=i%3?'✦':'♡';star.style.setProperty('--sx',(Math.random()*440-220)+'px');star.style.setProperty('--sy',(Math.random()*-350-10)+'px');star.style.animationDelay=(Math.random()*.35)+'s';card.appendChild(star);setTimeout(()=>star.remove(),2300)}}
})();

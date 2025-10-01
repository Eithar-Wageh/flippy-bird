const hole = document.getElementById('hole');
const obstacle  = document.getElementById('obstacle');
const bird = document.getElementById('bird');
const gameOverBox = document.getElementById('game-over');
const finalScore = document.getElementById('final-score');
const closeBtn = document.getElementById('close-btn');

let score = 0;

hole.addEventListener('animationiteration',() =>{
    let rand = Math.random()*(500-150);
    hole.style.top=rand + 'px';

    score++;
})


 const gameLoop = setInterval(function () {
    let birdup = parseInt(getComputedStyle(bird).getPropertyValue('top'));
if(!isJumping){
    bird.style.top = birdup + 3 +'px';

}
    let obstacleleft = parseInt(getComputedStyle(obstacle).getPropertyValue('left'));
    let holetop = parseInt(getComputedStyle(hole).getPropertyValue('top'));


if (birdup > 480 ||
     (obstacleleft<20 && (birdup<holetop || birdup>holetop+150 ||birdup <holetop))) {
 
    clearInterval(gameLoop);                        // نوقف اللعبة
        finalScore.innerText = `Your score: ${score}`;  // نعرض السكور
        gameOverBox.style.display = 'flex'; 

        bird.style.top = 100 + 'px';
        obstacle.style.left = "100%";
        hole.style.top = '100%';
        score = 0;
}

},10)
closeBtn.addEventListener('click', () => {
    gameOverBox.style.display = 'none';  // نخفي النافذة
    location.reload();                   // نعيد تحميل اللعبة من البداية
});

let isJumping = false;
document.addEventListener('click',()=>{
isJumping = true;
let jumpTimer =0;

let jumpInterval = setInterval(function(){
    jumpTimer++;
    let birdup = parseInt(getComputedStyle(bird).getPropertyValue('top'));
    if (birdup >0 && jumpTimer<15) {
            bird.style.top = birdup -5 +'px';

    }
    if (jumpTimer >20) {
        clearInterval(jumpInterval);
        isJumping=false;
        jumpTimer = 0;
    }
},10);
})



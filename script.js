score = 0;
cross = true;

audio = new Audio('./music/music.mp3');
audiogo = new Audio('./music/gameover.mp3');
setTimeout(() => {
    audio.play()
},1000);
document.onkeydown = function (e) {
    console.log("Key code is: ", e.keyCode)
    if (e.keyCode == 38) {
        tom = document.querySelector('.tom');
        tom.classList.add('animatetom');
        setTimeout(() => {
            tom.classList.remove('animatetom')
        }, 700);
    }
    // if (e.keyCode == 39) {
    //     tom = document.querySelector('.tom');
    //     tomX = parseInt(window.getComputedStyle(tom, null).getPropertyValue('left'));
    //     tom.style.left = tomX + 150 + "px";
    // }
    // if (e.keyCode == 37) {
    //     tom = document.querySelector('.tom');
    //     tomX = parseInt(window.getComputedStyle(tom, null).getPropertyValue('left'));
    //     tom.style.left = (tomX - 150) + "px";
    // }
}

setInterval(() => {
    tom = document.querySelector('.tom');
    gameOver = document.querySelector('.gameOver');
    jerry = document.querySelector('.jerry');

    dx = parseInt(window.getComputedStyle(tom, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(tom, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(jerry, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(jerry, null).getPropertyValue('top'));

    offsetX = Math.abs(dx - ox);
    offsetY = Math.abs(dy - oy);
    // console.log(offsetX, offsetY)
    if (offsetX < 73 && offsetY < 52) {
        gameOver.innerHTML = "Game Over - Reload to Play Again"
        jerry.classList.remove('jerryAni')
        audiogo.play();
        setTimeout(() => {
            audiogo.pause();
            audio.pause();
        }, 1000);
    }
    else if (offsetX < 145 && cross) {
        score += 1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(jerry, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.005;
            jerry.style.animationDuration = newDur + 's';
            console.log('New animation duration: ', newDur)
        }, 500);

    }

}, 10);

function updateScore(score) {
    scoreCont.innerHTML = "Your Score: " + score
}
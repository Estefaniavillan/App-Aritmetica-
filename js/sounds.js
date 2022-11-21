function play() {
    var audio = document.getElementById("audio");
    audio.play();
}

function stop() {
    var audio = document.getElementById("audio");
    audio.pause();
}

function winner() {
    var audio = document.getElementById("winner");
    audio.play();

}

function gameOver() {
    var gameOver = document.getElementById("game-over");
    gameOver.play();
}

function cleanFields() {
    document.getElementById("value1").value = ''
    document.getElementById("value2").value = ''
    document.getElementById("result").value = ''
}

function cleanAnswer() {
    document.getElementById("result").value = ''
}

function chequearRespuesta() {
    lives--;
    var message = "";
    let result = x / y
    if (lives >= 0) {
        if (result === +document.getElementById('result').value) {
            message = "Felicitaciones, la respuesta es correcta!";
            lives = 3;
            genQuestion()
        }
        else {
            message = "La respuesta no es correcta, intentos restantes " + lives;
        }
    } else {
        message = "¡Fallaste!,  la respuesta correcta es: " + result;

        lives = 3;
        genQuestion()
    }
    contLives();
    alert(message);
    cleanAnswer();
}
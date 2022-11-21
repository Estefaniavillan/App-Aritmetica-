function cleanFields() {
    document.getElementById("value1").value = ''
    document.getElementById("value2").value = ''
    document.getElementById("result").value = ''
}

function cleanAnswer() {
    document.getElementById("result").value = ''
}

function checkResponse() {
    var message = ""
    let result = getOperation()
    let resultUser = document.getElementById("result").value;
    if (result == resultUser) {
        message = "¡Bien hecho!";
        lives = 3;
    } else {
        lives--;
        message = "La respuesta es incorrecta, inténtalo de nuevo"
        cleanAnswer()
        contLives()
    }
    if (lives == 0){
        message = "GAME OVER\n La respuesta correcta es: " + result;
    }

    document.getElementById("msj").innerText = message;










/*
    lives--;
    var message = "";
    if (lives >= 0) {
        if (result === +document.getElementById('result').value) {
            message = "Felicitaciones, la respuesta es correcta!";
            lives = 3;
            generateValues()
        }
        else {
            message = "La respuesta no es correcta, intentos restantes " + lives;
        }
    } else {
        message = "¡Fallaste!,  la respuesta correcta es: " + result;

        lives = 3;
        generateValues(true)
    }
    contLives();
    alert(message);
    cleanAnswer();*/
}
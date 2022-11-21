var isVisibleHelpImage=false;

function cleanAnswer() {
    document.getElementById("result").value = ''
}

function getUserResult() {
    let result = document.getElementById("result").value;
    if (result === '') {
        return 0.0
    } else {
        return parseFloat(result)
    }
}

function showMessage(message) {
    let elementMessage = document.getElementById("msj");
    elementMessage.hidden = false
    elementMessage.innerText = message
}

function checkResponse() {
    var message = ""
    let result = getOperation()
    let resultUser = getUserResult()
    if (result === resultUser) {
        message = "¡Bien hecho!";
        lives = 3;
        hiddenNumericKeyboard()
    } else {
        lives--;
        message = "La respuesta es incorrecta, inténtalo de nuevo"
        cleanAnswer()
        contLives()
        showDecimalExplanation()
    }
    if (lives === 0) {
        message = "GAME OVER\n La respuesta correcta es: " + result;
        hiddenNumericKeyboard()
    }
    showMessage(message)
}

function showDecimalExplanation() {
    isVisibleHelpImage = !isVisibleHelpImage
    let decimalImage = document.getElementById('decimal-explanation')
    let help = document.getElementById('help')
    if (decimalImage != null) {
        if (isVisibleHelpImage) {
            decimalImage.style.display = 'block'
            help.style.display = 'block'
            help.innerText = 'Ocultar ayuda'
        } else {
            decimalImage.style.display = 'none'
            help.innerText = 'Mostrar ayuda'
        }
    }
}
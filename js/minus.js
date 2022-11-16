var x, y;
var intentos = 3;

function cleanFields() {
    document.getElementById("value1").value = ''
    document.getElementById("value2").value = ''
    document.getElementById("product").value = ''
}

function cleanAnswer() {
    document.getElementById("product").value = ''
}



function generateNumbers() {
    function getRandom() {
        return Math.floor((Math.random() * 11));
    }
    x = getRandom();
    y = getRandom();
}

function genPregunta() {
    generateNumbers();
    document.getElementById('value1').innerText = x;
    document.getElementById('value2').innerText = y;
}

function contadorVidas() {
    //document.getElementById('vidas').value = intentos;
}


function chequearRespuesta() {
    intentos--;
    var message = "";
    let result = x - y
    if (intentos > 0) {
        if (result === +document.getElementById('product').value) {
            message = "Felicitaciones, la respuesta es correcta!";
            intentos = 3;
            genPregunta()
        }
        else {
            message = "La respuesta no es correcta, intentos restantes" + intentos;
        }
    } else {
        message = "¡Fallaste!,  la respuesta correcta es: " + result;

        intentos = 3;
        genPregunta()
    }
    contadorVidas();
    alert(message);
    cleanAnswer();
}
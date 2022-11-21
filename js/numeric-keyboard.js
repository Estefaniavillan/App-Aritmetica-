function putValue(id) {
    document.getElementById("result").value += document.getElementById(id).value
}

function deleteValue() {
    document.getElementById("result").value = ""
}

function validateOperation() {
    checkResponse()
}

function hiddenNumericKeyboard() {
    document.getElementById('numeric-keyboard').style.display = 'none'
    document.getElementById('refresh').style.display = 'block'
}

function restartOperation(){
    window.location.reload()
}
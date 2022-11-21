function putValue(id) {
    document.getElementById("result").value += document.getElementById(id).value
}

function deleteValue() {
    document.getElementById("result").value = ""
}

function validateOperation() {
    checkResponse()
}
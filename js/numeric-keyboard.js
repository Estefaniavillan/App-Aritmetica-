/*function putValue(value) {
    document.getElementById("product").value=value
} 

function buttonZero() {
    putValue(0)
}*/

function putValue(id) {
    document.getElementById("result").value += document.getElementById(id).value
}

function deleteValue() {
    document.getElementById("result").value = ""
}

function validateOperation() {
    chequearRespuesta()

}
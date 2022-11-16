var x, y;

function generateNumbers() {
    function getRandom() {
        return Math.floor((Math.random() * 11));
    }
    x = getRandom();
    y = getRandom();
}

function genQuestion() {
    generateNumbers();
    document.getElementById('value1').innerText = x;
    document.getElementById('value2').innerText = y;
}


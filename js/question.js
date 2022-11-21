var x, y;
let limitTopDefault = 10;

function getRandom(limit) {
    return Math.floor((Math.random() * limit)) + 1;
}

function generateNumbers() {
    x = getRandom(limitTopDefault);
    y = getRandom(limitTopDefault);
}

function generateNumbersByCondition() {
    x = getRandom(limitTopDefault)
    y = getRandom(x)
}

function generateValues(isMinusOrDivision) {
    if (isMinusOrDivision) {
        generateNumbersByCondition()
    }
    else {
        generateNumbers()
    }
    document.getElementById('value1').innerText = x;
    document.getElementById('value2').innerText = y;
}


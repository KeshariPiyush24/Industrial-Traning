var screen = document.getElementById("screen");
var curr = 0;
var temp = 0;
var operation = 0;

function enterNum(N) {
    curr = curr * 10 + N;
    screen.innerHTML = curr;
}

function zero(N) {
    curr = curr * 10;
    screen.innerHTML = curr;
}

function doubleZero(N) {
    curr = curr * 100;
    screen.innerHTML = curr;
}

function dot() {
    curr = curr + 0.0;
}

function ac() {
    curr = 0;
    screen.innerHTML = curr;
}

function backspace() {
    curr = Math.floor(curr / 10);
    screen.innerHTML = curr;
}

function add() {
    temp = curr;
    curr = 0;
    operation = 1;
    screen.innerHTML = curr;
}

function sub() {
    temp = curr;
    curr = 0;
    operation = 2;
    screen.innerHTML = curr;
}

function mul() {
    temp = curr;
    curr = 0;
    operation = 3;
    screen.innerHTML = curr;
}

function div() {
    temp = curr;
    curr = 0;
    operation = 4;
    screen.innerHTML = curr;
}

function equals() {
    if (operation === 1) {
        curr = curr + temp;
        temp = 0;
        screen.innerHTML = curr;
        operation = 0;
    } else if (operation === 2) {
        curr = temp - curr;
        temp = 0;
        screen.innerHTML = curr;
        operation = 0;
    } else if (operation === 3) {
        curr = temp * curr;
        temp = 0;
        screen.innerHTML = curr;
        operation = 0;
    } else if (operation === 4) {
        curr = temp / curr;
        temp = 0;
        screen.innerHTML = curr;
        operation = 0;
    }
}
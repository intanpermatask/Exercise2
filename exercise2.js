var screen = document.getElementById("screen");

function display(pressedkey) {
    screen.value += pressedkey;
}

function erase(pressedkey)
{
    screen.value = pressedkey;
}

function result() {
    erase(eval(screen.value));
}

function clear() {
    screen.innerHTML = "";
   }
let canvas;
let world;
let keyboard = new Keyboard();
let button;


function init() {
    canvas = document.getElementById("canvas");
    world = new World(canvas, keyboard);



    console.log("My charachter is", world.charachter);



}

window.addEventListener("keydown", (key) => {
    if (key.keyCode === 39) {
        keyboard.RIGHT = true;
    }

    if (key.keyCode === 37) {
        keyboard.LEFT = true;
    }

    if (key.keyCode === 38) {
        keyboard.UP = true;
    }

    if (key.keyCode === 40) {
        keyboard.DOWN = true;
    }

    if (key.keyCode === 32) {
        keyboard.SPACE = true;
    }

    if (key.keyCode === 68) {
        keyboard.D = true;

    }
});

window.addEventListener("keyup", (key) => {

    if (key.keyCode === 39) {
        keyboard.RIGHT = false;
    }

    if (key.keyCode === 37) {
        keyboard.LEFT = false;
    }

    if (key.keyCode === 38) {
        keyboard.UP = false;
    }

    if (key.keyCode === 40) {
        keyboard.DOWN = false;
    }

    if (key.keyCode === 32) {
        keyboard.SPACE = false;
    }

    if (key.keyCode === 68) {
        keyboard.D = false;
    }


});


const sound = document.getElementById('hoverSound');
const headings = document.querySelectorAll('h2, h3');

headings.forEach(el => {
    el.addEventListener('mouseenter', () => {
        // Set to start if still playing
        sound.currentTime = 0;
        sound.play();
    });
});


function startGame() {
    init();
    loadCanvas();
}

function loadCanvas() {
    document.getElementById("canvas").classList.remove("d-none");
    document.getElementById("menu_section").classList.add("d-none");
}

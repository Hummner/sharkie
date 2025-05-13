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
})

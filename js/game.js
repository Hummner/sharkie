let canvas;
let world;
let keyboard = new Keyboard();
let button;
 

function init() {
    canvas = document.getElementById("canvas");
    world = new World(canvas);
    


    console.log("My charachter is", world.charachter);
    
    

}

window.addEventListener("keydown", (key) => {
    button = key.key
    console.log(button);
    
})

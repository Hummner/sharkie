class Keyboard {
    LEFT = false;
    RIGHT = false;
    UP = false;
    DOWN = false;
    SPACE = false;

    constructor () {
        if (this.button === "ArrowRight") {
            this.RIGHT = true
        } else {
            this.RIGHT = false
        }

        console.log(this.RIGHT);
        
    }

}
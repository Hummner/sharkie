class Light extends MovableObject {
    x = 2000;
    y = -200;
    width = 2000;
    height = 1000;

    constructor() {
        super().loadImage("./img/3. Background/Layers/1. Light/COMPLETO.png");
        this.animate()


    }

    animate() {
       this.moveLeft()
    }

   
}
class Light extends MovableObject {
    x = 680;
    y = -50;
    width = 780;
    height = 400;

    constructor() {
        super().loadImage("./img/3. Background/Layers/1. Light/COMPLETO.png");
        this.animate()


    }

    animate() {
       this.moveLeft()
    }

   
}
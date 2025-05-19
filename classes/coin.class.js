class Coin extends MovableObject {
    width = 50;
    height = 50;
    y = 300;
     offset = {
        top: 10,
        bottom: 10,
        left: 10,
        right: 10
    }

    images = [
        "./img/4. Marcadores/1. Coins/1.png",
        "./img/4. Marcadores/1. Coins/2.png",
        "./img/4. Marcadores/1. Coins/3.png",
        "./img/4. Marcadores/1. Coins/4.png"
    ]


    constructor() {
        super().loadImage("./img/4. Marcadores/1. Coins/1.png");
        this.loadImages(this.images);
        this.animate();
        this.x = 200 + Math.random() * 3000;
    }


    animate() {
        setInterval(() => {
            this.playAnimation(this.images);
        }, 200);
        
    }
}
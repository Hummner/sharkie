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


    constructor(minX, maxX) {
        super().loadImage("./img/4. Marcadores/1. Coins/1.png");
        this.loadImages(this.images);
        this.animate();
        this.x = minX + Math.random() * maxX;
    }


    animate() {
        setInterval(() => {
            this.playAnimation(this.images);
        }, 200);
        
    }
}
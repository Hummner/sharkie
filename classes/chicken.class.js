class Chicken extends MovableObject {

    height = 120;
    width = 120;
    WALKING_IMAGES = [
        "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png",
        "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim2.png",
        "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim3.png",
        "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim4.png",
        "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim5.png"
    ];
    

    constructor() {
        super().loadImage("/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png");

        this.x = 200 + Math.random() * 500;
        this.loadImages(this.WALKING_IMAGES)
        this.speed = 0.3 + Math.random() * 0.5;
        this.animate();
        


    }

    animate() {
         this.moveLeft()
        setInterval(() => {
            let i = this.currentImage % this.WALKING_IMAGES.length
            let path = this.WALKING_IMAGES[i]
            this.img = this.imageCache[path]
            this.currentImage++
        }, 150)

    }

}
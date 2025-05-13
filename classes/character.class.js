class Character extends MovableObject {
    height = 200;
    width = 200;
    y = 200;
    WALKING_IMAGES = [
        "img/1.Sharkie/3.Swim/1.png",
        "img/1.Sharkie/3.Swim/2.png",
        "img/1.Sharkie/3.Swim/3.png",
        "img/1.Sharkie/3.Swim/4.png",
        "img/1.Sharkie/3.Swim/5.png",
        "img/1.Sharkie/3.Swim/6.png"

    ]

    constructor() {
        super().loadImage("img/1.Sharkie/3.Swim/1.png");
        this.loadImages(this.WALKING_IMAGES);
        this.animate()

    }

    animate() {
        setInterval(() => {
            let i = this.currentImage % this.WALKING_IMAGES.length
            let path = this.WALKING_IMAGES[i]
            this.img = this.imageCache[path]
            this.currentImage++
        }, 150)

    }


    jump() {

    }
}   
class Character extends MovableObject {
    height = 200;
    width = 200;
    y = 200;
    speed = 5
    WALKING_IMAGES = [
        "img/1.Sharkie/3.Swim/1.png",
        "img/1.Sharkie/3.Swim/2.png",
        "img/1.Sharkie/3.Swim/3.png",
        "img/1.Sharkie/3.Swim/4.png",
        "img/1.Sharkie/3.Swim/5.png",
        "img/1.Sharkie/3.Swim/6.png"

    ];
    world;

    constructor() {
        super().loadImage("img/1.Sharkie/3.Swim/1.png");
        this.loadImages(this.WALKING_IMAGES);
        this.animate()

    }

    animate() {


        //Right
        setInterval(() => {
            if (this.world.keyboard.RIGHT) {
                this.x += this.speed;
                this.otherDirection = false
                
            }

            if (this.world.keyboard.LEFT) {
                this.x -= this.speed;
                this.otherDirection = true
            }

            this.world.camera_x = -this.x
        }, 1000/ 60)


        setInterval(() => {
            if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                
                let i = this.currentImage % this.WALKING_IMAGES.length
                let path = this.WALKING_IMAGES[i]
                this.img = this.imageCache[path]
                this.currentImage++
            }
        }, 100)
    }


    jump() {

    }
}   
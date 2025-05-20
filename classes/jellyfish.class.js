class JellyFish extends MovableObject {
    width = 100;
    height = 100;
    y = 0;
    thunderstrike = true

    WALKING_IMAGES = [
        "img/2.Enemy/2 Jelly fish/Súper dangerous/Green 1.png",
        "img/2.Enemy/2 Jelly fish/Súper dangerous/Green 2.png",
        "img/2.Enemy/2 Jelly fish/Súper dangerous/Green 3.png",
        "img/2.Enemy/2 Jelly fish/Súper dangerous/Green 4.png"

    ]


    constructor(speedY, x) {
        super().loadImage("img/2.Enemy/2 Jelly fish/Súper dangerous/Green 1.png");
        this.loadImages(this.WALKING_IMAGES);
      
        this.animate();
        this.yDirection = 1
        this.speedY = speedY;
        this.x = x;

    }


    animate() {

        setInterval(() => {
            this.playAnimation(this.WALKING_IMAGES);
        }, 200);

        setInterval(() => {
            this.moveUpAndDown(this.speedY)
        }, 100);

    }

 moveUpAndDown(speedY) {
    this.y += speedY * this.yDirection;

    if (this.y >= 380 || this.y <= 0) {
        this.yDirection *= -1;
    }
}


}
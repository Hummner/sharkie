class Endboss extends MovableObject {

    y = -200;
    width = 500;
    height = 600;
    offset = {
        top: 300,
        bottom: 140,
        left: 50,
        right: 100
    }

    WALKING_IMAGES = [
        "img/2.Enemy/3 Final Enemy/2.floating/1.png",
        "img/2.Enemy/3 Final Enemy/2.floating/2.png",
        "img/2.Enemy/3 Final Enemy/2.floating/3.png",
        "img/2.Enemy/3 Final Enemy/2.floating/4.png",
        "img/2.Enemy/3 Final Enemy/2.floating/5.png",
        "img/2.Enemy/3 Final Enemy/2.floating/6.png",
        "img/2.Enemy/3 Final Enemy/2.floating/7.png",
        "img/2.Enemy/3 Final Enemy/2.floating/8.png",
        "img/2.Enemy/3 Final Enemy/2.floating/9.png",
        "img/2.Enemy/3 Final Enemy/2.floating/10.png",
        "img/2.Enemy/3 Final Enemy/2.floating/11.png",
        "img/2.Enemy/3 Final Enemy/2.floating/12.png",
        "img/2.Enemy/3 Final Enemy/2.floating/13.png"

    ];


    constructor() {

        super().loadImage(this.WALKING_IMAGES[0]);
        this.loadImages(this.WALKING_IMAGES);
        this.animate();
        this.x = 3500;


    }


    animate() {
        setInterval(() => {
            this.playAnimation(this.WALKING_IMAGES)
        }, 150)
    }

}
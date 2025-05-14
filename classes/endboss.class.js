class Endboss extends MovableObject {

    y = 0;
    width = 300;
    height = 400;
    offset = {
        top: 180,
        bottom: 250,
        left: 0,
        right: 10
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
        this.x = 700;


    }


    animate() {
        setInterval(() => {
            this.playAnimation(this.WALKING_IMAGES)
        }, 150)
    }

}
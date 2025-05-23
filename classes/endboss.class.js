class Endboss extends MovableObject {

    y = 0
    width = 500;
    height = 600;
    hp = 300;
    speed = 5;
    speedY = 0;
    currentImageOnlyOneAnimation;
    offset = {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    }

    WALKING_IMAGES = [
        "./img/2.Enemy/3 Final Enemy/2.floating/1.png",
        "./img/2.Enemy/3 Final Enemy/2.floating/2.png",
        "./img/2.Enemy/3 Final Enemy/2.floating/3.png",
        "./img/2.Enemy/3 Final Enemy/2.floating/4.png",
        "./img/2.Enemy/3 Final Enemy/2.floating/5.png",
        "./img/2.Enemy/3 Final Enemy/2.floating/6.png",
        "./img/2.Enemy/3 Final Enemy/2.floating/7.png",
        "./img/2.Enemy/3 Final Enemy/2.floating/8.png",
        "./img/2.Enemy/3 Final Enemy/2.floating/9.png",
        "./img/2.Enemy/3 Final Enemy/2.floating/10.png",
        "./img/2.Enemy/3 Final Enemy/2.floating/11.png",
        "./img/2.Enemy/3 Final Enemy/2.floating/12.png",
        "./img/2.Enemy/3 Final Enemy/2.floating/13.png",
        "./img/2.Enemy/3 Final Enemy/Attack/1.png",
        "./img/2.Enemy/3 Final Enemy/Attack/2.png",
        "./img/2.Enemy/3 Final Enemy/Attack/3.png",
        "./img/2.Enemy/3 Final Enemy/Attack/4.png",
        "./img/2.Enemy/3 Final Enemy/Attack/5.png",
        "./img/2.Enemy/3 Final Enemy/Attack/6.png"

    ];

    INTRO_IMAGES = [
        "./img/2.Enemy/3 Final Enemy/1.Introduce/1.png",
        "./img/2.Enemy/3 Final Enemy/1.Introduce/2.png",
        "./img/2.Enemy/3 Final Enemy/1.Introduce/3.png",
        "./img/2.Enemy/3 Final Enemy/1.Introduce/4.png",
        "./img/2.Enemy/3 Final Enemy/1.Introduce/5.png",
        "./img/2.Enemy/3 Final Enemy/1.Introduce/6.png",
        "./img/2.Enemy/3 Final Enemy/1.Introduce/7.png",
        "./img/2.Enemy/3 Final Enemy/1.Introduce/8.png",
        "./img/2.Enemy/3 Final Enemy/1.Introduce/9.png",
        "./img/2.Enemy/3 Final Enemy/1.Introduce/10.png"
    ]

    HURT_IMAGES = [
        "./img/2.Enemy/3 Final Enemy/Hurt/1.png",
        "./img/2.Enemy/3 Final Enemy/Hurt/2.png",
        "./img/2.Enemy/3 Final Enemy/Hurt/3.png",
        "./img/2.Enemy/3 Final Enemy/Hurt/4.png"
    ]

    DEAD_IMAGES = [
        "./img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2.png",
        "./img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 6.png",
        "./img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 7.png",
        "./img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 8.png",
        "./img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 9.png",
        "./img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 10.png"
    ]




    constructor() {

        super().loadImage(this.INTRO_IMAGES[0]);
        this.loadImages(this.INTRO_IMAGES)
        this.loadImages(this.WALKING_IMAGES);
        this.loadImages(this.HURT_IMAGES);
        this.loadImages(this.DEAD_IMAGES);
        this.x = 5500;
    }


    animate() {
        let introCounter = 0;
        this.y = -200;
        this.speed = 0;
        setInterval(() => {
            if (introCounter < 10) {
                this.playAnimation(this.INTRO_IMAGES);
                introCounter++;


            } else if (this.isDead()) {
                this.playOnlyOneAnimation(this.DEAD_IMAGES, this.currentImageOnlyOneAnimation == this.DEAD_IMAGES.length);
                
                this.y -= 15;
            } else if (this.isHurt()) {
                this.playOnlyOneAnimation(this.HURT_IMAGES, this.currentImageOnlyOneAnimation > this.HURT_IMAGES.length);
            } else {
                this.playAnimation(this.WALKING_IMAGES);
                this.speed += 2;
                this.moveLeft();

            }
        }, 150);
    }
}
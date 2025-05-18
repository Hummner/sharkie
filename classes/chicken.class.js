class Chicken extends MovableObject {

    height = 70;
    width = 110;
    hp = 100;
    timeCounter;

    offset = {
        top: 10,
        bottom: 20,
        left: 10,
        right: 20
    }
    WALKING_IMAGES = [
        "./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png",
        "./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim2.png",
        "./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim3.png",
        "./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim4.png",
        "./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim5.png"
    ];

    DEAD_IMAGES = [
        "./img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/1.Dead 1 (can animate by going up).png",
        "./img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/1.Dead 2 (can animate by going down to the floor after the Fin Slap attack).png",
        "./img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/1.Dead 3 (can animate by going down to the floor after the Fin Slap attack).png"
    ]




    constructor() {
        super().loadImage("./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png");
        this.loadImages(this.DEAD_IMAGES);

        this.x = 500 + Math.random() * 500;
        this.y = 100 + Math.random() * 300;
        this.loadImages(this.WALKING_IMAGES)
        this.speed = 0.3 + Math.random() * 0.5;
        this.animate();



    }

    animate() {
        let walkingAnimationInterval;
        let walkingInterval;
        let timesRun = 0;
        this.currentImageOnlyOneAnimation = 0;


        walkingInterval = setInterval(() => {
            this.moveLeft()
            if(this.isDead()) {
                this.y -= 5;
                this.moveLeft();
            }
        }, 1000 / 60);


        walkingAnimationInterval = setInterval(() => {
            if (this.isDead()) {
                this.playOnlyOneAnimation(this.DEAD_IMAGES)
                if (timesRun == 2) {clearInterval(walkingAnimationInterval)}
                timesRun++
            } else {
                this.playAnimation(this.WALKING_IMAGES)
            }
        }, 100);
    }
}
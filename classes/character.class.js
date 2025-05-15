class Character extends MovableObject {
    height = 250;
    width = 200;
    y = 0;
    speed = 10;
    hp = 100;
    longIdle;

    DEAD_IMAGES = [
        "img/1.Sharkie/6.dead/1.Poisoned/1.png",
        "img/1.Sharkie/6.dead/1.Poisoned/2.png",
        "img/1.Sharkie/6.dead/1.Poisoned/3.png",
        "img/1.Sharkie/6.dead/1.Poisoned/4.png",
        "img/1.Sharkie/6.dead/1.Poisoned/5.png",
        "img/1.Sharkie/6.dead/1.Poisoned/6.png",
        "img/1.Sharkie/6.dead/1.Poisoned/7.png",
        "img/1.Sharkie/6.dead/1.Poisoned/8.png",
        "img/1.Sharkie/6.dead/1.Poisoned/9.png",
        "img/1.Sharkie/6.dead/1.Poisoned/10.png",
        "img/1.Sharkie/6.dead/1.Poisoned/11.png",
        "img/1.Sharkie/6.dead/1.Poisoned/12.png"
    ]
    LONG_IDLE_IMAGES = [
        "img/1.Sharkie/2.Long_IDLE/i1.png",
        "img/1.Sharkie/2.Long_IDLE/i2.png",
        "img/1.Sharkie/2.Long_IDLE/i3.png",
        "img/1.Sharkie/2.Long_IDLE/i4.png",
        "img/1.Sharkie/2.Long_IDLE/i5.png",
        "img/1.Sharkie/2.Long_IDLE/i6.png",
        "img/1.Sharkie/2.Long_IDLE/i7.png",
        "img/1.Sharkie/2.Long_IDLE/i8.png",
        "img/1.Sharkie/2.Long_IDLE/i9.png",
        "img/1.Sharkie/2.Long_IDLE/i10.png",
        "img/1.Sharkie/2.Long_IDLE/i11.png",
        "img/1.Sharkie/2.Long_IDLE/i12.png",
        "img/1.Sharkie/2.Long_IDLE/i13.png",
        "img/1.Sharkie/2.Long_IDLE/i14.png"
    ]
    IDLE_IMAGES = [
        "img/1.Sharkie/1.IDLE/1.png",
        "img/1.Sharkie/1.IDLE/2.png",
        "img/1.Sharkie/1.IDLE/3.png",
        "img/1.Sharkie/1.IDLE/4.png",
        "img/1.Sharkie/1.IDLE/5.png",
        "img/1.Sharkie/1.IDLE/6.png",
        "img/1.Sharkie/1.IDLE/7.png",
        "img/1.Sharkie/1.IDLE/8.png",
        "img/1.Sharkie/1.IDLE/9.png",
        "img/1.Sharkie/1.IDLE/10.png",
        "img/1.Sharkie/1.IDLE/11.png",
        "img/1.Sharkie/1.IDLE/12.png",
        "img/1.Sharkie/1.IDLE/13.png",
        "img/1.Sharkie/1.IDLE/14.png",
        "img/1.Sharkie/1.IDLE/15.png",
        "img/1.Sharkie/1.IDLE/16.png",
        "img/1.Sharkie/1.IDLE/17.png",
        "img/1.Sharkie/1.IDLE/18.png"
    ]
    WALKING_IMAGES = [
        "img/1.Sharkie/3.Swim/1.png",
        "img/1.Sharkie/3.Swim/2.png",
        "img/1.Sharkie/3.Swim/3.png",
        "img/1.Sharkie/3.Swim/4.png",
        "img/1.Sharkie/3.Swim/5.png",
        "img/1.Sharkie/3.Swim/6.png"

    ];

    HURT_IMAGES = [
        "img/1.Sharkie/5.Hurt/1.Poisoned/1.png",
        "img/1.Sharkie/5.Hurt/1.Poisoned/2.png",
        "img/1.Sharkie/5.Hurt/1.Poisoned/3.png",
        "img/1.Sharkie/5.Hurt/1.Poisoned/4.png",
        "img/1.Sharkie/5.Hurt/1.Poisoned/5.png"
    ]
    speedY = 0;
    acceleration = 1;

     offset = {
        top: 140,
        bottom: 60,
        left: 50,
        right: 45
    }

    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;

            }

        }, 1000 / 25);
    }

    isAboveGround() {
        return this.y < 100;
    }





    world;

    constructor() {
        super().loadImage("img/1.Sharkie/3.Swim/1.png");
        this.loadImages(this.WALKING_IMAGES);
        this.loadImages(this.IDLE_IMAGES);
        this.loadImages(this.LONG_IDLE_IMAGES);
        this.loadImages(this.DEAD_IMAGES);
        this.loadImages(this.HURT_IMAGES);
        this.applyGravity();
        this.animate();
        // this.setPercentage(this.hp);

    }

    animate() {


        //Right
        setInterval(() => {
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                this.moveRight()
                this.otherDirection = false

            }

            if (this.world.keyboard.LEFT && this.x > 0) {
                this.moveLeft()
                this.otherDirection = true
            }

            if (this.world.keyboard.UP && this.y > 0) {
                this.moveUp()
            }

            this.world.camera_x = -this.x + 100;
        }, 1000 / 60)


        setInterval(() => {

            if (this.isDead()) {
                this.playAnimation(this.DEAD_IMAGES)



            } else if (this.isHurt()) {
                this.playAnimation(this.HURT_IMAGES)

            } else if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                this.playAnimation(this.WALKING_IMAGES);
               

            } else if (this.isAboveGround()) {
                this.playAnimation(this.WALKING_IMAGES);

            } else {
                this.playAnimation(this.IDLE_IMAGES);
            }

            
        }, 100)



    }

    

   


  
}   
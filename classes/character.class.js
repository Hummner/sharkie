class Character extends MovableObject {
    height = 200;
    width = 200;
    y = 100;
    speed = 10;
    hp = 100;
    longIdle;
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
    speedY = 0;
    acceleration = 1;

     offset = {
        top: 80,
        bottom: 120,
        left: 35,
        right: 55
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
        return this.y < 200;
    }





    world;

    constructor() {
        super().loadImage("img/1.Sharkie/3.Swim/1.png");
        this.loadImages(this.WALKING_IMAGES);
        this.loadImages(this.IDLE_IMAGES);
        this.loadImages(this.LONG_IDLE_IMAGES);
        this.applyGravity();
        this.animate();

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

            if (this.world.keyboard.UP && this.y > 50) {
                this.moveUp()
            }

            this.world.camera_x = -this.x + 100;
        }, 1000 / 60)


        setInterval(() => {
            if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                this.playAnimation(this.WALKING_IMAGES);
               

            } else if (this.isAboveGround()) {
                this.playAnimation(this.WALKING_IMAGES);

            } else {
                this.playAnimation(this.IDLE_IMAGES);
            }

            
        }, 100)



    }


  
}   
class Character extends MovableObject {
    height = 250;
    width = 200;
    x = 0;
    y = 0;
    speed = 10;
    hp = 100;
    longIdle;
    speedY = 0;
    currentImageOnlyOneAnimation = 0
    attackTime = false;
    meleeAttackTime;
    thunderDead;
    world;
    longIdleTimer = 0;
    offset = {
        top: 140,
        bottom: 60,
        left: 50,
        right: 45
    };


    DEAD_IMAGES = [
        "./img/1.Sharkie/6.dead/1.Poisoned/1.png",
        "./img/1.Sharkie/6.dead/1.Poisoned/2.png",
        "./img/1.Sharkie/6.dead/1.Poisoned/3.png",
        "./img/1.Sharkie/6.dead/1.Poisoned/4.png",
        "./img/1.Sharkie/6.dead/1.Poisoned/5.png",
        "./img/1.Sharkie/6.dead/1.Poisoned/6.png",
        "./img/1.Sharkie/6.dead/1.Poisoned/7.png",
        "./img/1.Sharkie/6.dead/1.Poisoned/8.png",
        "./img/1.Sharkie/6.dead/1.Poisoned/9.png",
        "./img/1.Sharkie/6.dead/1.Poisoned/10.png",
        "./img/1.Sharkie/6.dead/1.Poisoned/11.png",
        "./img/1.Sharkie/6.dead/1.Poisoned/12.png"
    ];


    LONG_IDLE_IMAGES = [
        "./img/1.Sharkie/2.Long_IDLE/I1.png",
        "./img/1.Sharkie/2.Long_IDLE/I2.png",
        "./img/1.Sharkie/2.Long_IDLE/I3.png",
        "./img/1.Sharkie/2.Long_IDLE/I4.png",
        "./img/1.Sharkie/2.Long_IDLE/I5.png",
        "./img/1.Sharkie/2.Long_IDLE/I6.png",
        "./img/1.Sharkie/2.Long_IDLE/I7.png",
        "./img/1.Sharkie/2.Long_IDLE/I8.png",
        "./img/1.Sharkie/2.Long_IDLE/I9.png",
        "./img/1.Sharkie/2.Long_IDLE/I10.png",
        "./img/1.Sharkie/2.Long_IDLE/I11.png",
        "./img/1.Sharkie/2.Long_IDLE/I12.png",
        "./img/1.Sharkie/2.Long_IDLE/I13.png",
        "./img/1.Sharkie/2.Long_IDLE/I14.png"
    ];


    IDLE_IMAGES = [
        "./img/1.Sharkie/1.IDLE/1.png",
        "./img/1.Sharkie/1.IDLE/2.png",
        "./img/1.Sharkie/1.IDLE/3.png",
        "./img/1.Sharkie/1.IDLE/4.png",
        "./img/1.Sharkie/1.IDLE/5.png",
        "./img/1.Sharkie/1.IDLE/6.png",
        "./img/1.Sharkie/1.IDLE/7.png",
        "./img/1.Sharkie/1.IDLE/8.png",
        "./img/1.Sharkie/1.IDLE/9.png",
        "./img/1.Sharkie/1.IDLE/10.png",
        "./img/1.Sharkie/1.IDLE/11.png",
        "./img/1.Sharkie/1.IDLE/12.png",
        "./img/1.Sharkie/1.IDLE/13.png",
        "./img/1.Sharkie/1.IDLE/14.png",
        "./img/1.Sharkie/1.IDLE/15.png",
        "./img/1.Sharkie/1.IDLE/16.png",
        "./img/1.Sharkie/1.IDLE/17.png",
        "./img/1.Sharkie/1.IDLE/18.png"
    ];


    WALKING_IMAGES = [
        "./img/1.Sharkie/3.Swim/1.png",
        "./img/1.Sharkie/3.Swim/2.png",
        "./img/1.Sharkie/3.Swim/3.png",
        "./img/1.Sharkie/3.Swim/4.png",
        "./img/1.Sharkie/3.Swim/5.png",
        "./img/1.Sharkie/3.Swim/6.png"

    ];


    HURT_IMAGES = [
        "./img/1.Sharkie/5.Hurt/1.Poisoned/1.png",
        "./img/1.Sharkie/5.Hurt/1.Poisoned/2.png",
        "./img/1.Sharkie/5.Hurt/1.Poisoned/3.png",
        "./img/1.Sharkie/5.Hurt/1.Poisoned/4.png",
        "./img/1.Sharkie/5.Hurt/1.Poisoned/5.png"
    ];


    ATTACK_BUBBLE = [

        "./img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/2.png",

        "./img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/4.png",

        "./img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/6.png",

        "./img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/8.png"
    ];


    FIN_SLAP = [
        "./img/1.Sharkie/4.Attack/Fin slap/2.png",
        "./img/1.Sharkie/4.Attack/Fin slap/3.png",
        "./img/1.Sharkie/4.Attack/Fin slap/4.png",
        "./img/1.Sharkie/4.Attack/Fin slap/5.png",
        "./img/1.Sharkie/4.Attack/Fin slap/6.png",
        "./img/1.Sharkie/4.Attack/Fin slap/7.png",
        "./img/1.Sharkie/4.Attack/Fin slap/8.png"
    ];


    THUNDER_SRIKE = [
        "./img/1.Sharkie/5.Hurt/2.Electric shock/1.png",
        "./img/1.Sharkie/5.Hurt/2.Electric shock/2.png",
        "./img/1.Sharkie/5.Hurt/2.Electric shock/3.png"
    ];


    constructor() {
        super().loadImage("./img/1.Sharkie/3.Swim/1.png");
        this.loadImages(this.WALKING_IMAGES);
        this.loadImages(this.IDLE_IMAGES);
        this.loadImages(this.LONG_IDLE_IMAGES);
        this.loadImages(this.DEAD_IMAGES);
        this.loadImages(this.HURT_IMAGES);
        this.loadImages(this.ATTACK_BUBBLE);
        this.loadImages(this.FIN_SLAP);
        this.loadImages(this.THUNDER_SRIKE);
        this.applyGravity();
        this.animate();
    }


    animate() {


        //Moving
        let moveInterval = this.characterMovingAnimation();
        this.refreshCamera();


        //Moving Animations

        let animations = setInterval(() => {
            this.longIdleTimer++;
            if (this.isDead()) {
                this.playOnlyOneAnimation(this.DEAD_IMAGES, this.currentImageOnlyOneAnimation == 12)
                this.moveUp(5)
                this.longIdleTimer = 0;
            } else if (this.thunderDead) {
                this.playOnlyOneAnimation(this.THUNDER_SRIKE, !this.isHurt())
                this.longIdleTimer = 0;
            } else if (this.isHurt()) {
                this.playAnimation(this.HURT_IMAGES)
                this.longIdleTimer = 0;
            } else if (this.isShoot()) {
                this.playOnlyOneAnimation(this.ATTACK_BUBBLE, !this.isShoot());
                this.longIdleTimer = 0;
            } else if (this.isMeleeAttack() && !this.isHurt()) {
                this.playOnlyOneAnimation(this.FIN_SLAP, !this.isMeleeAttack());
                this.longIdleTimer = 0;
            } else if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                this.playAnimation(this.WALKING_IMAGES);
                this.longIdleTimer = 0;
            } else if (this.isAboveGround()) {
                this.playAnimation(this.WALKING_IMAGES);
                this.longIdleTimer = 0;
            } else if (this.longIdleTimer > 100) {
                this.playOnlyOneAnimation(this.LONG_IDLE_IMAGES, this.stopAnimation(this.LONG_IDLE_IMAGES))
            } else {
                this.playAnimation(this.IDLE_IMAGES);
                this.currentImageOnlyOneAnimation = 0;
            }
        }, 100);

        this.stoppableInterval.push(moveInterval);
        this.stoppableInterval.push(animations)

    }


    characterMovingAnimation() {
        return setInterval(() => {

            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x && !this.isDead()) {
                this.moveRight()
                this.moveBackgroundRight();
                this.otherDirection = false;
                this.longIdleTimer = 0;
            }

            if (this.world.keyboard.LEFT && this.x > 100 && !this.isDead()) {
                this.moveLeft();
                this.moveBackgroundLeft();
                this.otherDirection = true;
                this.longIdleTimer = 0;
            }

            if (this.world.keyboard.UP && this.y > 0 && !this.isDead() && this.speedY < 3) {
                this.moveUp(10)
                this.world.playSounds("./audio/jump.wav", 0.5)
                this.longIdleTimer = 0;
            }

            if (this.world.keyboard.DOWN && !this.isDead() && this.speedY > -10) {
                console.log(this.speedY)
                this.moveDown()
                this.world.playSounds("./audio/jump.wav", 0.5)
                this.longIdleTimer = 0;
            }


        }, 1000 / 60)
    }


    refreshCamera() {
        setInterval(() => {
            this.world.camera_x = -this.x + 100;
        }, 1000 / 60);
    }


}   

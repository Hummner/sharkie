/**
 * Represents the main character in the game.
 * Inherits movement and physics from MovableObject.
 */
class Character extends MovableObject {
    // Basic properties
    height = 250;
    width = 200;
    x = 0;
    y = 0;
    speed = 10;
    hp = 100;
    longIdle;
    speedY = 0;
    currentImageOnlyOneAnimation = 0;
    attackTime = false;
    meleeAttackTime;
    thunderDead;
    world;
    longIdleTimer = 1;
    sleepingEffect;
    lastSleepingSoundTime = 0;


    /** Defines the pixel offset for collision detection */
    offset = {
        top: 140,
        bottom: 60,
        left: 50,
        right: 45
    };


    // === IMAGE PATHS ===
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


    /**
     * Initializes the character, loads images, and starts animation and gravity.
     */
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
    };


    /**
     * Starts all animations and registers intervals.
     */
    animate() {
        let moveInterval = this.characterMoving();
        this.refreshCamera();
        let animations = this.characterMovingAnimation();
        this.stoppableInterval.push(moveInterval, animations);
    };


    /**
     * Animates the character based on its current state (every 100ms).
     * @returns {number} The interval ID
     */
    characterMovingAnimation() {
        return setInterval(() => {
            this.checkLongIdle();
            if (this.characterDeath()) return;
            if (this.characterThunderDeath()) return;
            if (this.characterHurt()) return;
            if (this.characterAttack()) return;
            if (this.characterMovement()) return;
            if (this.characterLongIdle()) return;
            this.playAnimation(this.IDLE_IMAGES);
            this.currentImageOnlyOneAnimation = 0;
        }, 100);
    };


    /**
     * Handles movement input (every frame, ~60 FPS).
     * @returns {number} The interval ID
     */
    characterMoving() {
        return setInterval(() => {
            this.characterMoveRight();
            this.characterMoveLeft();
            this.characterMoveUp();
            this.characterMoveDown();
        }, 1000 / 60);
    };


    /**
     * Updates the camera to follow the character.
     */
    refreshCamera() {
        setInterval(() => {
            this.world.camera_x = -this.x + 100;
        }, 1000 / 60);
    };


    /**
     * Plays a sleeping sound if enough idle time has passed.
     */
    sleeping() {
        const now = Date.now();
        if (now - this.lastSleepingSoundTime >= 4000 && !this.world.musicMute) {
            this.sleepingEffect = new Audio("./audio/sleeping_short.wav");
            this.sleepingEffect.volume = 0.2;
            this.sleepingEffect.play();
            this.lastSleepingSoundTime = now;
        }
    };


    /**
     * Checks if the character is idle and stops the sleeping sound if necessary.
     */
    checkLongIdle() {
        if (this.longIdleTimer == 0 && this.sleepingEffect) {
            this.sleepingEffect.pause();
            this.sleepingEffect.currentTime = 0;
        }
        this.longIdleTimer++;
    };
    

    /**
     * Handles character death animation.
     * @returns {boolean} True if this state is active
     */
    characterDeath() {
        if (this.isDead()) {
            this.playOnlyOneAnimation(this.DEAD_IMAGES, this.stopAnimation(this.DEAD_IMAGES));
            this.moveUp(5);
            this.longIdleTimer = 0;
            return true;
        }
        return false;
    };
    

    /**
     * Handles thunder shock death animation.
     * @returns {boolean} True if this state is active
     */
    characterThunderDeath() {
        if (this.thunderDead) {
            this.playOnlyOneAnimation(this.THUNDER_SRIKE, !this.isHurt());
            this.longIdleTimer = 0;
            return true;
        }
        return false;
    };
    

    /**
     * Handles hurt animation.
     * @returns {boolean} True if this state is active
     */
    characterHurt() {
        if (this.isHurt()) {
            this.playAnimation(this.HURT_IMAGES);
            this.longIdleTimer = 0;
            return true;
        }
        return false;
    };
    

    /**
     * Handles attack animations (ranged and melee).
     * @returns {boolean} True if this state is active
     */
    characterAttack() {
        if (this.isShoot()) {
            this.playOnlyOneAnimation(this.ATTACK_BUBBLE, !this.isShoot());
            this.longIdleTimer = 0;
            return true;
        }
        if (this.isMeleeAttack() && !this.isHurt()) {
            this.playOnlyOneAnimation(this.FIN_SLAP, !this.isMeleeAttack());
            this.longIdleTimer = 0;
            return true;
        }
        return false;
    };
    

    /**
     * Handles walking/swimming animation if movement keys are pressed.
     * @returns {boolean} True if movement is active
     */
    characterMovement() {
        if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT || this.isAboveGround()) {
            this.playAnimation(this.WALKING_IMAGES);
            this.longIdleTimer = 0;
            return true;
        }
        return false;
    };
    

    /**
     * Handles long idle animation and sleeping sound.
     * @returns {boolean} True if long idle is active
     */
    characterLongIdle() {
        if (this.longIdleTimer > 100) {
            this.playOnlyOneAnimation(this.LONG_IDLE_IMAGES, this.stopAnimation(this.LONG_IDLE_IMAGES));
            this.sleeping();
            return true;
        }
        return false;
    };
    

    /** Moves the character to the right if allowed. */
    characterMoveRight() {
        if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x && !this.isDead()) {
            this.moveRight();
            this.moveBackgroundRight();
            this.otherDirection = false;
            this.longIdleTimer = 0;
        }
    };
    

    /** Moves the character to the left if allowed. */
    characterMoveLeft() {
        if (this.world.keyboard.LEFT && this.x > 100 && !this.isDead()) {
            this.moveLeft();
            this.moveBackgroundLeft();
            this.otherDirection = true;
            this.longIdleTimer = 0;
        }
    };
    

    /** Makes the character jump upward if allowed. */
    characterMoveUp() {
        if (this.world.keyboard.UP && this.y > 0 && !this.isDead() && this.speedY < 3) {
            this.moveUp(10);
            this.world.playSounds("./audio/jump.wav", 0.5);
            this.longIdleTimer = 0;
        }
    };
    

    /** Makes the character dive downward if allowed. */
    characterMoveDown() {
        if (this.world.keyboard.DOWN && !this.isDead() && this.speedY > -10) {
            this.moveDown();
            this.world.playSounds("./audio/jump.wav", 0.5);
            this.longIdleTimer = 0;
        }
    };
}

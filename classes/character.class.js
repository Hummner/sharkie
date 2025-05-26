/**
 * @class Character
 * @extends MovableObject
 * 
 * This class represents the player's main character (Sharkie).
 * It handles movement, animations, idle behavior, attack logic and state transitions.
 */
class Character extends MovableObject {
    /**
     * Height of the object.
    * @type {number}
    */
    height = 250;

    /**
     * Width of the object.
     * @type {number}
     */
    width = 200;

    /**
     * X-position of the object.
     * @type {number}
     */
    x = 0;

    /**
     * Y-position of the object.
     * @type {number}
     */
    y = 0;

    /**
     * Horizontal movement speed.
     * @type {number}
     */
    speed = 10;

    /**
     * Health points of the object.
     * @type {number}
     */
    hp = 100;

    /**
     * Flag indicating whether the character is in long idle animation.
     * @type {boolean}
     */
    longIdle;

    /**
     * Vertical movement speed (e.g., for jumping or falling).
     * @type {number}
     */
    speedY = 0;

    /**
     * Index of the current frame in single-run animations.
     * @type {number}
     */
    currentImageOnlyOneAnimation = 0;

    /**
     * Flag indicating if an attack is currently happening.
     * @type {boolean}
     */
    attackTime = false;

    /**
     * Timer or flag for a melee attack.
     * @type {any}
     */
    meleeAttackTime;

    /**
     * Flag indicating whether the character died from an electric attack.
     * @type {boolean}
     */
    thunderDead;

    /**
     * Reference to the game world object.
     * @type {any}
     */
    world;

    /**
     * Timer value to control when the long idle starts.
     * @type {number}
     */
    longIdleTimer = 1;

    /**
     * Visual or audio effect shown when the character is sleeping.
     * @type {any}
     */
    sleepingEffect;

    /**
     * Timestamp of the last time a sleeping sound was played.
     * @type {number}
     */
    lastSleepingSoundTime = 0;


    /** Defines the pixel offset for collision detection */
    offset = {
        top: 140,
        bottom: 60,
        left: 50,
        right: 45
    };


    /**
     * Images used when Character is dead.
     * @type {string[]} 
     */
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

    /** 
     * Images used when Character is in idle after 10sec.
     * @type {string[]} 
     */
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

    /** 
     * Images used when Character is idle.
     * @type {string[]}
     */
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

    /**
 * Images used when character is walking.
 * @type {string[]}
 */
    WALKING_IMAGES = [
        "./img/1.Sharkie/3.Swim/1.png",
        "./img/1.Sharkie/3.Swim/2.png",
        "./img/1.Sharkie/3.Swim/3.png",
        "./img/1.Sharkie/3.Swim/4.png",
        "./img/1.Sharkie/3.Swim/5.png",
        "./img/1.Sharkie/3.Swim/6.png"
    ];

    /**
     * Images used when character is hurt.
     * @type {string[]}
     */
    HURT_IMAGES = [
        "./img/1.Sharkie/5.Hurt/1.Poisoned/1.png",
        "./img/1.Sharkie/5.Hurt/1.Poisoned/2.png",
        "./img/1.Sharkie/5.Hurt/1.Poisoned/3.png",
        "./img/1.Sharkie/5.Hurt/1.Poisoned/4.png",
        "./img/1.Sharkie/5.Hurt/1.Poisoned/5.png"
    ];

    /**
     * Images used when character is attacking with bubbles.
     * @type {string[]}
     */
    ATTACK_BUBBLE = [
        "./img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/2.png",
        "./img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/4.png",
        "./img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/6.png",
        "./img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/8.png"
    ];

    /**
     * Images used when character is melee attacking (fin slap).
     * @type {string[]}
     */
    FIN_SLAP = [
        "./img/1.Sharkie/4.Attack/Fin slap/2.png",
        "./img/1.Sharkie/4.Attack/Fin slap/3.png",
        "./img/1.Sharkie/4.Attack/Fin slap/4.png",
        "./img/1.Sharkie/4.Attack/Fin slap/5.png",
        "./img/1.Sharkie/4.Attack/Fin slap/6.png",
        "./img/1.Sharkie/4.Attack/Fin slap/7.png",
        "./img/1.Sharkie/4.Attack/Fin slap/8.png"
    ];

    /**
     * Images used when character dies from jellyfish electric shock.
     * @type {string[]}
     */
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
     * Initializes all movement and animation loops.
     */
    animate() {
        const moveInterval = this.characterMoving();
        const animationInterval = this.characterMovingAnimation();
        this.refreshCamera();
        this.stoppableInterval.push(moveInterval, animationInterval);
    };


    /**
     * Runs every 100ms and checks current state for appropriate animation.
     * @returns {number} Interval ID
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
     * Runs ~60 times per second, handles movement based on input.
     * @returns {number} Interval ID
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
     * Keeps the camera centered on the character.
     */
    refreshCamera() {
        setInterval(() => {
            this.world.camera_x = -this.x + 100;
        }, 1000 / 60);
    };


    /**
     * Plays sleeping audio if the character has been idle long enough.
     */
    sleeping() {
        const now = Date.now();
        if (now - this.lastSleepingSoundTime >= 4000) {
            this.world.sound.playSounds("./audio/sleeping_short.wav", 0.2);
            this.lastSleepingSoundTime = now;
        }
    };


    /**
     * Increases the idle timer. Stops sleep audio if user input resumes.
     */
    checkLongIdle() {
        if (this.longIdleTimer === 0 && this.sleepingEffect) {
            this.sleepingEffect.pause();
            this.sleepingEffect.currentTime = 0;
        }
        this.longIdleTimer++;
    };


    /**
     * Handles death animation and logic.
     * @returns {boolean}
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
     * Handles thunder strike death animation.
     * @returns {boolean}
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
     * Plays hurt animation.
     * @returns {boolean}
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
     * Executes ranged or melee attacks.
     * @returns {boolean}
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
     * Starts walking animation if movement is detected.
     * @returns {boolean}
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
     * Triggers long idle animation and sound.
     * @returns {boolean}
     */
    characterLongIdle() {
        if (this.longIdleTimer > 100) {
            this.playOnlyOneAnimation(this.LONG_IDLE_IMAGES, this.stopAnimation(this.LONG_IDLE_IMAGES));
            this.sleeping();
            return true;
        }
        return false;
    };


    /** Moves the character right if possible. */
    characterMoveRight() {
        if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x && !this.isDead()) {
            this.moveRight();
            this.moveBackgroundRight();
            this.otherDirection = false;
            this.longIdleTimer = 0;
        }
    };


    /** Moves the character left if possible. */
    characterMoveLeft() {
        if (this.world.keyboard.LEFT && this.x > 100 && !this.isDead()) {
            this.moveLeft();
            this.moveBackgroundLeft();
            this.otherDirection = true;
            this.longIdleTimer = 0;
        }
    };


    /** Makes the character swim upward. */
    characterMoveUp() {
        if (this.world.keyboard.UP && this.y > 0 && !this.isDead() && this.speedY < 3) {
            this.moveUp(10);
            this.world.sound.playSounds("./audio/jump.wav", 0.5);
            this.longIdleTimer = 0;
        }
    };


    /** Makes the character swim downward. */
    characterMoveDown() {
        if (this.world.keyboard.DOWN && !this.isDead() && this.speedY > -10) {
            this.moveDown();
            this.world.sound.playSounds("./audio/jump.wav", 0.5);
            this.longIdleTimer = 0;
        }
    };
}
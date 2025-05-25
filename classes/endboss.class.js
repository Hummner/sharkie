/**
 * Class representing the final enemy (Endboss) in the game.
 * Handles animations, movement, and different visual states.
 */
class Endboss extends MovableObject {
    /** @type {number} Initial vertical position */
    y = -200;

    /** @type {number} Width of the Endboss */
    width = 500;

    /** @type {number} Height of the Endboss */
    height = 600;

    /** @type {number} Health points */
    hp = 300;

    /** @type {number} Horizontal speed */
    speed = 0;

    /** @type {number} Vertical speed */
    speedY = 0;

    /** @type {number} Index of the current image in a single animation */
    currentImageOnlyOneAnimation;

    /**
     * Offset values for collision or hitbox detection.
     * @type {{ top: number, bottom: number, left: number, right: number }}
     */
    offset = {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    };

    /** @type {string[]} Array of image paths for walking and attacking animation */
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

    /** @type {string[]} Intro animation image paths */
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
    ];

    /** @type {string[]} Images used when Endboss is hurt */
    HURT_IMAGES = [
        "./img/2.Enemy/3 Final Enemy/Hurt/1.png",
        "./img/2.Enemy/3 Final Enemy/Hurt/2.png",
        "./img/2.Enemy/3 Final Enemy/Hurt/3.png",
        "./img/2.Enemy/3 Final Enemy/Hurt/4.png"
    ];

    /** @type {string[]} Images used when Endboss dies */
    DEAD_IMAGES = [
        "./img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2.png",
        "./img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 6.png",
        "./img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 7.png",
        "./img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 8.png",
        "./img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 9.png",
        "./img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 10.png"
    ];

    /**
     * Creates a new Endboss instance and preloads all animations.
     */
    constructor() {
        super().loadImage(this.INTRO_IMAGES[0]);
        this.loadImages(this.INTRO_IMAGES);
        this.loadImages(this.WALKING_IMAGES);
        this.loadImages(this.HURT_IMAGES);
        this.loadImages(this.DEAD_IMAGES);
        this.x = 5500;
    };


    /**
     * Starts the animation cycle of the Endboss.
     * Plays intro once, then loops attack/walk/hurt/dead animation depending on state.
     */
    animate() {
        let introCounter = 0;
        setInterval(() => {
            if (introCounter < 10) {
                this.playAnimation(this.INTRO_IMAGES);
                introCounter++;
            } else if (this.isDead()) {
                this.playOnlyOneAnimation(this.DEAD_IMAGES, this.stopAnimation(this.DEAD_IMAGES));
                this.y -= 15;
            } else if (this.isHurt()) {
                this.playOnlyOneAnimation(this.HURT_IMAGES, this.stopAnimation(this.HURT_IMAGES));
            } else {
                this.endbossAttack();
            }
        }, 150);
    };
    

    /**
     * Plays the Endboss attack/walk animation and moves it left.
     */
    endbossAttack() {
        this.playAnimation(this.WALKING_IMAGES);
        this.speed += 1;
        this.moveLeft();
    };
}
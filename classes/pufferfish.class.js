/**
 * Class representing a PufferFish (puffer fish enemy) in the game.
 * Extends MovableObject for movement and animation logic.
 */
class PufferFish extends MovableObject {
    /**
    * Height of the object.
    * @type {number}
    */
    height = 70;

    /**
     * Width of the object.
     * @type {number}
     */
    width = 110;

    /**
     * Health points of the object.
     * @type {number}
     */
    hp = 100;

    /**
     * Counter used to track time-based events or animations.
     * @type {number}
     */
    timeCounter;

    /**
     * Interval ID for the walking animation.
     * @type {number}
     */
    walkingAnimationInterval;

    /**
     * Interval ID for general walking logic.
     * @type {number}
     */
    walkingInterval;
    /**
     * Collision detection offsets.
     * Adjusts the collision box to better fit the sprite.
     */
    offset = {
        top: 10,
        bottom: 20,
        left: 10,
        right: 20
    };

    /**
     * Walking animation frames.
     * Used for the swimming animation of the enemy.
     * @type {string[]}
     */
    WALKING_IMAGES = [
        "./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png",
        "./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim2.png",
        "./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim3.png",
        "./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim4.png",
        "./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim5.png"
    ];

    /**
     * Death animation frames.
     * @type {string[]}
     */
    DEAD_IMAGES = [
        "./img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/1.Dead 1 (can animate by going up).png",
        "./img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/1.Dead 2 (can animate by going down to the floor after the Fin Slap attack).png",
        "./img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/1.Dead 3 (can animate by going down to the floor after the Fin Slap attack).png"
    ];

    /**
     * Creates an instance of PufferFish.
     * @param {number} y - The vertical (y-axis) spawn position of the enemy.
     */
    constructor(y) {
        super().loadImage("./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png");
        this.loadImages(this.DEAD_IMAGES);
        this.x = 700 + Math.random() * 5000;
        this.y = y;
        this.loadImages(this.WALKING_IMAGES);
        this.speed = 0.1 + Math.random();
        this.animate();
    };


    /**
     * Starts animation and movement intervals for the enemy.
     */
    animate() {
        this.currentImageOnlyOneAnimation = 0;
        this.walkingInterval = this.enemyWalking();
        this.walkingAnimationInterval = this.enemyWalkingAnimation();
    };


    /**
     * Handles horizontal movement.
     * Enemy moves left continuously. If dead, also floats upward.
     * @returns {NodeJS.Timer} The interval ID for movement logic.
     */
    enemyWalking() {
        return setInterval(() => {
            this.moveLeft();
            if (this.isDead()) {
                this.y -= 5;
                this.moveLeft();
            }
        }, 1000 / 60);
    };


    /**
     * Plays walking or death animation based on state.
     * @returns {NodeJS.Timer} The interval ID for animation logic.
     */
    enemyWalkingAnimation() {
        return setInterval(() => {
            if (this.isDead()) {
                this.playOnlyOneAnimation(this.DEAD_IMAGES, this.stopAnimation(this.DEAD_IMAGES));
            } else {
                this.playAnimation(this.WALKING_IMAGES);
            }
        }, 100);
    };
}
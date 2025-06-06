/**
 * Represents a dangerous jellyfish enemy that moves up and down and animates through image frames.
 * Inherits from MovableObject.
 */
class JellyFish extends MovableObject {
    /**
    * Width of the jellyfish.
    * @type {number}
    */
    width = 100;

    /**
     * Height of the jellyfish.
     * @type {number}
     */
    height = 100;

    /**
     * Y-position of the jellyfish.
     * @type {number}
     */
    y = 0;

    /**
     * Indicates whether the jellyfish can perform a thunderstrike.
     * @type {boolean}
     */
    thunderstrike = true;

    /**
     * Image paths for the jellyfish walking (swimming) animation.
     * @type {string[]}
     */
    WALKING_IMAGES = [
        "img/2.Enemy/2 Jelly fish/Súper dangerous/Green 1.png",
        "img/2.Enemy/2 Jelly fish/Súper dangerous/Green 2.png",
        "img/2.Enemy/2 Jelly fish/Súper dangerous/Green 3.png",
        "img/2.Enemy/2 Jelly fish/Súper dangerous/Green 4.png"
    ];


    /**
     * Creates a new JellyFish instance.
     * @param {number} speedY - Vertical movement speed.
     * @param {number} x - Initial x-position.
     */
    constructor(speedY, x) {
        super().loadImage("img/2.Enemy/2 Jelly fish/Súper dangerous/Green 1.png");
        this.loadImages(this.WALKING_IMAGES);
        this.animate();
        this.yDirection = 1;
        this.speedY = speedY;
        this.x = x;
    };


    /**
     * Starts animation intervals for walking animation and vertical movement.
     */
    animate() {
        setInterval(() => {
            this.playAnimation(this.WALKING_IMAGES);
        }, 200);

        setInterval(() => {
            this.moveUpAndDown(this.speedY);
        }, 100);
    };


    /**
     * Moves the jellyfish up and down based on the current direction and speed.
     * Reverses direction when hitting top or bottom bounds.
     * @param {number} speedY - The speed at which the jellyfish moves vertically.
     */
    moveUpAndDown(speedY) {
        this.y += speedY * this.yDirection;
        if (this.y >= 380 || this.y <= 0) {
            this.yDirection *= -1;
        }
    };
}
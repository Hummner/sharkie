/**
 * Class representing a scrolling background image.
 * Extends MovableObject for movement and rendering.
 */
class Background extends MovableObject {
    /**
    * X-position of the object.
    * @type {number}
    */
    x = 0;

    /**
     * Height of the object.
     * @type {number}
     */
    height = 480;

    /**
     * Width of the object.
     * @type {number}
     */
    width = 720;

    /**
     * Y-position of the object.
     * @type {number}
     */
    y = 0;

    /**
     * Movement speed of the object.
     * @type {number}
     */
    speed;

    /**
     * Creates an instance of Background.
     * @param {string} imagePath - The path to the background image.
     * @param {number} x - The initial x-position of the background.
     * @param {number} s - The speed at which the background moves.
     */
    constructor(imagePath, x, s) {
        super().loadImage(imagePath);
        this.x = x;
        this.speed = s;
    }
}
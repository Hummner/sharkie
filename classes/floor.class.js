/**
 * Class representing the floor background element in the game.
 * Inherits from MovableObject to allow movement and image rendering.
 */
class Floor extends MovableObject {
    /**
    * X-position of the floor.
    * @type {number}
    */
    x = 0;

    /**
     * Height of the floor.
     * @type {number}
     */
    height = 480;

    /**
     * Width of the floor.
     * @type {number}
     */
    width = 720;

    /**
     * Y-position of the floor.
     * @type {number}
     */
    y = 0;

    /**
     * Movement speed of the floor.
     * @type {number}
     */
    speed;

    /**
     * Offset for collision or alignment (not used here).
     * @type {number}
     */
    offset = 0;

    /**
     * Creates a new Floor object.
     * @param {string} imagePath - Path to the background image.
     * @param {number} x - X-position of the floor segment.
     * @param {number} s - Movement speed of the floor segment.
     */
    constructor(imagePath, x, s) {
        super().loadImage(imagePath);
        this.x = x;
        this.speed = s;
    }
}
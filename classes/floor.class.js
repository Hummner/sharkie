/**
 * Class representing the floor background element in the game.
 * Inherits from MovableObject to allow movement and image rendering.
 */
class Floor extends MovableObject {
    /** @type {number} X-position of the floor */
    x = 0;

    /** @type {number} Height of the floor */
    height = 480;

    /** @type {number} Width of the floor */
    width = 720;

    /** @type {number} Y-position of the floor */
    y = 0;

    /** @type {number} Movement speed of the floor */
    speed;

    /** @type {number} Offset for collision or alignment (not used here) */
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
/**
 * Class representing a scrolling background image.
 * Extends MovableObject for movement and rendering.
 */
class Background extends MovableObject {
    x = 0;
    height = 480;
    width = 720;
    y = 0;
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
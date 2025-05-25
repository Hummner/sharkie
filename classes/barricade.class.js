/**
 * Class representing a barricade object in the game world.
 * Extends MovableObject for position and rendering behavior.
 */
class Barricade extends MovableObject {
    /**
     * Defines the hitbox offset of the barricade.
     * Adjusts the top, bottom, left, and right for collision detection.
     * Note: Offset uses current width/height values (set in constructor).
     */
    offset = {
        top: this.height - (this.height / 2),
        bottom: 0,
        left: this.width - (this.width / 2),
        right: this.width - (this.width / 2)
    }

    /**
     * Creates an instance of Barricade.
     * @param {number} x - The x-position of the barricade.
     * @param {number} y - The y-position of the barricade.
     * @param {number} width - The width of the barricade.
     * @param {number} height - The height of the barricade.
     * @param {string} url - The image path for the barricade texture.
     */
    constructor(x, y, width, height, url) {
        super().loadImage(url);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
}
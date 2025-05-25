/**
 * Represents a light layer in the game background.
 * Inherits from MovableObject.
 */
class Light extends MovableObject {
    /** @type {number} X position of the light layer */
    x = 2000;

    /** @type {number} Y position of the light layer */
    y = -200;

    /** @type {number} Width of the light layer */
    width = 2000;

    /** @type {number} Height of the light layer */
    height = 1000;

    /**
     * Creates a new Light instance and loads the light image.
     */
    constructor() {
        super().loadImage("./img/3. Background/Layers/1. Light/COMPLETO.png");
    }
}
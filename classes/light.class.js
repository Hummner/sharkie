/**
 * Represents a light layer in the game background.
 * Inherits from MovableObject.
 */
class Light extends MovableObject {
    /**
    * X position of the light layer.
    * @type {number}
    */
    x = 2000;

    /**
     * Y position of the light layer.
     * @type {number}
     */
    y = -200;

    /**
     * Width of the light layer.
     * @type {number}
     */
    width = 2000;

    /**
     * Height of the light layer.
     * @type {number}
     */
    height = 1000;

    /**
     * Creates a new Light instance and loads the light image.
     */
    constructor() {
        super().loadImage("./img/3. Background/Layers/1. Light/COMPLETO.png");
    }
}
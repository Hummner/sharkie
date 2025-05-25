/**
 * Base class for drawable objects in the game.
 * Handles image loading, rendering, and optional hitbox drawing.
 */
class DrawableObject {
    /** @type {number} X-coordinate on the canvas */
    x = 120;

    /** @type {number} Y-coordinate on the canvas */
    y = 400;

    /** @type {HTMLImageElement} The currently displayed image */
    img;

    /** @type {number} Height of the object */
    height = 100;

    /** @type {number} Width of the object */
    width = 100;

    /**
     * A cache of loaded images to avoid redundant loading.
     * @type {Object.<string, HTMLImageElement>}
     */
    imageCache = {};

    /**
     * Collision offset values used to define hitboxes more precisely.
     * @type {{ top: number, bottom: number, left: number, right: number }}
     */
    offset = {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    };

    /**
     * Draws the image of this object on the provided canvas context.
     * @param {CanvasRenderingContext2D} ctx - The canvas 2D rendering context.
     */
    draw(ctx) {
        try {
            ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        } catch (e) {
            console.warn("Error loading image", e);
            console.log("Path: ", this.img?.src);
        }
    };


    /**
     * Loads a single image into the `img` property.
     * @param {string} path - The file path to the image.
     */
    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    };
    

    /**
     * Preloads multiple images and stores them in the image cache.
     * @param {string[]} arr - An array of image paths.
     */
    loadImages(arr) {
        arr.forEach((path) => {
            const img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    };

    
    
}
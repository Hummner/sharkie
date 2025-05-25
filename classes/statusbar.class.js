/**
 * Represents a health status bar.
 * Inherits from DrawableObject.
 */
class StatusBar extends DrawableObject {
    /**
     * Array of image paths representing health bar states.
     * @type {string[]}
     */
    HP_IMAGES = [
        "./img/4. Marcadores/green/Life/0_  copia 3.png",
        "./img/4. Marcadores/green/Life/20_ copia 4.png",
        "./img/4. Marcadores/green/Life/40_  copia 3.png",
        "./img/4. Marcadores/green/Life/60_  copia 3.png",
        "./img/4. Marcadores/green/Life/80_  copia 3.png",
        "./img/4. Marcadores/green/Life/100_  copia 2.png"
    ];

    /** 
     * Current health percentage (0-100).
     * @type {number}
     */
    percentage = 100;

    /**
     * Creates a new StatusBar instance, loads images and initializes properties.
     */
    constructor() {
        super();
        this.loadImages(this.HP_IMAGES);
        this.setPercentage(100);
        this.x = 10;
        this.y = 5;
        this.width = 150;
        this.height = 45;
    };


    /**
     * Updates the health percentage and sets the corresponding image.
     * @param {number} percentage - The current health percentage.
     */
    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.HP_IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    };
    

    /**
     * Determines the index of the image to use based on the current percentage.
     * @returns {number} Index of the image in HP_IMAGES array.
     */
    resolveImageIndex() {
        if (this.percentage == 100) {
            return 5;
        } else if (this.percentage > 80) {
            return 4;
        } else if (this.percentage > 60) {
            return 3;
        } else if (this.percentage > 40) {
            return 2;
        } else if (this.percentage > 20) {
            return 1;
        } else {
            return 0;
        }
    };
}
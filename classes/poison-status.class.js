/**
 * Represents the poison status bar in the game UI.
 * Inherits from DrawableObject.
 */
class PoisonStatus extends DrawableObject {

    /** @type {string[]} Paths to poison bar images representing different poison levels */
    POISON_BAR = [
        "./img/4. Marcadores/green/poisoned bubbles/0_ copia 2.png",
        "./img/4. Marcadores/green/poisoned bubbles/20_ copia 3.png",
        "./img/4. Marcadores/green/poisoned bubbles/40_ copia 2.png",
        "./img/4. Marcadores/green/poisoned bubbles/60_ copia 2.png",
        "./img/4. Marcadores/green/poisoned bubbles/80_ copia 2.png",
        "./img/4. Marcadores/green/poisoned bubbles/100_ copia 3.png"
    ];

    /**
     * Creates a new PoisonStatus instance, loads images and initializes position and size.
     */
    constructor() {
        super();
        this.loadImages(this.POISON_BAR);
        this.x = 10;
        this.y = 85;
        this.setPercentage(0);
        this.width = 150;
        this.height = 42;
    }

    /**
     * Sets the current poison percentage and updates the displayed image accordingly.
     * @param {number} percentage - The poison level percentage (0 to 100).
     */
    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.POISON_BAR[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    /**
     * Determines the correct image index based on the current poison percentage.
     * @returns {number} The index of the image representing the current poison level.
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
    }
}
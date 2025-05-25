/**
 * Class representing the coin status bar in the game's UI.
 * Displays the amount of coins collected by the player.
 * Extends DrawableObject to inherit image rendering capabilities.
 */
class CoinStatusbar extends DrawableObject {
    /**
     * Image paths representing different coin bar states based on percentage.
     * @type {string[]}
     */
    COIN_BAR = [
        "./img/4. Marcadores/green/Coin/0_  copia 4.png",
        "./img/4. Marcadores/green/Coin/20_  copia 2.png",
        "./img/4. Marcadores/green/Coin/40_  copia 4.png",
        "./img/4. Marcadores/green/Coin/60_  copia 4.png",
        "./img/4. Marcadores/green/Coin/80_  copia 4.png",
        "./img/4. Marcadores/green/Coin/100_ copia 4.png"
    ];

    /** @type {number} Current percentage of collected coins (0–100). */
    percentage = 0;

    /** @type {number} Scale factor for visual effects (optional). */
    scale = 1;

    /** @type {boolean} Flag indicating if the bar is currently scaling up (for animation). */
    scalingUp = false;

    /**
     * Creates a new CoinStatusbar instance and initializes its images and position.
     */
    constructor() {
        super();
        this.loadImages(this.COIN_BAR);
        this.x = 10;
        this.y = 45;
        this.setPercentage(0);
        this.width = 150;
        this.height = 45;
    };


    /**
     * Sets the percentage value of the coin bar and updates the corresponding image.
     * @param {number} percentage - A number from 0 to 100 representing collected coins.
     */
    setPercentage(percentage) {
        this.percentage = percentage;
        const path = this.COIN_BAR[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    };
    

    /**
     * Resolves the index of the image to be used based on the current percentage.
     * @returns {number} Index of the image in the COIN_BAR array.
     */
    resolveImageIndex() {
        if (this.percentage >= 100) {
            return 5;
        } else if (this.percentage >= 80) {
            return 4;
        } else if (this.percentage >= 60) {
            return 3;
        } else if (this.percentage >= 40) {
            return 2;
        } else if (this.percentage >= 20) {
            return 1;
        } else {
            return 0;
        }
    };
}
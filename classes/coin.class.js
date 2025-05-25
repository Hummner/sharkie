/**
 * Class representing a collectible coin in the game world.
 * Extends MovableObject and includes animation and random positioning.
 */
class Coin extends MovableObject {
    /** @type {number} Width of the coin object. */
    width = 50;

    /** @type {number} Height of the coin object. */
    height = 50;

    /** @type {number} Y-position of the coin. */
    y = 300;

    /**
     * Offset used for collision detection (hitbox).
     * @type {{top: number, bottom: number, left: number, right: number}}
     */
    offset = {
        top: 10,
        bottom: 10,
        left: 10,
        right: 10
    };

    /**
     * Image paths used for coin animation.
     * @type {string[]}
     */
    images = [
        "./img/4. Marcadores/1. Coins/1.png",
        "./img/4. Marcadores/1. Coins/2.png",
        "./img/4. Marcadores/1. Coins/3.png",
        "./img/4. Marcadores/1. Coins/4.png"
    ];

    /**
     * Creates a new Coin instance with randomized X-position within a range.
     * @param {number} minX - The minimum X position.
     * @param {number} maxX - The maximum range added to minX.
     */
    constructor(minX, maxX) {
        super().loadImage("./img/4. Marcadores/1. Coins/1.png");
        this.loadImages(this.images);
        this.animate();
        this.x = minX + Math.random() * maxX;
    };


    /**
     * Starts the animation loop for the coin images.
     * Coin animation cycles through the `images` array every 200ms.
     */
    animate() {
        setInterval(() => {
            this.playAnimation(this.images);
        }, 200);
    };
}
/**
 * Represents a poison bottle collectible in the game.
 * Inherits from MovableObject.
 */
class PoisonBottle extends MovableObject {

    /**
     * Creates a new PoisonBottle instance at a random x position within a range.
     * 
     * @param {number} minX - The minimum x coordinate where the bottle can appear.
     * @param {number} maxX - The range added to minX to define the maximum x coordinate.
     */
    constructor(minX, maxX) {
        super().loadImage("./img/4. Marcadores/Posión/Light - Left.png");
        this.y = 350;
        this.x = minX + Math.random() * maxX;
        this.width = 50;
        this.height = 60;
        this.percentage = 0;
    }
}
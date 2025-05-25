/**
 * Represents a melee slash attack object.
 * Inherits from MovableObject.
 */
class Slash extends MovableObject {

    /**
     * Creates a new Slash instance at a given position and direction.
     * @param {number} x - The x position of the character performing the slash.
     * @param {number} y - The y position of the character performing the slash.
     * @param {boolean} otherDirection - If true, the slash faces left; otherwise right.
     */
    constructor(x, y, otherDirection) {
        super().loadImage("");
        this.width = 0;
        this.height = 0;
        this.charachterX = x;
        this.charachterY = y;
        this.otherDirection = otherDirection;
        this.meleeAttack();
    };


    /**
     * Positions and sizes the slash based on the attack direction.
     */
    meleeAttack() {
        let offsetX;
        let offsetY = 120;
        if (this.otherDirection) {
            this.otherDirection = true;
            offsetX = -90;
        } else {
            this.otherDirection = false;
            offsetX = 90;
        }
        this.width = 200;
        this.height = 100;
        this.x = this.charachterX + offsetX;
        this.y = this.charachterY + offsetY;
    };
}
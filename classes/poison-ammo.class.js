/**
 * Represents a poison projectile (ammo) thrown by the character.
 * Inherits from MovableObject.
 */
class PoisonAmmo extends MovableObject {

    /**
     * Creates a new PoisonAmmo instance.
     * 
     * @param {number} x - The initial x position (character's x coordinate).
     * @param {number} y - The initial y position (character's y coordinate).
     * @param {boolean} otherDirection - Direction flag; true if facing left, false if facing right.
     */
    constructor(x, y, otherDirection) {
        super().loadImage("./img/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble (for whale).png");
        this.width = 0;
        this.height = 0;
        this.charachterX = x;
        this.charachterY = y;
        this.speedY = 5;
        this.otherDirection = otherDirection;
        this.throw();
    }
}
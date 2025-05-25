/**
 * Class representing ammo (e.g., a bubble trap projectile).
 * Extends MovableObject to inherit movement and drawing capabilities.
 */
class Ammo extends MovableObject {

    /**
     * Creates an instance of Ammo.
     * @param {number} x - The initial X position of the ammo (usually the character's x).
     * @param {number} y - The initial Y position of the ammo (usually the character's y).
     * @param {boolean} otherDirection - Direction flag; true if ammo moves in the opposite direction.
     */
    constructor(x, y, otherDirection) {
        super().loadImage("./img/1.Sharkie/4.Attack/Bubble trap/Bubble.png");
        this.width = 0;
        this.height = 0;
        this.charachterX = x;
        this.charachterY = y;
        this.otherDirection = otherDirection;
        this.speedY = 5;
        this.throw();
    }
}
/**
 * Represents an object that can move and interact in the game world.
 * Extends DrawableObject with movement, animation, collision, and state logic.
 * 
 * @extends DrawableObject
 */
class MovableObject extends DrawableObject {

    /** @type {number} Current frame index for looping animations */
    currentImage = 0;

    /** @type {number} Current frame index for single-run animations */
    currentImageOnlyOneAnimation = 0;

    /** @type {number} Horizontal movement speed */
    speed = 0.3;

    /** @type {boolean} If true, object faces or moves in opposite direction */
    otherDirection = false;

    /** @type {number} Timestamp of last hit */
    lastHit;

    /** @type {number} Gravity acceleration value */
    acceleration = 0.5;

    /** @type {any} Placeholder for attack-related properties */
    attack;

    /** @type {Array<number>} Holds IDs of intervals to allow clearing */
    stoppableInterval = [];

    /**
     * Applies gravity to the object by modifying vertical speed and position.
     * Runs 25 times per second.
     */
    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    };


    /**
     * Checks if the object is above the ground level.
     * Special case: Ammo objects are always considered above ground.
     * @returns {boolean}
     */
    isAboveGround() {
        if (this instanceof Ammo) {
            return true;
        } else {
            return this.y < 180;
        }
    };
    

    /**
     * Plays a looping animation by cycling through given image paths.
     * @param {string[]} images - Array of image paths for animation frames.
     */
    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    };
    

    /**
     * Plays an animation that runs only once.
     * Stops if `toStop` is true.
     * @param {string[]} images - Array of image paths.
     * @param {boolean} toStop - Whether to stop animation.
     */
    playOnlyOneAnimation(images, toStop) {
        let i = this.currentImageOnlyOneAnimation % images.length;
        if (toStop) return;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImageOnlyOneAnimation++;
    };
    

    /**
     * Checks if single-run animation reached the last frame.
     * @param {Array} arr - Array of animation frames.
     * @returns {boolean} True if animation is complete.
     */
    stopAnimation(arr) {
        return this.currentImageOnlyOneAnimation === arr.length;
    };
    

    /** Moves the object left by its speed. */
    moveLeft() {
        this.x -= this.speed;
    };
    

    /** Moves all background layers right by their speed. */
    moveBackgroundRight() {
        this.world.level.backgrounds.forEach(layer => {
            layer.x += layer.speed;
        });
    };
    

    /** Moves all background layers left by their speed. */
    moveBackgroundLeft() {
        this.world.level.backgrounds.forEach(layer => {
            layer.x -= layer.speed;
        });
    };
    

    /**
     * Throws the object forward, applying gravity and horizontal movement.
     * Adjusts width, height, and starting position.
     */
 throw() {
    this.width = 25;
    this.height = 25;
    this.x = this.charachterX + 180;
    this.y = this.charachterY + 140;
    this.applyGravity();
    let direction = this.otherDirection ? -5 : 5;
    if (this.otherDirection) {
        this.x -= 160;
    }

    setInterval(() => {
        this.x += direction;
    }, 10);
}
    

    /** Moves the object right by 10 pixels. */
    moveRight() {
        this.x += 10;
    };
    

    /** Makes the object move down by setting vertical speed. */
    moveDown() {
        this.speedY = -10;
    };
    

    /**
     * Makes the object move up by setting vertical speed.
     * @param {number} speed - The vertical speed to apply.
     */
    moveUp(speed) {
        this.speedY = speed;
    };
    

    /**
     * Sets a timed flag `timeCounter` to true for a specified timeout duration.
     * @param {number} timeout - Time in milliseconds.
     */
    setTime(timeout) {
        this.timeCounter = true;
        setTimeout(() => {
            this.timeCounter = false;
        }, timeout);
    };
    

    /**
     * Checks if this object collides with another MovableObject.
     * Takes into account offsets for accurate collision detection.
     * @param {MovableObject} mo - Other movable object to check collision against.
     * @returns {boolean} True if colliding.
     */
    isColliding(mo) {
        return this.x + this.width - this.offset.right > mo.x + mo.offset.left &&
               this.y + this.height - this.offset.bottom > mo.y + mo.offset.top &&
               this.x + this.offset.left < mo.x + mo.width - mo.offset.right &&
               this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom;
    };
    

    /** Decreases hp by 5 and updates lastHit timestamp; caps hp at 0. */
    hit() {
        if (this.hp === 0) {
            this.hp = 0;
        } else {
            this.hp -= 5;
            this.lastHit = new Date().getTime();
        }
        this.world.hpStatus.setPercentage(this.hp);
    };
    

    /**
     * Handles a special "thunder hit" that sets hp to 0 after 1 second.
     * @returns {boolean} True if thunder dead state triggered.
     */
    thunderHit() {
        if (this.hp > 0) {
            setTimeout(() => {
                this.hp = 0;
                this.world.hpStatus.setPercentage(this.hp);
            }, 1000);
            this.currentImageOnlyOneAnimation = 0;
            this.lastHit = new Date().getTime();
            return this.thunderDead = true;
        }
    };
    

    /** Returns true if hp is 0 or below. */
    isDead() {
        return this.hp <= 0;
    };
    

    /**
     * Returns true if the object was hit less than 1 second ago.
     * Useful for flicker or invincibility frames.
     * @returns {boolean}
     */
    isHurt() {
        let timepassed = (new Date().getTime() - this.lastHit) / 1000;
        return timepassed < 1;
    };
    

    /** Returns true if the object is currently attacking with a projectile. */
    isShoot() {
        return !!this.attackTime;
    };
    

    /** Returns true if the object is currently doing a melee attack. */
    isMeleeAttack() {
        return !!this.meleeAttackTime;
    };
}
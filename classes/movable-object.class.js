class MovableObject extends DrawableObject {

    currentImage = 0;
    currentImageOnlyOneAnimation = 0;
    speed = 0.3;
    otherDirection = false;
    lastHit;
    acceleration = 0.5;
    attack;
    stoppableInterval = [];




    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;

            }

        }, 1000 / 25);
    }

    isAboveGround() {
        if (this instanceof Ammo) {
            return true
        } else {
            return this.y < 180;
        }

    }




    playAnimation(images) {
        let i = this.currentImage % images.length; // 
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++
    }

    playOnlyOneAnimation(images, toStop) {

        let i = this.currentImageOnlyOneAnimation % images.length;
        if (toStop) return;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImageOnlyOneAnimation++

    }

    stopAnimation(arr) {
        if (this.currentImageOnlyOneAnimation == arr.length) return true
    }

    moveLeft() {
        this.x -= this.speed;

    }

    moveBackgroundRight() {

        this.world.level.backgrounds.forEach(layer => {
            layer.x += layer.speed;
        });



    }

    moveBackgroundLeft() {

        this.world.level.backgrounds.forEach(layer => {
            layer.x -= layer.speed;
        });


    }

    throw() {
        let direction;
        this.width = 25;
        this.height = 25;
        this.x = this.charachterX + 120;
        this.y = this.charachterY + 140;
        this.applyGravity();
        if (this.otherDirection) {
            this.otherDirection = true
            direction = -5;
        } else {
            this.otherDirection = false
            direction = 5;
        }
        setInterval(() => {
            this.x += direction;
        }, 10);
    }


    moveRight() {
        this.x += 10;
    }

    moveDown() {
        this.speedY = -10;
    }

    moveUp(speed) {
        this.speedY = speed;
    }

    setTime(timeout) {
        this.timeCounter = true
        setTimeout(() => {
            return this.timeCounter = false
        }, timeout);

    }


    isColliding(mo) {
        return this.x + this.width - this.offset.right > mo.x + mo.offset.left && 
            this.y + this.height - this.offset.bottom > mo.y + mo.offset.top && 
            this.x + this.offset.left < mo.x + mo.width - mo.offset.right && 
            this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom; 
    }


    hit() {

        if (this.hp == 0) {
            this.hp = 0;
        } else {
            this.hp -= 5;
            this.lastHit = new Date().getTime();

        }
        this.world.hpStatus.setPercentage(this.hp);
        console.log(this.hp)

    }


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
    }


    isDead() {
        return this.hp <= 0;
    }


    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit;
        timepassed = timepassed / 1000;
        return timepassed < 1;
    }

    isShoot() {
        if (this.attackTime) {
            return true
        } else {
            return false
        }
    }

    isMeleeAttack() {
        if (this.meleeAttackTime) {
            return true
        } else {
            return false
        }
    }
}
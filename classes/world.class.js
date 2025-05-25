/**
 * Represents the game world containing the character, enemies, items, and game logic.
 */
class World {
    /**
     * Intervals that can be stopped to control the game loop and animations.
     * @type {number[]}
     */
    stoppableInterval = [];

    /** @type {Character} */
    charachter = new Character();

    /** @type {StatusBar} */
    hpStatus = new StatusBar();

    /** @type {CoinStatusbar} */
    coinStatus = new CoinStatusbar();

    /** @type {PoisonStatus} */
    poisionStatus = new PoisonStatus();

    /** Array of ammo objects (e.g., bubbles, poison ammo). */
    ammo = [];

    /** Array of melee attack slash objects. */
    slash = [];

    /** Array of sounds played during the game. */
    soundspool = [];

    /** Background music audio object */
    music;

    /** Bulb sound audio object (not used here but declared) */
    bulbsound;

    /** Boolean flag if music is muted */
    musicMute;

    /** Current game level object */
    level;

    /** 2D rendering context of the canvas */
    ctx;

    /** The canvas element */
    canvas;

    /** Keyboard input handler */
    keyboard;

    /** Camera offset on the x-axis */
    camera_x = 0;

    /**
     * Creates a new game world.
     * @param {HTMLCanvasElement} canvas - The canvas to render the game on.
     * @param {Object} keyboard - Keyboard input manager.
     * @param {boolean} musicMute - Whether the music is muted.
     */
    constructor(canvas, keyboard, musicMute) {
        this.ctx = canvas.getContext("2d");
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.level = level1; // assumes level1 is defined globally
        this.musicMute = musicMute;
        this.draw();
        this.setWorld();
        this.run();
        this.spawnEndboss();
    };


    /** Stops the game and clears all intervals, stops music and triggers game end. */
    stopGame() {
        this.stopMusic();
        this.charachter.stoppableInterval.forEach(i => this.stoppableInterval.push(i));
        this.stopInterval();
        this.level = null;
        gameEnd(); // assumes gameEnd is a global function
    };


    /** Clears all stored intervals to stop the game loops and animations. */
    stopInterval() {
        this.stoppableInterval.forEach(i => clearInterval(i));
    };


    /**
     * Starts the main game loop that checks collisions, handles attacks, and game state.
     */
    run() {
        let runInterval = setInterval(() => {
            const endboss = this.level.enemies.find(enemy => enemy instanceof Endboss);
            this.checkCollisions();
            this.throwAmmo();
            this.meleeAttackA();
            this.characterDead();
            this.endbossDead(endboss);
        }, 100);
        this.stoppableInterval.push(runInterval);
    };


    /** Checks if character fell off the map and stops game if true. */
    characterDead() {
        if (this.charachter.y <= -200) {
            this.stopMusic();
            this.playSounds("./audio/gameover.wav", 0.2);
            this.stopGame();
        }
    };


    /**
     * Checks if the endboss is dead and stops game with win state.
     * @param {Enemy} endboss - The endboss instance.
     */
    endbossDead(endboss) {
        if (endboss && endboss.y <= -400) {
            this.stopMusic();
            this.playSounds("./audio/win.wav", 1);
            this.stopGame();
        }
    };


    /** Spawns the endboss animation and sound when the character reaches a certain x position. */
    spawnEndboss() {
        let spawnEndboss = setInterval(() => {
            if (this.charachter.x > 4800) {
                let endboss = this.level.enemies.find(enemy => enemy instanceof Endboss);
                if (endboss) {
                    endboss.animate();
                    this.playSounds("./audio/endboss-intro.ogg", 0.5);
                    clearInterval(spawnEndboss);
                }
            }
        }, 500);
        this.stoppableInterval.push(spawnEndboss);
    };


    /**
    * Checks all types of collisions in the game:
    * - Bubble or melee hit against enemies
    * - Thunder damage from specific enemies
    * - Coin pickups
    * - Poison bottle pickups
    */
    checkCollisions() {
        this.checkEnemyHitWithBubble();
        this.checkThunderhit();
        this.checkCoin();
        this.checkBottle();
    };


    /**
     * Checks if the character collides with any poison bottles.
     * If so, collects the bottle and plays a sound.
     */
    checkBottle() {
        this.level.poisonBottle.forEach(bottle => {
            if (this.charachter.isColliding(bottle)) {
                this.collectBottle(bottle);
                this.playSounds("./audio/bottleCollect.wav", 0.1);
            }
        });
    };


    /**
     * Checks if the character collides with any coins.
     * If so, collects the coin and plays a sound.
     */
    checkCoin() {
        this.level.coins.forEach(coin => {
            if (this.charachter.isColliding(coin)) {
                this.collectCoin(coin);
                this.playSounds("./audio/collect.wav", 0.1);
            }
        });
    };


    /**
     * Checks if the character collides with any enemies.
     * If the enemy is of type thunderstrike, the character receives thunder damage.
     * Otherwise, standard hit damage is applied.
     */
    checkThunderhit() {
        this.level.enemies.forEach(enemy => {
            if (this.charachter.isColliding(enemy)) {
                if (enemy.thunderstrike) {
                    this.charachter.thunderHit();
                    this.playSounds("./audio/electric.wav", 0.1);
                } else {
                    this.charachter.hit();
                }
            }
        });
    };


    /** Checks if enemies are hit by ammo or melee attacks and updates their state accordingly. */
    checkEnemyHitWithBubble() {
        this.level.enemies.forEach(enemy => {
            const hitAmmo = this.ammo.find(a => enemy.isColliding(a));
            const meleehit = this.slash.find(s => enemy.isColliding(s));
            const endboss = this.level.enemies.find(e => e instanceof Endboss);
            if (enemy === endboss && hitAmmo) {
                this.endbossHit(enemy);
            } else if ((hitAmmo || meleehit) && enemy !== endboss) {
                this.ammo.splice(this.ammo.indexOf(hitAmmo), 1);
                enemy.hp = 0;
                enemy.currentImageOnlyOneAnimation = 0;
            }
        });
    };


    /**
     * Handles endboss being hit by ammo.
     * @param {Enemy} enemy - The endboss enemy instance.
     */
    endbossHit(enemy) {
        this.playSounds("./audio/endboss_hurt.wav", 0.3);
        this.ammo.splice(this.ammo.indexOf(this.ammo.find(a => enemy.isColliding(a))), 1);
        enemy.currentImageOnlyOneAnimation = 0;
        enemy.lastHit = Date.now();
        enemy.isHurt();
        if (this.poisionStatus.percentage !== 0) {
            enemy.hp -= 150;
        } else {
            enemy.hp -= 100;
        }
    };


    /**
     * Collects a coin and updates the coin status bar.
     * @param {Object} coin - The coin object collected.
     */
    collectCoin(coin) {
        this.coinStatus.percentage += 20;
        this.coinStatus.setPercentage(this.coinStatus.percentage);
        this.level.coins.splice(this.level.coins.indexOf(coin), 1);
    };


    /**
     * Collects a poison bottle and updates the poison status bar.
     * @param {Object} bottle - The poison bottle object collected.
     */
    collectBottle(bottle) {
        this.poisionStatus.percentage += 25;
        this.poisionStatus.setPercentage(this.poisionStatus.percentage);
        this.level.poisonBottle.splice(this.level.poisonBottle.indexOf(bottle), 1);
    };


    /**
     * Plays a sound effect if music is not muted.
     * @param {string} url - Path to the audio file.
     * @param {number} volume - Volume level from 0 to 1.
     */
    playSounds(url, volume) {
        if (!this.musicMute) {
            let newSound = new Audio(url);
            newSound.volume = volume;
            newSound.play();
        }
    };


    /**
     * Prepares background music with the given volume.
     * @param {number} volume - Volume level from 0 to 1.
     */
    playBackgroundMusic(volume) {
        this.music = new Audio("./audio/music.mp3");
        this.music.volume = volume;
        this.music.loop = true;
    };


    /** Stops and resets the background music. */
    stopMusic() {
        if (this.music) {
            this.music.pause();
            this.music.currentTime = 0;
        }
    };


    /** Starts the background music if not muted. */
    startMusic() {
        if (!this.musicMute) {
            this.playBackgroundMusic(0.1);
            this.music.play();
        }
    };


    /** Handles ammo throwing when space key is pressed and conditions are met. */
    throwAmmo() {
        if (this.canThrowAmmo()) {
            this.charachter.attackTime = true;
            this.handleAmmoCreation();
            this.resetAttackTimeAfterDelay();
            this.clearAmmoAfterDelay();
        }
    }

    /** Checks whether the character is allowed to throw ammo. */
    canThrowAmmo() {
        return (
            this.keyboard.SPACE &&
            !this.charachter.isHurt() &&
            this.ammo.length === 0 &&
            !this.charachter.isDead() &&
            !this.charachter.attackTime
        );
    };


    /** Creates the appropriate ammo type and updates character/poison status. */
    handleAmmoCreation() {
        setTimeout(() => {
            let bubble;
            if (this.poisionStatus.percentage !== 0) {
                bubble = new PoisonAmmo(this.charachter.x, this.charachter.y, this.charachter.otherDirection);
                this.poisionStatus.percentage -= 25;
                this.poisionStatus.setPercentage(this.poisionStatus.percentage);
            } else {
                bubble = new Ammo(this.charachter.x, this.charachter.y, this.charachter.otherDirection);
            }

            this.ammo.push(bubble);
            this.charachter.currentImageOnlyOneAnimation = 0;
            this.playSounds("./audio/shoot.wav", 0.5);
        }, 350);
    };


    /** Resets the attackTime timer after a short delay. */
    resetAttackTimeAfterDelay() {
        setTimeout(() => {
            this.charachter.attackTime = false;
        }, 350);
    };


    /** Clears the ammo after a timeout. */
    clearAmmoAfterDelay() {
        setTimeout(() => {
            this.ammo = [];
        }, 1300);
    };


    /** Handles melee attack when 'D' key is pressed and conditions are met. */
    meleeAttackA() {
        if (this.keyboard.D && this.slash.length === 0 && !this.charachter.isHurt() && !this.charachter.isDead() && !this.charachter.meleeAttackTime) {
            this.charachter.meleeAttackTime = true;
            let slashAttackInterval = setInterval(() => {
                let slashAttack = new Slash(this.charachter.x, this.charachter.y, this.charachter.otherDirection);
                this.slash.push(slashAttack);
            }, 50);
            this.playSounds("./audio/slash-short-short.wav", 0.5);
            this.clearMeleeAttackAnimation(slashAttackInterval);
        }
    };


    /**
     * Clears melee attack animation intervals and resets attack states.
     * @param {number} slashAttackInterval - Interval ID for slash attack animation.
     */
    clearMeleeAttackAnimation(slashAttackInterval) {
        let deleteSlash = setInterval(() => {
            this.slash.splice(0, 1);
        }, 70);
        this.charachter.currentImageOnlyOneAnimation = 0;

        setTimeout(() => {
            clearInterval(slashAttackInterval);
            clearInterval(deleteSlash);
            this.charachter.meleeAttackTime = false;
            this.slash = [];
        }, 850);
    };


    /** Sets the world property of the character to this world instance. */
    setWorld() {
        this.charachter.world = this;
    };


    /** Main draw loop: clears canvas, draws all objects with camera translation, and requests next animation frame. */
    draw() {
        if (!this.level) return;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.backgrounds);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.poisonBottle);
        this.addObjectsToMap(this.ammo);
        this.addObjectsToMap(this.slash);
        this.addToMap(this.charachter);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.light);
        this.addObjectsToMap(this.level.barricade);
        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.hpStatus);
        this.addToMap(this.coinStatus);
        this.addToMap(this.poisionStatus);
        requestAnimationFrame(() => this.draw());
    };


    /**
     * Adds multiple drawable objects to the map.
     * @param {DrawableObject[]} objects - Array of drawable objects.
     */
    addObjectsToMap(objects) {
        objects.forEach(o => this.addToMap(o));
    };


    /**
    * Draws an object on the canvas. If the object faces the other direction,
    * its image is flipped horizontally.
    * 
    * @param {Object} object - The object to be drawn, expected to have the methods `draw`, `drawFrame`, and `drawFrameRed`,
    *                          and the properties `otherDirection` (boolean) and `width` (number).
    */
    addToMap(object) {
        if (object.otherDirection) {
            this.flipImage(object);
        }
        object.draw(this.ctx);
        if (object.otherDirection) {
            this.flipImageBack(object);
        }
    };


    /**
     * Flips the image of an object horizontally by transforming the canvas context
     * and inverting the object's x position.
     * 
     * @param {Object} object - The object to flip, expected to have the properties `width` (number) and `x` (number).
     */
    flipImage(object) {
        this.ctx.save();
        this.ctx.translate(object.width, 0);
        this.ctx.scale(-1, 1);
        object.x = object.x * -1;
    };


    /**
     * Restores the canvas transformation and reverses the x position inversion of the object.
     * 
     * @param {Object} object - The object whose x position should be reset.
     */
    flipImageBack(object) {
        this.ctx.restore();
        object.x = object.x * -1;
    };
}
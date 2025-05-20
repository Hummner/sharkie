class Level {
    enemies;
    backgrounds;
    light;
    coins;
    level_end_x = 3600;

    constructor(enemies, light, backgrounds, coins, poisonBottle) {
        this.enemies = enemies;
        this.light = light;
        this.backgrounds = backgrounds;
        this.coins = coins;
        this.poisonBottle = poisonBottle;

    }

}
class Level {
    enemies;
    backgrounds;
    light;
    coins;
    barricade;
    level_end_x = 5500;

    constructor(enemies, light, backgrounds, coins, poisonBottle, barricade) {
        this.enemies = enemies;
        this.light = light;
        this.backgrounds = backgrounds;
        this.coins = coins;
        this.poisonBottle = poisonBottle;
        this.barricade = barricade;

    }

}
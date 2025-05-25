/**
 * Represents a level in the game, containing all entities and objects needed for gameplay.
 */
class Level {
    /** @type {MovableObject[]} Enemies present in the level */
    enemies;

    /** @type {MovableObject[]} Background layers of the level */
    backgrounds;

    /** @type {MovableObject[]} Light elements in the level */
    light;

    /** @type {Coin[]} Collectible coins in the level */
    coins;

    /** @type {MovableObject[]} Poison bottles in the level */
    poisonBottle;

    /** @type {MovableObject[]} Barricades that block the player's path */
    barricade;

    /** @type {number} X-coordinate that marks the end of the level */
    level_end_x = 5300;

    /**
     * Creates a new level instance.
     * 
     * @param {MovableObject[]} enemies - Array of enemy objects.
     * @param {MovableObject[]} light - Array of light-related objects.
     * @param {MovableObject[]} backgrounds - Array of background layers.
     * @param {Coin[]} coins - Array of coin objects.
     * @param {MovableObject[]} poisonBottle - Array of poison bottle objects.
     * @param {MovableObject[]} barricade - Array of barricade objects.
     */
    constructor(enemies, light, backgrounds, coins, poisonBottle, barricade) {
        this.enemies = enemies;
        this.light = light;
        this.backgrounds = backgrounds;
        this.coins = coins;
        this.poisonBottle = poisonBottle;
        this.barricade = barricade;
    }
}
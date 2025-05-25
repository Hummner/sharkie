/**
 * Represents a level in the game, containing all entities and objects needed for gameplay.
 */
class Level {
    /**
    * Enemies present in the level.
    * @type {MovableObject[]}
    */
    enemies;

    /**
     * Background layers of the level.
     * @type {MovableObject[]}
     */
    backgrounds;

    /**
     * Light elements in the level.
     * @type {MovableObject[]}
     */
    light;

    /**
     * Collectible coins in the level.
     * @type {Coin[]}
     */
    coins;

    /**
     * Poison bottles in the level.
     * @type {MovableObject[]}
     */
    poisonBottle;

    /**
     * Barricades that block the player's path.
     * @type {MovableObject[]}
     */
    barricade;

    /**
     * X-coordinate that marks the end of the level.
     * @type {number}
     */
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
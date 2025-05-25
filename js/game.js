let canvas;
let world;
let keyboard = new Keyboard();
let button;
let musicMute = getMusicSetup();

/** Initializes the game, creates the world and starts the level. */
function init() {
    canvas = document.getElementById("canvas");
    startLevel();
    world = new World(canvas, keyboard, musicMute);
}

/** Sets keyboard keys to true when pressed. */
window.addEventListener("keydown", (key) => {
    if (key.keyCode === 39) keyboard.RIGHT = true;
    if (key.keyCode === 37) keyboard.LEFT = true;
    if (key.keyCode === 38) keyboard.UP = true;
    if (key.keyCode === 40) keyboard.DOWN = true;
    if (key.keyCode === 32) keyboard.SPACE = true;
    if (key.keyCode === 68) keyboard.D = true;
});

/** Sets keyboard keys to false when released. */
window.addEventListener("keyup", (key) => {
    if (key.keyCode === 39) keyboard.RIGHT = false;
    if (key.keyCode === 37) keyboard.LEFT = false;
    if (key.keyCode === 38) keyboard.UP = false;
    if (key.keyCode === 40) keyboard.DOWN = false;
    if (key.keyCode === 32) keyboard.SPACE = false;
    if (key.keyCode === 68) keyboard.D = false;
});

/** Adds touch event listeners to mobile control buttons. */
function mobileTouchsBtn() {
    document.getElementById("btnLeft").addEventListener("touchstart", (e) => {
        e.preventDefault(); keyboard.LEFT = true;
    });
    document.getElementById("btnLeft").addEventListener("touchend", (e) => {
        e.preventDefault(); keyboard.LEFT = false;
    });

    document.getElementById("btnRight").addEventListener("touchstart", (e) => {
        e.preventDefault(); keyboard.RIGHT = true;
    });
    document.getElementById("btnRight").addEventListener("touchend", (e) => {
        e.preventDefault(); keyboard.RIGHT = false;
    });

    document.getElementById("btnUp").addEventListener("touchstart", (e) => {
        e.preventDefault(); keyboard.UP = true;
    });
    document.getElementById("btnUp").addEventListener("touchend", (e) => {
        e.preventDefault(); keyboard.UP = false;
    });

    document.getElementById("btnDown").addEventListener("touchstart", (e) => {
        e.preventDefault(); keyboard.DOWN = true;
    });
    document.getElementById("btnDown").addEventListener("touchend", (e) => {
        e.preventDefault(); keyboard.DOWN = false;
    });

    document.getElementById("btnAttack").addEventListener("touchstart", (e) => {
        e.preventDefault(); keyboard.D = true;
    });
    document.getElementById("btnAttack").addEventListener("touchend", (e) => {
        e.preventDefault(); keyboard.D = false;
    });

    document.getElementById("btnShoot").addEventListener("touchstart", (e) => {
        e.preventDefault(); keyboard.SPACE = true;
    });
    document.getElementById("btnShoot").addEventListener("touchend", (e) => {
        e.preventDefault(); keyboard.SPACE = false;
    });
}

/** Stops the current game session and clears the world object. */
function stopTheGame() {
    if (world) {
        world.stopGame();
        level1 = null;
        world = null;
    }
}

/** Displays the end screen based on game outcome. */
function gameEnd() {
    let endScreen = document.getElementById("end_screen");
    let endText = document.getElementById("end_text");
    if (world.charachter.hp <= 0) {
        endScreen.style.background = "url('./img/6.Botones/Tittles/Game Over/Recurso 12.png')";
        endText.innerHTML = "You are dead! Try it again!";
    } else {
        endScreen.style.background = "url('./img/6.Botones/Tittles/You win/Mesa de trabajo 1.png')";
        endText.innerHTML = "";
    }
    endScreen.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    endScreen.style.backgroundSize = "cover";
    endScreen.style.backgroundRepeat = "no-repeat";
    endScreen.style.backgroundPosition = "top";
    endScreen.classList.remove("d-none");
    document.getElementById("button_desktop").classList.add("d-none");
}

/** Restarts the game from the beginning. */
function restartGame() {
    startGame();
}

/** Starts a new game session. */
function startGame() {
    init();
    getMusicSetup();
    world.sound.startMusic();
    loadCanvas();
}

/** Displays the game canvas and hides menu/end screens. */
function loadCanvas() {
    document.getElementById("game_canvas").classList.remove("d-none");
    document.getElementById("menu_section").classList.add("d-none");
    document.getElementById("end_screen").classList.add("d-none");
    if (!isMobileOrTablet()) {
        document.getElementById("button_desktop").classList.remove("d-none");
    }
}

/** Enables fullscreen mode for the canvas. */
function fullscreen() {
    let canvas = document.getElementById("game_canvas");
    canvas.requestFullscreen();
}

/** Returns to the main menu from the introduction or game screen. */
function backToMain() {
    document.getElementById("introduction_section").classList.add("d-none");
    document.getElementById("menu_section").classList.remove("d-none");
    document.getElementById("game_canvas").classList.add("d-none");
    document.getElementById("legal_notice").classList.add("d-none");
    document.getElementById("body").removeAttribute("style", "overflow-y: auto");
    stopTheGame();
}

/** Navigates to the introduction section. */
function toIntroduction() {
    document.getElementById("menu_section").classList.add("d-none");
    document.getElementById("introduction_section").classList.remove("d-none");
    document.getElementById("body").setAttribute("style", "overflow-y: auto");
}

/** Navigates to the legal notice section. */
function toLegalNotice() {
    document.getElementById("menu_section").classList.add("d-none");
    document.getElementById("legal_notice").classList.remove("d-none");
    document.getElementById("body").setAttribute("style", "overflow-y: auto");
}

/** Toggles game sound on and off and stores the setting in localStorage. */
function muteSound() {
    if (!musicMute) {
        world.sound.stopMusic();
        musicMute = true;
        world.musicMute = true;
        saveMusicSetup(true);
    } else {
        musicMute = false;
        world.musicMute = false;
        world.sound.startMusic();
        saveMusicSetup(false);
    }
}

/**
 * Gets the stored music mute setting from localStorage.
 * @returns {boolean} Whether the music is muted.
 */
function getMusicSetup() {
    let m = localStorage.getItem("musicMute");
    if (m === "true") return true;
    if (m === "false") return false;
}

/**
 * Saves the music mute setting to localStorage.
 * @param {boolean} setup - Whether the music should be muted.
 */
function saveMusicSetup(setup) {
    localStorage.setItem("musicMute", setup);
}

/** Checks if device is in portrait mode and shows a warning if so. */
function checkOrientation() {
    const minWidth = 720;
    const warning = document.getElementById('rotate-warning');

    if (window.innerWidth <= minWidth && window.innerHeight > window.innerWidth) {
        warning.style.display = 'block';
    } else {
        warning.style.display = 'none';
    }
}

window.addEventListener('load', checkOrientation);
window.addEventListener('resize', checkOrientation);
window.addEventListener('orientationchange', checkOrientation);

/**
 * Detects whether the device is a mobile or tablet.
 * @returns {boolean} True if it's a mobile or tablet device.
 */
function isMobileOrTablet() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    return /android|iphone|ipad|ipod|windows phone/i.test(userAgent.toLowerCase());
}

/** Executes logic specific to mobile or tablet devices. */
function buttonsForMobile() {
    mobileTouchsBtn();
    document.getElementById("button_desktop").classList.add("d-none");
    document.getElementById("mobile_buttons").classList.remove("d-none");
    document.getElementById("mobile_mainMenu").classList.remove("d-none");
}

window.addEventListener('load', () => {
    if (isMobileOrTablet()) {
        buttonsForMobile();
    }
});



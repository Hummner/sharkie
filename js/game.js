let canvas;
let world;
let keyboard = new Keyboard();
let button;
let musicMute = getMusicSetup();


function init() {
    canvas = document.getElementById("canvas");
    startLevel();
    world = new World(canvas, keyboard, musicMute);
}

window.addEventListener("keydown", (key) => {
    if (key.keyCode === 39) {
        keyboard.RIGHT = true;
    }

    if (key.keyCode === 37) {
        keyboard.LEFT = true;
    }

    if (key.keyCode === 38) {
        keyboard.UP = true;
    }

    if (key.keyCode === 40) {
        keyboard.DOWN = true;
    }

    if (key.keyCode === 32) {
        keyboard.SPACE = true;
    }

    if (key.keyCode === 68) {
        keyboard.D = true;

    }
});

window.addEventListener("keyup", (key) => {

    if (key.keyCode === 39) {
        keyboard.RIGHT = false;
    }

    if (key.keyCode === 37) {
        keyboard.LEFT = false;
    }

    if (key.keyCode === 38) {
        keyboard.UP = false;
    }

    if (key.keyCode === 40) {
        keyboard.DOWN = false;
    }

    if (key.keyCode === 32) {
        keyboard.SPACE = false;
    }

    if (key.keyCode === 68) {
        keyboard.D = false;
    }


});

function mobileTouchsBtn() {

    document.getElementById("btnLeft").addEventListener("touchstart", (e) => {
        e.preventDefault();
        keyboard.LEFT = true;
    })

    document.getElementById("btnLeft").addEventListener("touchend", (e) => {
        e.preventDefault();
        keyboard.LEFT = false;
    })

    document.getElementById("btnRight").addEventListener("touchstart", (e) => {
        e.preventDefault();
        keyboard.RIGHT = true;
    })

    document.getElementById("btnRight").addEventListener("touchend", (e) => {
        e.preventDefault();
        keyboard.RIGHT = false;
    })

    document.getElementById("btnUp").addEventListener("touchstart", (e) => {
        e.preventDefault();
        keyboard.UP = true;
    })

    document.getElementById("btnUp").addEventListener("touchend", (e) => {
        e.preventDefault();
        keyboard.UP = false;
    })

    document.getElementById("btnDown").addEventListener("touchstart", (e) => {
        e.preventDefault();
        keyboard.DOWN = true;
    })

    document.getElementById("btnDown").addEventListener("touchend", (e) => {
        e.preventDefault();
        keyboard.DOWN = false;
    })

    document.getElementById("btnAttack").addEventListener("touchstart", (e) => {
        e.preventDefault();
        keyboard.D = true;
    })

    document.getElementById("btnAttack").addEventListener("touchend", (e) => {
        e.preventDefault();
        keyboard.D = false;
    })

    document.getElementById("btnShoot").addEventListener("touchstart", (e) => {
        e.preventDefault();
        keyboard.SPACE = true;
    })

    document.getElementById("btnShoot").addEventListener("touchend", (e) => {
        e.preventDefault();
        keyboard.SPACE = false;
    })



}




function stopTheGame() {
    if (world) {

        world.stopGame();
        level1 = null;
        world = null;

    }
}

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
    endScreen.style.backgroundColor = "rgba(0, 0, 0, 0.5);"
    endScreen.style.backgroundSize = "cover";
    endScreen.style.backgroundRepeat = "no-repeat";
    endScreen.style.backgroundPosition = "top";
    endScreen.classList.remove("d-none")
    document.getElementById("button_desktop").classList.add("d-none");
}

function restartGame() {
    startGame();
}



function startGame() {
    init();
    getMusicSetup();
    world.startMusic();
    loadCanvas();
}

function loadCanvas() {
    document.getElementById("game_canvas").classList.remove("d-none");
    document.getElementById("menu_section").classList.add("d-none");
    document.getElementById("end_screen").classList.add("d-none");
    // document.getElementById("button_desktop").classList.remove("d-none");

}

function fullscreen() {
    let canvas = document.getElementById("canvas");
    canvas.requestFullscreen();

}

function backToMain() {
    document.getElementById("introduction_section").classList.add("d-none");
    document.getElementById("menu_section").classList.remove("d-none");
    document.getElementById("game_canvas").classList.add("d-none");
    document.getElementById("legal_notice").classList.add("d-none");
    document.getElementById("body").removeAttribute("style", "overflow-y: auto");
    stopTheGame();
}

function toIntroduction() {
    document.getElementById("menu_section").classList.add("d-none");
    document.getElementById("introduction_section").classList.remove("d-none");
    document.getElementById("body").setAttribute("style", "overflow-y: auto");

}

function toLegalNotice() {
    document.getElementById("menu_section").classList.add("d-none");
    document.getElementById("legal_notice").classList.remove("d-none");
    document.getElementById("body").setAttribute("style", "overflow-y: auto");
}

function muteSound() {
    if (!musicMute) {
        world.stopMusic();
        musicMute = true;
        world.musicMute = true;
        saveMusicSetup(true);
    } else {

        musicMute = false;
        world.musicMute = false;
        world.startMusic();
        saveMusicSetup(false);
    }

}

function getMusicSetup() {
    let m = localStorage.getItem("musicMute");
    if (m === "true") return true
    if (m === "false") return false

}

function saveMusicSetup(setup) {
    localStorage.setItem("musicMute", setup);

}


function checkOrientation() {
    const minWidth = 720; // Mindestbreite, ab der Querformat nötig ist
    const warning = document.getElementById('rotate-warning');

    if (window.innerWidth <= minWidth && window.innerHeight > window.innerWidth) {
        // Gerät ist im Hochformat UND kleiner als Mindestbreite
        warning.style.display = 'block';
    } else {
        warning.style.display = 'none';
    }
}

// Beim Laden und beim Drehen prüfen
window.addEventListener('load', checkOrientation);
window.addEventListener('resize', checkOrientation);
window.addEventListener('orientationchange', checkOrientation);



function isMobileOrTablet() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Check for Android, iPhone, iPad, etc.
    return /android|iphone|ipad|ipod|windows phone/i.test(userAgent.toLowerCase());
}

function doSomethingForMobile() {
    alert("This is a mobile or tablet device!");
    mobileTouchsBtn();
    document.getElementById("button_desktop").classList.add("d-none");
    document.getElementById("mobile_buttons").classList.remove("d-none");
    // Hier deine Funktion einfügen
}

// Ausführen beim Laden
window.addEventListener('load', () => {
    if (isMobileOrTablet()) {
        doSomethingForMobile();
    }
}
)

function hasOverflow(el) {
    return el.scrollWidth > el.clientWidth || el.scrollHeight > el.clientHeight;
}


document.querySelectorAll('*').forEach(el => {
    if (hasOverflow(el)) {
        console.log('Overflow detected in:', el);
    }
});

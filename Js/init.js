// Import dependencies
import { createElementClass, cssLoader, seedConfig } from './helpers.js';
import { cssFiles, config } from './var-dump.js';

// Import components
import startIntro from './intro.js';
import startMenu from './menu.js';
import startGame from './game.js';

cssLoader(cssFiles)
seedConfig(config)

// Create Main Screen components after the DOM content has been loaded.
let topScreen = document.querySelector('#app').appendChild(createElementClass("section", "mainScreen-top"))
topScreen.style.width = `${config.screen.top.width}px`
topScreen.style.height = `${config.screen.top.height}px`

let bottomScreen = document.querySelector('#app').appendChild(createElementClass("section", "mainScreen-bottom"))
bottomScreen.style.width = `${config.screen.bottom.width}px`
bottomScreen.style.height = `${config.screen.bottom.height}px`

setInterval(() => {
    switch(config.checkpoints[config.checkpoints.length-1]) {
        case 'intro':
            if(!topScreen.classList.contains('intro') && !config.activecomponent) startIntro('intro', topScreen, bottomScreen)
        break;
        case 'menu':
            if(!topScreen.classList.contains('menu') && !config.activecomponent) startMenu('menu', topScreen, bottomScreen)
        break;
        case 'game':
            if(!topScreen.classList.contains('game') && !config.activecomponent) startGame('game', topScreen, bottomScreen)
        break;
    }
}, config.cleanupInt);
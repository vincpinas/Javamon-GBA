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
    let configLocale = Array.from(config.checkpoints)
    switch(configLocale[configLocale.length-1]) {
        case 'intro':
            !topScreen.classList.contains('intro') ?
                startIntro('intro')
            : null
        break;
        case 'menu':
            !topScreen.classList.contains('menu') ?
                startMenu('menu')
            : null
        break;
        case 'game':
            !topScreen.classList.contains('game') ?
                startGame('game')
            : null
        break;
    }
}, 100)

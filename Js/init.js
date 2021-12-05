// Import dependencies
import { createElementClass, cssLoader, seedConfig } from './helpers.js';
import { cssFiles, config } from './var-dump.js';

// Import components
import startIntro from './intro.js';


cssLoader(cssFiles)
seedConfig(config)

// Create Main Screen components after the DOM content has been loaded.
document.querySelector('#app').appendChild(createElementClass("section", "mainScreen-top"))
document.querySelector('#app').appendChild(createElementClass("section", "mainScreen-bottom"))

startIntro();
import { createSceneFade } from './helpers.js';
import { config } from './var-dump.js';

const startGame = (componentName, canvasTop, canvasBottom) => {
    config.activecomponent = true

    createSceneFade(canvasTop)
}

export default startGame;
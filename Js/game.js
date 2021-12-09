import { createSceneFade, createElementId } from './helpers.js';
import { config } from './var-dump.js';

const startGame = (componentName, canvasTop, canvasBottom) => {
    config.activecomponent = true

    createSceneFade(canvasTop)
    canvasTop.classList.add(componentName)
    canvasBottom.classList.add(componentName)

    let gameTop = createElementId('canvas', `gameCanvasTop`);
    let gameBottom = createElementId('canvas', `gameCanvasBottom`)

    canvasTop.appendChild(gameTop);
    canvasBottom.appendChild(gameBottom);
}

export default startGame;
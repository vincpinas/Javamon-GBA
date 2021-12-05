import { createElementClass, destroySceneNatural } from "./helpers.js"
import { config } from "./var-dump.js"

const startMenu = () => {
    let canvasTop, 
        canvasBottom, 
        scenes

    canvasTop = document.querySelector('.mainScreen-top')
    canvasBottom = document.querySelector('.mainScreen-bottom')

    canvasTop.classList.add('menu')
    canvasBottom.classList.add('menu')

    // An array of scenes used to dynamically create and destroy scenes when necessary.
    scenes = [
        { name: 'mainMenu', duration: null }
    ];

    // Functionality to actually create the scene elements and destroy them after the element has played for it's duration.
    scenes.map(scene => {
        let tmp = createElementClass('div', `scene ${scene.name}`);
        canvasTop.appendChild(tmp)

        destroySceneNatural(canvasTop, scene, tmp)
    });

    // Clean up before loading in any new components.
    setInterval(() => {
        canvasTop.childNodes.length === 0 ? 
            (config.checkpoints.push('game'),
             canvasTop.classList.remove('menu'), canvasBottom.classList.remove('menu'))
        : null
    }, 100)
}

export default startMenu;
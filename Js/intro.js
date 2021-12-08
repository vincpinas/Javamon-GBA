import { createElementClass, destroySceneNatural, destroyAllScenes } from "./helpers.js"
import { config } from "./var-dump.js"

const startIntro = (componentName) => {
    let canvasTop, 
        canvasBottom, 
        scenes, 
        keyEvent

    canvasTop = document.querySelector('.mainScreen-top')
    canvasBottom = document.querySelector('.mainScreen-bottom')

    canvasTop.classList.add(componentName)
    canvasBottom.classList.add(componentName)

    // An array of scenes used to dynamically create and destroy scenes when necessary.
    scenes = [
        { name: 'scene1', duration: 3.2 }, 
        { name: 'scene2', duration: 2.5 }, 
        { name: 'endScene', duration: null }
    ];

    // Functionality to actually create the scene elements and destroy them after the element has played for it's duration.
    scenes.map(scene => {
        let tmp = createElementClass('div', `scene ${scene.name}`);
        canvasTop.appendChild(tmp)

        destroySceneNatural(canvasTop, scene, tmp)
    });

    // Destroys all scenes to in a way "skip" the intro.
    keyEvent = (e) => {
        (e.key.toLowerCase() == config.controls.accept || e.key.toLowerCase() == config.controls.cancel) && canvasTop.classList.contains(componentName) ?
            (destroyAllScenes(canvasTop), destroyAllScenes(canvasBottom))
        : null
    }
    canvasTop.childNodes.length > 0 ?
        document.addEventListener('keypress', e => keyEvent(e))
    : null

    // Clean up before loading in any new components.
    setInterval(() => {
        canvasTop.childNodes.length === 0 && canvasTop.classList.contains(componentName) ? 
            (
                document.removeEventListener('keypress', e => keyEvent(e)), config.checkpoints.add('menu'),
                canvasTop.classList.remove(componentName), canvasBottom.classList.remove(componentName)
             )
        : null
    }, 100)
}

export default startIntro;
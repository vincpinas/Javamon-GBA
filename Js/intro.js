import { createElementClass, destroySceneNatural, destroyAllScenes } from "./helpers.js"
import { config } from "./var-dump.js"

const startIntro = () => {
    const canvas = document.querySelector('.mainScreen-top')

    // An array of scenes used to dynamically create and destroy scenes when necessary.
    const scenes = [
        { name: 'scene1', duration: 3.2 }, 
        { name: 'scene2', duration: 2.5 }, 
        { name: 'endScene', duration: null }
    ];

    // Functionality to actually create the scene elements and destroy them after the element has played for it's duration.
    scenes.map(scene => {
        let tmp = createElementClass('div', `scene ${scene.name}`);
        canvas.appendChild(tmp)

        destroySceneNatural(canvas, scene, tmp)
    });

    // Destroys all scenes to in a way "skip" the intro.
    canvas.childNodes.length > 0 ?
        document.addEventListener('keypress', e => {
            (e.key.toLowerCase() == config.controls.accept || e.key.toLowerCase() == config.controls.cancel) ?
                destroyAllScenes(canvas)
            : null
        })
    : null
}

export default startIntro;
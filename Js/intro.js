import { createElementClass, destroySceneNatural, destroyAllScenes } from "./helpers.js"
import { config } from "./var-dump.js"

const startIntro = () => {
    const canvas = document.querySelector('.mainScreen-top')

    // Create all scene elements
    const scenes = [
        { name: 'scene1', duration: 3.2 }, 
        { name: 'scene2', duration: 2.5 }, 
        { name: 'endScene', duration: null }
    ];

    scenes.map(scene => {
        let tmp = createElementClass('div', `scene ${scene.name}`);
        canvas.appendChild(tmp)

        destroySceneNatural(canvas, scene, tmp)
    });

    canvas.childNodes.length > 0 ?
        document.addEventListener('keypress', e => {
            (e.key.toLowerCase() == config.controls.accept || e.key.toLowerCase() == config.controls.cancel) ?
                destroyAllScenes(canvas)
            : null
        })
    : null
}

export default startIntro;
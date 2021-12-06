import { createElementClass, destroySceneNatural } from "./helpers.js"
import { config } from "./var-dump.js"

const startMenu = () => {
    let canvasTop, 
        canvasBottom, 
        menuItems

    canvasTop = document.querySelector('.mainScreen-top')
    canvasBottom = document.querySelector('.mainScreen-bottom')

    canvasTop.classList.add('menu')
    canvasBottom.classList.add('menu')

    canvasTop.appendChild(createElementClass('div', `scene mainMenu`))

    menuItems = [
        { name: 'continue' },
        { name: 'new game' },
        { name: 'mystery gift' },
        { name: 'settings' }
    ];

    menuItems.map(item => {
        let wrapper = createElementClass('span', `menuButton-wrapper menu${item.name}`)
        let outer = createElementClass('span', `menuButton-outer`)
        let innerBorder = createElementClass('span', `menuButton-innerborder`)
        let menuButton = createElementClass('span', `menuButton`)

        wrapper.appendChild(outer)
        outer.appendChild(innerBorder)
        innerBorder.appendChild(menuButton)

        menuButton.innerHTML = item.name

        document.querySelector('.mainMenu').appendChild(wrapper)
    });

    // Clean up before loading in any new components.
    setInterval(() => {
        canvasTop.childNodes.length === 0 ? 
            (config.checkpoints.add('game'),
             canvasTop.classList.remove('menu'), canvasBottom.classList.add('menu'))
        : null
    }, 100)
}

export default startMenu;
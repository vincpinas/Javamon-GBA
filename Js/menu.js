import { createElementClass, destroyAllScenes, destroySceneNatural } from "./helpers.js"
import { config } from "./var-dump.js"

const startMenu = (componentName) => {
    let canvasTop, 
        canvasBottom, 
        menuItems,
        keyEvent,
        keyPress,
        selectedButton

    canvasTop = document.querySelector('.mainScreen-top');
    canvasBottom = document.querySelector('.mainScreen-bottom');

    canvasTop.classList.add(componentName);
    canvasBottom.classList.add(componentName);

    canvasTop.appendChild(createElementClass('div', `scene mainMenu`));

    selectedButton = 0;

    menuItems = [
        { name: 'new_game', title: 'new game', component: 'game'},
        { name: 'mystery_gift', title: 'mystery gift', component: 'gift'},
        { name: 'settings', title: 'settings', component: 'settings'}
    ];

    menuItems.map(item => {
        let wrapper = createElementClass('span', `menuButton-wrapper menu${item.name}`)
        let outer = createElementClass('span', `menuButton-outer`)
        let innerBorder = createElementClass('span', `menuButton-innerborder`)
        let menuButton = createElementClass('span', `menuButton`)

        wrapper.appendChild(outer)
        outer.appendChild(innerBorder)
        innerBorder.appendChild(menuButton)

        menuButton.innerHTML = item.title

        document.querySelector('.mainMenu').appendChild(wrapper)

        let current = document.querySelector(`.menu${item.name}`)
        let selected = document.querySelector(`.menu${menuItems[selectedButton].name}`)

        if(selected === current) current.classList.add('menuselected')
        else current.classList.remove('menuselected')
    });

    keyEvent = (e) => {
        if(e.key.toLowerCase() === config.controls.up && selectedButton > 0) selectedButton -= 1
        else if(e.key.toLowerCase() === config.controls.down && selectedButton < (menuItems.length-1)) selectedButton += 1

        if(canvasTop.classList.contains(componentName)) {
            menuItems.map(item => {
                let current = document.querySelector(`.menu${item.name}`)
                let selected = document.querySelector(`.menu${menuItems[selectedButton].name}`)
    
                if(selected === current) current.classList.add('menuselected')
                else current.classList.remove('menuselected')
    
                if(e.key.toLowerCase() === config.controls.accept && selected == current) {
                    destroyAllScenes(canvasTop);
                    destroyAllScenes(canvasBottom);
                    config.checkpoints.add(item.component);
                }
            });
        }
    }
    canvasTop.childNodes.length > 0 && canvasTop.classList.contains(componentName) ?
        document.addEventListener('keypress', e => keyEvent(e))
    : null

    // Clean up before loading in any new components.
    setInterval(() => {
        canvasTop.childNodes.length === 0 && canvasTop.classList.contains(componentName) ? 
            (
                canvasTop.classList.remove(componentName), canvasBottom.classList.remove(componentName),
                document.removeEventListener('keypress', e => keyEvent(e))
            )
        : null
    }, 100)
}

export default startMenu;
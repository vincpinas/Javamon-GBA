// Creates a element with a unique id
export const createElementId = (type, id) => {
    let element = document.createElement(type)
    element.id = id
    return element;
}

// Creates a element with a reused class name
export const createElementClass = (type, className) => {
    let element = document.createElement(type)
    element.className = className
    return element;
}

/*
    This function needs a array with the Css file names in the Css folder in order to work
    Note: this function doesn't actually load in the Css files, but creates a link element in the html
    which then loads in the file.
*/
export const cssLoader = (cssFiles) => {
    cssFiles.length > 0 ? cssFiles.map(file => {
        let head = document.getElementsByTagName('head')[0];
        let link  = document.createElement('link');

        link.rel = 'stylesheet'
        link.type = 'text/css'
        link.href = `./Css/${file}.css`

        head.appendChild(link);

    }) : null
}

/* 
    Unlike the destorySceneNatural function, the destroyAllScenes function only needs the canvas to destroy all scenes.
    Note: this function destroys all scenes at once after the transition has finished.
*/
export const destroyAllScenes = (canvas) => {
    let tmp = createElementClass('div', 'fadeCover')
    if(canvas.childNodes.length > 0 && !canvas.firstChild.classList.contains('fadeCover')) {
        canvas.insertBefore(tmp, canvas.firstChild)

        setTimeout(() => {
            while (canvas.firstChild) {
                canvas.removeChild(canvas.firstChild);
            }
        }, 1500)
    }
}

/* 
    This function is to be used in combination with a map function on a array of all scenes
    Note: this function doesn't actually work on the canvas element, but on a element containing div's
    which in this case are "scenes"
    Note: If an element should not be destroyed, set the duration to null which is the same as setting the timeout to infinite
*/
export const destroySceneNatural = (canvas, scene, element) => {
    let interval, timeout

    interval = setInterval(() => {
        canvas.childNodes[0] === element ?
            timeout == null && scene.duration !== null ?
                timeout = setTimeout(() => {
                    try { canvas.removeChild(element) }
                    catch (err) { console.log(`${element.className} does not exist on ${canvas.className}`) }
                }, scene.duration * 1000)
            : null
        : null
    }, 100);
}

export const seedConfig = (config) => {
    config.grayscale = false
    config.controls = { 
        up:'w', left:'a', down:'s', right:'d', accept:'x', cancel:'z' 
    }
    config.screen = { 
        top: { width: 768 , height: 416 }, bottom: { width: 660 , height: 350 }
    }
    config.checkpoints = ['intro'];
}
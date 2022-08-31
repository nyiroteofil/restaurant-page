const createElement = (type, parent, className, id, TextContent) => {
    let container = document.querySelector(`.${parent}`);

    let element = document.createElement(`${type}`);

    if (className !== undefined && className !== '') {
        element.classList.add(`${className}`)
    };

    if (id !== undefined && id !== '') {
        element.id = `${id}`;
    };

    if (TextContent !== undefined && TextContent !== '') {
        element.textContent = `${TextContent}`;
    };

    container.appendChild(element);
}

const removeAllChild = (node) => {

    while (node.firstChild) {
        node.removeChild(node.firstChild);
    }
}

const addClass = (element, className) => {
    const item = document.querySelector(`.${element}`);
    item.classList.add(`${className}`)
}

const removeClass = (element, className) => {
    const item = document.querySelector(`.${element}`);
    item.classList.remove(`${className}`);
}

const removeTabClass = () => {
    removeClass('home-tab', 'current');
    removeClass('menu-tab', 'current');
    removeClass('info-tab', 'current')
}

export {
    createElement,
    removeAllChild,
    addClass,
    removeClass,
    removeTabClass,
}
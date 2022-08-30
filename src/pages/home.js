import { create } from "lodash";
import { 
    createElement,
    removeAllChild,
    addClass,
    removeClass
} from "./domFun.js";

export default function buildHomePage() {
    let tabs = document.querySelectorAll('.tab');

    tabs.forEach(e => {
        removeClass(e.classList[0], 'current')
    });

    removeAllChild(document.querySelector('.content-body'));

    createElement('div', 'content-body', 'home-container')

    for (let i = 0; i < 4; i++) {
        createElement('div', 'content-body', `card-${i}`);
    };

    addClass('home-tab', 'current');

}
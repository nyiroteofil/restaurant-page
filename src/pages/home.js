import { create } from "lodash";
import { 
    createElement,
    removeAllChild,
    addClass,
    removeClass,
    removeTabClass,
} from "./domFun.js";

export default function buildHomePage() {
    removeAllChild(document.querySelector('.content-body'));

    removeTabClass();

    removeClass('content-body', 'menu');
    removeClass('content-body', 'info');
    addClass('content-body', 'home')

    createElement('div', 'content-body', 'home-container')

    for (let i = 0; i < 4; i++) {
        createElement('div', 'content-body', `card-${i}`);
    };

    addClass('home-tab', 'current');

}
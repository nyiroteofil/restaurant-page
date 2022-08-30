import _, { create } from 'lodash';
import '/src/style.css';


import { 
    createElement,
    removeAllChild,
    addClass,
    removeClass
} from './pages/domFun.js';

import homePage from './pages/home.js';
import icon from './imgs/logo.svg'

/**Header and body of the home page, the header will be fix*/
 
createElement('div', 'content', 'content-header',);
createElement('div', 'content', 'content-body');

/**Fixed header with dinamic navbar */

createElement('div', 'content-header', 'logo-container')

createElement('img', 'logo-container', 'logo');
 let logo = document.querySelector('.logo');
 logo.src = icon;
createElement('p', 'logo-container', 'logo-text', '', 'Chorint Restaurant');

createElement('div', 'content-header', 'navbar');

createElement('div', 'navbar', 'home-tab', '', 'home');
addClass('home-tab', 'tab');
createElement('div', 'navbar', 'menu-tab', '', 'menu');
addClass('menu-tab', 'tab');
createElement('div', 'navbar', 'info-tab', '', 'info');
addClass('info-tab', 'tab');

homePage();


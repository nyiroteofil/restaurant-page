import {
    createElement,
    removeAllChild,
    addClass,
    removeClass,
    removeTabClass,
} from './domFun.js'

import spagethi from '../imgs/spagethi.jpg';
import stew from '../imgs/stew.jpg';
import roast from '../imgs/roast.jpg';
import ribs from '../imgs/ribs.jpg';
import icecream from '../imgs/icecream.jpg';
import baconegg from '../imgs/baconegg.jpg';
import soup from '../imgs/soup.jpg';
import beer from '../imgs/beer.jpg';
import coffee from '../imgs/coffee.jpg';
import waffle from '../imgs/waffle.jpg'

export default function BuildMenu() {
    removeAllChild(document.querySelector('.content-body'))

    removeTabClass();

    removeClass('content-body', 'home');
    removeClass('content-body', 'info');
    addClass('content-body', 'menu')


    createElement('div', 'content-body', 'menu-container');

    createElement('div', 'menu-container', 'description-container-milanese');
    createElement('img', 'menu-container', 'img-milanese');
    addClass('description-container-milanese', 'desc')
    addClass('img-milanese', 'menu-img')
    document.querySelector('.img-milanese').src = spagethi;

    createElement('h2', 'description-container-milanese', '', '', 'Spaggethi Milanese')
    createElement('ul', 'description-container-milanese', 'milanese-options', '', 'options');
    createElement('li', 'milanese-options', '', '', 'cheese on top')
    createElement('li', 'milanese-options', '', '', 'ketchup on top')

    createElement('div', 'menu-container', 'description-container-mashroom-stew');
    createElement('img', 'menu-container', 'img-mashroom-stew');
    addClass('description-container-mashroom-stew', 'desc')
    addClass('img-mashroom-stew', 'menu-img')
    document.querySelector('.img-mashroom-stew').src = stew;
    

    createElement('h2', 'description-container-mashroom-stew', '', '', 'Mashroom Stew')
    createElement('ul', 'description-container-mashroom-stew', 'stew-options', '', 'options');
    createElement('li', 'stew-options', '', '', 'None');

    
    createElement('div', 'menu-container', 'description-container-roast');
    createElement('img', 'menu-container', 'img-roast');
    addClass('description-container-roast', 'desc')
    addClass('img-roast', 'menu-img')
    document.querySelector('.img-roast').src = roast;
    

    createElement('h2', 'description-container-roast', '', '', 'Roasted Chicken Breasts')
    createElement('ul', 'description-container-roast', 'roast-options', '', 'options');
    createElement('li', 'roast-options', '', '', 'cheese during rosting');
    createElement('li', 'roast-options', '', '', 'onions during rosting')
 

    createElement('div', 'menu-container', 'description-container-ribs');
    createElement('img', 'menu-container', 'img-ribs');
    addClass('description-container-ribs', 'desc')
    addClass('img-ribs', 'menu-img')
    document.querySelector('.img-ribs').src = ribs;
    

    createElement('h2', 'description-container-ribs', '', '', 'Beef Ribs')
    createElement('ul', 'description-container-ribs', 'ribs-options', '', 'options');
    createElement('li', 'ribs-options', '', '', 'potatoes');
    createElement('li', 'ribs-options', '', '', 'rice');
    createElement('li', 'ribs-options', '', '', 'tomato salad');


    createElement('div', 'menu-container', 'description-container-icecream');
    createElement('img', 'menu-container', 'img-icecream');
    addClass('description-container-icecream', 'desc')
    addClass('img-icecream', 'menu-img')
    document.querySelector('.img-icecream').src = icecream
    

    createElement('h2', 'description-container-icecream', '', '', 'Ice-Cream')
    createElement('ul', 'description-container-icecream', 'icecream-options', '', 'Flawors');
    createElement('li', 'icecream-options', '', '', 'Choclolate');
    createElement('li', 'icecream-options', '', '', 'Vanile');
    createElement('li', 'icecream-options', '', '', 'Strawberry');
    createElement('li', 'icecream-options', '', '', 'Pineapple');


    createElement('div', 'menu-container', 'description-container-egg-bacon');
    createElement('img', 'menu-container', 'img-egg-bacon');
    addClass('description-container-egg-bacon', 'desc')
    addClass('img-egg-bacon', 'menu-img')
    document.querySelector('.img-egg-bacon').src = baconegg;

    createElement('h2', 'description-container-egg-bacon', '', '', 'Eggs with Bacon')
    createElement('ul', 'description-container-egg-bacon', 'egg-bacon-options', '', 'options');
    createElement('li', 'egg-bacon-options', '', '', 'None');


    createElement('div', 'menu-container', 'description-container-chicken-soup');
    createElement('img', 'menu-container', 'img-chicken-soup');
    addClass('description-container-chicken-soup', 'desc')
    addClass('img-chicken-soup', 'menu-img')
    document.querySelector('.img-chicken-soup').src = soup;

    createElement('h2', 'description-container-chicken-soup', '', '', 'Chicken Soup')
    createElement('ul', 'description-container-chicken-soup', 'soup-options', '', 'options');
    createElement('li', 'soup-options', '', '', 'spici');
    createElement('li', 'soup-options', '', '', 'not spici');


    createElement('div', 'menu-container', 'description-container-waffel');
    createElement('img', 'menu-container', 'img-waffel');
    addClass('description-container-waffel', 'desc')
    addClass('img-waffel', 'menu-img')
    document.querySelector('.img-waffel').src = waffle;

    createElement('h2', 'description-container-waffel', '', '', 'Waffel')
    createElement('ul', 'description-container-waffel', 'waffel-options', '', 'options');
    createElement('li', 'waffel-options', '', '', 'Mapel syrup');
    createElement('li', 'waffel-options', '', '', 'Chocolate');

    createElement('div', 'menu-container', 'description-container-coffee');
    createElement('img', 'menu-container', 'img-coffee');
    addClass('description-container-coffee', 'desc')
    addClass('img-coffee', 'menu-img')
    document.querySelector('.img-coffee').src = coffee;

    createElement('h2', 'description-container-coffee', '', '', 'coffee')
    createElement('ul', 'description-container-coffee', 'coffee-options', '', 'options');
    createElement('li', 'coffee-options', '', '', 'sugar');
    createElement('li', 'coffee-options', '', '', 'milk');

    createElement('div', 'menu-container', 'description-container-beer');
    createElement('img', 'menu-container', 'img-beer');
    addClass('description-container-beer', 'desc')
    addClass('img-beer', 'menu-img')
    document.querySelector('.img-beer').src = beer;

    createElement('h2', 'description-container-beer', '', '', 'beer')
    createElement('ul', 'description-container-beer', 'beer-options', '', 'options');
    createElement('li', 'beer-options', '', '', '10dl');
    createElement('li', 'beer-options', '', '', '20dl');
  
    addClass
    
    addClass('menu-tab', 'current')
};
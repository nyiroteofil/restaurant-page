import { create } from 'lodash';
import {
    createElement,
    removeAllChild,
    addClass,
    removeClass,
    removeTabClass,
} from './domFun.js';

export default function BuildInfo() {
    removeAllChild(document.querySelector('.content-body'));

    removeTabClass();
    addClass('info-tab', 'current');

    removeClass('content-body', 'home');
    addClass('content-body', 'menu');

    createElement('div', 'content-body', 'info-container');
    createElement('h1', 'info-container', '', '', 'Contact  Information');

    createElement('p', 'info-container', '', '', 'e-mail: corinth.restaurant@fakemail.com');
    createElement('p', 'info-container', '', '', 'phone number: 11223 34455');   
    createElement('p', 'info-container', '', '', 'location: Hungary, Veszprém-megye, Relalcity, Realstreet 77.')
    createElement('div', 'info-container', 'credit', '', '');
    createElement('p', 'credit', '', '', 'Site Made by:');
    createElement('a', 'credit', 'credit-link', '', 'Nyirő Teofil')
    document.querySelector('.credit-link').href = 'https://github.com/nyiroteofil';
    document.querySelector('.credit-link').target = '_blank';
}
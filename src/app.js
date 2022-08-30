import _ from 'lodash';
import './style.css';

const mainContainer = document.querySelector('.content');

let element = document.createElement('p');
element.textContent = 'hi this is a text';

mainContainer.appendChild(element);
import "./styles.css";
import {greeting} from "./two.js"
import {displayHome} from './home.js';
import {displayMenu} from './menu.js';
import {displayAbout} from './about.js';
console.log(greeting);

const content = document.querySelector('.content');
const home = document.querySelector('.home');
const menu = document.querySelector('.menu');
const about = document.querySelector('.about');


home.addEventListener("click", () => displayHome(content));
menu.addEventListener("click", () => displayMenu(content));
about.addEventListener("click", () => displayAbout(content));
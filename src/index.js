import './style.css';
import { HomepageMaker } from './homepage.js';
import {displayAbout} from './about.js';
import {displayDrinks} from './drinks.js';
import {displayFood} from './food.js'

let content = document.querySelector('#content');
HomepageMaker(content);

let aboutTab = document.querySelector(".about");
aboutTab.addEventListener("click",displayAbout);

let foodTab = document.querySelector(".food");
foodTab.addEventListener("click", displayFood);

let drinksTab = document.querySelector(".drinks");
drinksTab.addEventListener("click", displayDrinks);
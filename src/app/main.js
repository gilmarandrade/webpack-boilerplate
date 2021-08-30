// Importing SCSS
import "./scss/style.scss";

import { Tooltip, Toast, Popover } from 'bootstrap';

const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new Tooltip(tooltipTriggerEl)
})

// ES2020 nullish coalescing
const greet = (input) => {
    return input ?? "Hello world";
}

console.log(greet(Math.random()));
const address = {
    city: greet(Math.random()),
};

console.log(address?.city);

// Babel Input: ES2015 arrow function
console.log([1, 2, 3].map(n => n + 1))

import soma from './js/calc';

soma(2, 4);
soma(10, 20);


// Import images
// import './assets/150x150.jpg';
// import './assets/150x150.png';

// Import html
// import './templates/index.html';
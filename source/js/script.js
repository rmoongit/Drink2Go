/* в этот файл добавляет скрипты*/
import { navMenu } from './burger.js';
import { showContent } from './select.js';

const buttonNoJs = document.querySelector('.no-js--button');
const navNoJs = document.querySelector('.no-js--nav');
const mapNoJs = document.querySelector('.no-js--map');

buttonNoJs.classList.remove('no-js--button');
navNoJs.classList.remove('no-js--nav');
mapNoJs.classList.remove('no-js--map');

showContent();
navMenu();

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    clickableClass: 'swiper-pagination-clickable',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.product__button--right',
    prevEl: '.product__button--left',
  },
});

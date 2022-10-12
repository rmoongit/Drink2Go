/* в этот файл добавляет скрипты*/
import { navMenu } from "./burger.js";
import { showContent } from "./select.js";

const buttonNoJs = document.querySelector('.no-js--button');
const navNoJs = document.querySelector('.no-js--nav');

buttonNoJs.classList.remove('no-js--button');
navNoJs.classList.remove('no-js--nav');

showContent();
navMenu();

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.product__down-button',
    clickable: true,
    clickableClass: 'swiper-pagination-clickable',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.promo__button--right',
    prevEl: '.promo__button--left',
  },
});

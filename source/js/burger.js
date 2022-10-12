
const navMenu = () => {
  const buttonElement = document.querySelector('.header__button');
  const navElement = document.querySelector('.header__nav');


    buttonElement.addEventListener('click', () => {
      buttonElement.classList.toggle('header__button--open');
      navElement.classList.toggle('header__nav--open')
    })
}

export {navMenu};

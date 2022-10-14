
const navMenu = () => {
  const buttonElement = document.querySelector('.header__users-button');
  const navElement = document.querySelector('.header__nav');


    buttonElement.addEventListener('click', () => {
      buttonElement.classList.toggle('header__users-button--open');
      navElement.classList.toggle('header__nav--open')
    })
}

export {navMenu};

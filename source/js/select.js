const buttonElement = document.querySelector('.select__button');
const contentElement = document.querySelector('.select__content');
const contentElementItems = document.querySelectorAll('.select__item');

const showCurrentElement = () => {
  if (buttonElement.textContent !== 'по умолчанию') {
    buttonElement.textContent = 'по умолчанию'
  } else {
    contentElementItems.forEach((item) => {
      item.addEventListener('click', () => {
        buttonElement.textContent = item.textContent;
      })
    })
  }
}

const showContent = () => {
  buttonElement.addEventListener('click', () => {

    if(!buttonElement.classList.contains('select__button--active')) {
      buttonElement.classList.toggle('select__button--active');
      contentElement.classList.toggle('select__content--open');
    } else {
      buttonElement.classList.remove('select__button--active');
      contentElement.classList.remove('select__content--open');
    }
    showCurrentElement();
  })
}

export {showContent, showCurrentElement}

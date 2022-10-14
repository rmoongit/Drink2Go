const buttonElement = document.querySelector('.drop__button');
const contentElement = document.querySelector('.drop__content');
const contentElementItems = document.querySelectorAll('.drop__item');

const showCurrentElement = () => {
  if (buttonElement.textContent !== 'по умолчанию') {
    buttonElement.textContent = 'по умолчанию'
    contentElementItems.forEach((item) => {
      item.addEventListener('click', () => {
        buttonElement.textContent = item.textContent;
      })
    })
  }
  return false;
}

const showContent = () => {
  buttonElement.addEventListener('click', () => {

    if (!buttonElement.classList.contains('drop__button--active')) {
      buttonElement.classList.toggle('drop__button--active');
      contentElement.classList.toggle('drop__content--open');
    } else {
      buttonElement.classList.remove('drop__button--active');
      contentElement.classList.remove('drop__content--open');
    }
    showCurrentElement();
  })
}

export { showContent, showCurrentElement }

const buttonElement=document.querySelector(".drop__button"),contentElement=document.querySelector(".drop__content"),contentElementItems=document.querySelectorAll(".drop__item"),showCurrentElement=()=>("по умолчанию"!==buttonElement.textContent&&(buttonElement.textContent="по умолчанию",contentElementItems.forEach((t=>{t.addEventListener("click",(()=>{buttonElement.textContent=t.textContent}))}))),!1),showContent=()=>{buttonElement.addEventListener("click",(()=>{buttonElement.classList.contains("drop__button--active")?(buttonElement.classList.remove("drop__button--active"),contentElement.classList.remove("drop__content--open")):(buttonElement.classList.toggle("drop__button--active"),contentElement.classList.toggle("drop__content--open")),showCurrentElement()}))};export{showContent,showCurrentElement};
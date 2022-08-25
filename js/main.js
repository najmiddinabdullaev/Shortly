const elShortenerForm = document.querySelector('.js-url-shortener-form');
const elShortenerResults = document.querySelector('.url-shortener__results');

elShortenerForm.addEventListener('submit', function (evt){
  evt.preventDefault();

  elShortenerResults.classList.add('url-shortener__results--open');
});
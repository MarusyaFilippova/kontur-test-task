var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

var openMainNav = function () {
  navMain.classList.remove('main-nav--closed');
  navMain.classList.add('main-nav--opened');
};

var closeMainNav = function () {
  navMain.classList.add('main-nav--closed');
  navMain.classList.remove('main-nav--opened');
};

navMain.classList.remove('main-nav--nojs');
closeMainNav();

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    openMainNav();
  } else {
    closeMainNav();
  }
});

var mainNavList = document.querySelectorAll('.main-nav__item');

mainNavList.forEach(function (element) {
  element.addEventListener('click', function (evt) {
    evt.preventDefault();
    var currentItem = document.querySelector('.main-nav__item--active');
    var currentLink = document.querySelector('.main-nav__link--active');
    currentItem.classList.remove('main-nav__item--active');
    currentLink.classList.remove('main-nav__link--active');
    evt.target.parentNode.classList.add('main-nav__item--active');
    evt.target.classList.add('main-nav__link--active');
    closeMainNav();
  });
});

var tabList = document.querySelectorAll('.tab__link');
var tabItems = document.querySelectorAll('.tab__info');

for (let i = 0; i < tabList.length; i++) {
  tabList[i].id = i;
};

var hiddenClass = 'visually-hidden';

tabList.forEach(function (element) {
  element.addEventListener('click', function (evt) {
    evt.preventDefault();
    var currentLink = document.querySelector('.tab__link--active');
    var currentItem = document.querySelector('.tab__info--active');

    var activeLinkClass = 'tab__link--active';
    var activeItemClass = 'tab__info--active';

    currentLink.classList.remove(activeLinkClass);
    evt.target.classList.add(activeLinkClass);

    currentItem.classList.remove(activeItemClass);
    currentItem.classList.add(hiddenClass);

    tabItems[evt.target.id].classList.remove(hiddenClass);
    tabItems[evt.target.id].classList.add(activeItemClass);
  })
});

var sliderControls = document.querySelectorAll('.slider__control-item');
var sliderItems = document.querySelectorAll('.slider__item');

for (let i = 0; i < sliderControls.length; i++) {
  sliderControls[i].id = i;
};

sliderControls.forEach(function (element) {
  element.addEventListener('click', function (evt) {
    evt.preventDefault();
    var currentBtn = document.querySelector('.slider__control-item--active');
    var currentItem = document.querySelector('.slider__item--active');

    var activeBtnClass = 'slider__control-item--active';
    var activeItemClass = 'slider__item--active';

    currentBtn.classList.remove(activeBtnClass);
    evt.target.classList.add(activeBtnClass);

    currentItem.classList.remove(activeItemClass);
    currentItem.classList.add('visually-hidden');
    sliderItems[evt.target.id].classList.remove('visually-hidden');
    sliderItems[evt.target.id].classList.add(activeItemClass);
  })
});

var catalogNavList = document.querySelectorAll('.catalog-nav__item');

catalogNavList.forEach(function (element) {
  element.addEventListener('click', function (evt) {
    evt.preventDefault();

    var currentLink = document.querySelector('.catalog-nav__link--active');
    var currentItem = document.querySelector('.catalog-nav__item--active');

    currentLink.classList.remove('catalog-nav__link--active');
    currentItem.classList.remove('catalog-nav__item--active');

    evt.target.classList.add('catalog-nav__link--active');
    evt.target.parentNode.classList.add('catalog-nav__item--active');
  });
});

var catalogNavSubList = document.querySelectorAll('.catalog-nav__sub-link');

catalogNavSubList.forEach(function (element) {
  element.addEventListener('click', function (evt) {
    evt.preventDefault();
    evt.stopPropagation();
    var currentLink = document.querySelector('.catalog-nav__sub-link--active');
    if (currentLink) {
      currentLink.classList.remove('catalog-nav__sub-link--active');
    }
    evt.target.classList.add('catalog-nav__sub-link--active');
  });
});

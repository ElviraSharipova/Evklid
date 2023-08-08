const burger = document.querySelector(".burger");
const menu = document.querySelector(".header .nav")
const menuLinks = document.querySelectorAll(".header .nav__link");


// Бургер
burger.addEventListener('click', function() {
    burger.classList.toggle("burger--active");
    menu.classList.toggle("nav--active");
    document.body.classList.toggle("stop-scroll");
    burger.classList.toggle("burger--onMenu");
})


menuLinks.forEach(function(el) {
    el.addEventListener('click', function() {
        burger.classList.remove("burger--active");
        menu.classList.remove("nav--active");
        document.body.classList.remove("stop-scroll");
        burger.classList.remove("burger--onMenu");
    })
})


// Лупа


const search = document.querySelector(".header__search__link");
const searchForm = document.querySelector(".header__find");

search.addEventListener('click', function() {
    searchForm.classList.toggle("header__find--active");
});


const searchClose = document.querySelector(".find__cancel");

searchClose.addEventListener('click', function() {
    searchForm.classList.toggle("header__find--active");
})



// Табы  


let tabsBtn = document.querySelectorAll('.how__link'); //все ссылки
let tabsItem = document.querySelectorAll('.how__main'); //все блоки

tabsBtn.forEach(function(element) {
    element.addEventListener('click', function(e) {
        e.preventDefault();
        const path = e.currentTarget.dataset.path; //получаем значение data-path

        tabsBtn.forEach(function(btn) { btn.classList.remove('tabs-step--active') });
        e.currentTarget.classList.add('tabs-step--active');

        tabsItem.forEach(function(element) { element.classList.remove('how__main--active') });
        document.querySelector(`[data-target="${path}"]`).classList.add('how__main--active');
    });
});



new Accordion('.faq__aсс');


//Слайдер
const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    slidesPrevView: 1,
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    a11y: {
        paginationBulletMessage: 'Слайд номер: {{index}}'
    }

});
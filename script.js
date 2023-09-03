//Note : to run all your custom codes in project put them in the app function ;
import 'boxicons';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import Typewriter from 'typewriter-effect/dist/core';
//handle toggle mobile menu
function toggleMenu() {
  const openMobileMenuBtn = document.getElementById('open-menu-button');
  const closeMobileMenuBtn = document.getElementById('close-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  openMobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('hidden');
    mobileMenu.classList.add('block');
  });
  closeMobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('block');
    mobileMenu.classList.add('hidden');
  });
}

// app is main function of project
function app() {
  // run commands of toggle menu function
  toggleMenu();

  // title with typewriter
  // const headerTitle = document.getElementById('header-title');
  // const typewriter = new Typewriter(headerTitle, {
  //   loop: true,
  //   delay: 75,
  // });
  // typewriter
  //   .pauseFor(2000)
  //   .typeString('توران جاب')
  //   .pauseFor(300)
  //   .deleteChars(10)
  //   .typeString('ربات تلگرامی کاریابی')
  //   .typeString(' ایرانی')
  //   .pauseFor(1000)
  //   .start();

  // AOS is library for fade animations
  AOS.init();
  // You can also pass an optional settings object
  // below listed default settings
  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  });
  // header slider
  const swiperHeader = new Swiper('.header-swiper', {
    direction: 'vertical',
    spaceBetween: 30,
    effect: 'fade',
    centeblueSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.header-swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return (
          '<span class="' +
          className +
          '">' +
          (index < 10 ? 0 : '') +
          (index + 1) +
          '</span>'
        );
      },
    },
  });
  // sub slider
  const swiperSection = new Swiper('.section-swiper', {
    spaceBetween: 10,
    centeblueSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.section-swiper-pagination',
      // type: 'progressbar',
      clickable: true,
      renderBullet: function (index, className) {
        return (
          '<span class="' +
          className +
          '">' +
          (index < 10 ? 0 : '') +
          (index + 1) +
          '</span>'
        );
      },
    },
  });
}
document.addEventListener('DOMContentLoaded', app);

//  start news
let flagNews = true
let news = document.querySelector('.news')
let reviews = document.querySelector('.reviews')
let boxnews = document.querySelector('.boxnews')
let boxreviews = document.querySelector('.boxreviews')

let newsToggle = ()=>{if (flagNews) {
  news.classList.add('bg-soco-light-secondary')
  reviews.classList.remove('bg-soco-light-secondary')
  boxnews.classList.add('grid')
  boxnews.classList.remove('hidden')
  boxreviews.classList.add('hidden')
  boxreviews.classList.remove('grid')
} else {
  reviews.classList.add('bg-soco-light-secondary')
  news.classList.remove('bg-soco-light-secondary')
  boxnews.classList.add('hidden')
  boxnews.classList.remove('grid')
  boxreviews.classList.add('grid')
  boxreviews.classList.remove('hidden')

}

}
news.addEventListener('click', () => {
  flagNews = true
  newsToggle()

})
reviews.addEventListener('click', () => {
  flagNews = false
  newsToggle()
})
window.addEventListener('load', () => {
  flagNews = true
  newsToggle()
})

//  end news 
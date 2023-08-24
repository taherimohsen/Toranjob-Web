//Note : to run all your custom codes in project put them in the app function ;

import 'boxicons';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';
// import styles bundle
import 'swiper/css/bundle';

// AOS is library for fade animation
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

const swiperHeader = new Swiper('.header-swiper', {
  direction: 'vertical',
  spaceBetween: 30,
  effect: 'fade',
  centeredSlides: true,
  autoplay: {
    delay: 3000,
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
const swiperSection = new Swiper('.section-swiper', {
  spaceBetween: 10,
  centeredSlides: true,
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
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
});


// //toggle fixed menu
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

// this is main project function
function app() {
  toggleMenu();
  
}

document.addEventListener('DOMContentLoaded', app);

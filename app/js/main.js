window.addEventListener('DOMContentLoaded', () => {
  var swiper = new Swiper(".swiper", {
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      315: {
        spaceBetween: 50,
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 50,
      },
      1150: {
        slidesPerView: 2,
        spaceBetween: 100,
      }
    },

  });

  const showMenu = () => {
    const menuBtn = document.querySelector('.header__toggle');
    const menu = document.querySelector('.main-menu');
    const body = document.querySelector('body');

    menuBtn.addEventListener('click', e => {
      menu.classList.toggle('active');
      menuBtn.classList.toggle('active');
      body.classList.toggle('no-scroll');
    });
  };
  showMenu();

  function line() {
    const navLine = document.querySelector('.route__truck');
    const navItem = document.querySelectorAll('.road__item');

    navItem.forEach((el) => {
      el.addEventListener('mouseenter', (e) => {
        let target = e.currentTarget;
        navLine.style.left = `${target.offsetLeft + 30}px`;
      });
    });

    navItem.forEach((el) => {
      el.addEventListener('mouseleave', (e) => {
        navLine.style.left = `-90px`;
      });
    });
  };

  line();

  $('.select').select2();

  //* ==== Change Background Header
  function scrollHeader() {
    const nav = document.querySelector('header');

    if (this.scrollY >= 10) {
      nav.classList.add('scroll-header');
    } else {
      nav.classList.remove('scroll-header');
    }
  }

  window.addEventListener('scroll', scrollHeader);
});
window.addEventListener('DOMContentLoaded', () => {
  // * ==== Select Init
  $('.select').select2();

  // * ==== Change Backround Color if refreshed page
  (function () {
    const header = document.querySelector('header');
    if (window.pageYOffset >= 10) {
      header.classList.add('scroll-header');
    }
  })();

  //* ==== Change Background Header
  function scrollHeader() {
    const header = document.querySelector('header');
    if (this.scrollY >= 10) {
      header.classList.add('scroll-header');
    } else {
      header.classList.remove('scroll-header');
    }
  };

  // * ==== Slider Clients
  (function sliderClients() {
    const sldier = new Swiper(".swiper", {
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
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
  })();

  // * ==== Show menu
  (function showMenu() {
    const menuBtn = document.querySelector('.header__toggle');
    const menu = document.querySelector('.main-menu');
    const body = document.querySelector('body');

    menuBtn.addEventListener('click', e => {
      menu.classList.toggle('active');
      menuBtn.classList.toggle('active');
      body.classList.toggle('no-scroll');
    });
  })();

  // * ==== Road Hero
  (function road() {
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
  })();

  // * ==== Modal
  (function modals() {
    function bindModal(openBtn, modal, close) {
      const openBtnEl = document.querySelectorAll(openBtn);
      const modalEl = document.querySelector(modal);
      const closeEl = document.querySelectorAll(close);
      const body = document.querySelector('body');

      if (modalEl) {
        openBtnEl.forEach(el => {
          el.addEventListener('click', e => {

            if (e.target) {
              e.preventDefault()
            }

            modalEl.classList.add('active');
            body.classList.add('no-scroll');
          });
        })

        closeEl.forEach(btn => {
          btn.addEventListener('click', e => {
            modalEl.classList.remove('active');
            body.classList.remove('no-scroll');
          });
        })

        modalEl.addEventListener('click', e => {
          if (e.target === modalEl) {
            modalEl.classList.remove('active');
            body.classList.remove('no-scroll');
          }
        })
      };
    };
    bindModal('.header__signin', '.popup', '.popup__close');
  }());

  // * ==== SignIn|SignUp
  (function signin() {
    const cards = document.querySelectorAll('.card');
    const btns = document.querySelectorAll('.js-btn');

    btns.forEach((btn) => {
      btn.addEventListener('click', on_btn_click, true);
      btn.addEventListener('touch', on_btn_click, true);
    });

    function on_btn_click(e) {
      const nextID = e.currentTarget.getAttribute('data-target');
      const next = document.getElementById(nextID);
      if (!next) return;
      viewChange(next);
      return false;
    };

    function viewChange(next) {
      cards.forEach((card) => {
        card.classList.remove('is-show');
      });
      next.classList.add('is-show');
    };
  })();

  window.addEventListener('scroll', scrollHeader);
});
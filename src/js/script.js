import '../scss/style.scss';
/////////////* swiper */////////////
window.addEventListener('DOMContentLoaded', () => {

    const resizableSwiper = (breakpoint, swiperClass, swiperSettings) => {
        let swiper;

        breakpoint = window.matchMedia(breakpoint);

        const enableSwiper = function(className, settings) {
            swiper = new Swiper(className, settings);
        }

        const checker = function() {
            if (breakpoint.matches) {
                return enableSwiper(swiperClass, swiperSettings);
            } else {
                if (swiper !== undefined) swiper.destroy(true, true);
                document.querySelector(`${swiperClass} .swiper-pagination`).innerHTML = '';
                return;
            }
        };

        breakpoint.addEventListener('change', checker);
        checker();
    }

    resizableSwiper(
        '(max-width: 767px)',
        ' .brand .swiper',
        {
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            spaceBetween: 16,
            slidesPerView: 1.3,
        },
    );
    resizableSwiper(
        '(max-width: 767px)',
        '.device .swiper',
        {
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            spaceBetween: 16,
            slidesPerView: 1.3,
        },
    );
    resizableSwiper(
        '(max-width: 767px)',
        '.price .swiper',
        {
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            spaceBetween: 16,
            slidesPerView: 1.3,
        },
    );
});


/////////////* button */////////////

const buttonToggle = document.querySelectorAll('.button__toggle');
const brandList = document.querySelectorAll('.section__list');
const buttonHidden = document.querySelectorAll('.button__hidden')



buttonToggle.forEach((item, index) => {
    item.addEventListener('click', function () {
        if (brandList[index].classList.contains('brand__list-height')) {
            brandList[index].classList.remove('brand__list-height');
            buttonToggle[index].textContent = 'Показать все';
            buttonHidden[index].classList.remove('button__rotate');
        } else {
            brandList[index].classList.add('brand__list-height');
            buttonToggle[index].textContent = 'Скрыть все';
            buttonHidden[index].classList.add('button__rotate');
        }

    })
})

/////////////* form */////////////

const body = document.querySelector('body');
const formFeedback = document.querySelector('.form__feedback');
const formCallback = document.querySelector('.form__callback');
const menu = document.querySelector('.menu');

/////////////* form__feedback */////////////
const handleForm = () => {
    formFeedback.classList.toggle('form__body__active');
}

body.addEventListener('click', (e) => {
    if (e.target.closest('.feedback__open__button') || e.target.closest('.form__close__button')) {
        e.preventDefault()
        handleForm()
    } else if (!e.target.closest('.form__body')) {
        formFeedback.classList.remove('form__body__active');
    }
})

/////////////* form__callback */////////////
const handleCallForm = () => {
    formCallback.classList.toggle('form__callback__active');
}

body.addEventListener('click', (e) => {
    if (e.target.closest('.callback__open__button') || e.target.closest('.callback__close')) {
        e.preventDefault()
        handleCallForm()
    } else if (!e.target.closest('.form__body')) {
        formCallback.classList.remove('form__callback__active');
    }
})

/////////////* menu */////////////

const handleMenu = () => {
    menu.classList.toggle('menu__active');
}

body.addEventListener('click', (e) => {
    if (e.target.closest('.menu__open_button') || e.target.closest('.menu__btn__close')) {
        console.log(e.target)
        e.preventDefault()
        handleMenu()
    } else if (!e.target.closest('.menu__content') || e.target.closest('.menu__btn__message') || e.target.closest('.menu__btn__phone')) {
        menu.classList.remove('menu__active');
    }
})





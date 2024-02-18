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
                document.querySelector('.swiper-pagination').innerHTML = '';
                return;
            }
        };

        breakpoint.addEventListener('change', checker);
        checker();
    }

    resizableSwiper(
        '(max-width: 767px)',
        '.swiper',
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

const buttonToggle = document.querySelector('.button__toggle');
const brandList = document.querySelector('.brand__list');
const buttonHidden = document.querySelector('.button__hidden')

buttonToggle.addEventListener('click', function () {
    if (brandList.classList.contains('brand__list-height')) {
        brandList.classList.remove('brand__list-height');
        buttonToggle.textContent = 'Показать все';
        buttonHidden.classList.remove('button__rotate');
    } else {
        brandList.classList.add('brand__list-height');
        buttonToggle.textContent = 'Скрыть все';
        buttonHidden.classList.add('button__rotate');
    }

})


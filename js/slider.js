$(document).ready(function() {


    const presentation = new Swiper('.presentation_swiper_js', {
        speed: 500,
        centeredSlides: true,
        loop: true,
        autoplay: {
          delay: 5000,
        },

        freeMode: true,
        watchSlidesProgress: true,

        mousewheel: {
            invert: true,
            forceToAxis: true,
        },


        slidesPerView: 3,
        spaceBetween: 8,

        breakpoints: {
            768: {
                slidesPerView: 6,
                spaceBetween: 10,
            },

        }
    });

    const news = new Swiper('.news_swiper_js', {
        speed: 500,
        centeredSlides: true,
        loop: true,
        autoplay: {
          delay: 5000,
        },

        freeMode: true,
        watchSlidesProgress: true,

        mousewheel: {
            invert: true,
            forceToAxis: true,
        },


        slidesPerView: 3,
        spaceBetween: 15,

        breakpoints: {
            768: {
                slidesPerView: 3,
                spaceBetween: 40,
            },

        }
    });

    const advantage = new Swiper('.advantage_swiper_js', {
        speed: 500,
        autoplay: {
          delay: 5000,
        },
        loop: true,
        autoHeight: true,

        mousewheel: {
            invert: true,
            forceToAxis: true,
        },

        navigation: {
            nextEl: '.icon_arrow_right',
            prevEl: '.icon_arrow_left',
        },


        slidesPerView: 2,
        spaceBetween: 30,

        breakpoints: {
            768: {
                spaceBetween: 270,
                slidesPerView: 2,
                freeMode: true,
                watchSlidesProgress: true,
            },

        }
    });

    $('.advantage__menu').on('click',  '.advantage__item', function(e) {
        e.preventDefault();
        let index = $(this).data('index');
        // console.log(index);
        // advantage.slideTo(index);
        advantage.slideToLoop(index);
    });

    advantage.on('slideChange', function (e) {
        let currentSlide = e.realIndex;
        let currentItem = $('.advantage__menu').find(`[data-index='${currentSlide}']`);
        $('.advantage__item').removeClass('active');
        currentItem.addClass('active');
    });

});

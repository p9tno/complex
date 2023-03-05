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
            invert: false,
            forceToAxis: true,
        },


        slidesPerView: 3,
        spaceBetween: 8,

        breakpoints: {
            501: {
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
            // invert: true,
            invert: false,
            forceToAxis: true,
        },


        slidesPerView: 3,
        spaceBetween: 15,

        breakpoints: {
            501: {
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
            invert: false,
            forceToAxis: true,
        },

        navigation: {
            nextEl: '.icon_arrow_right',
            prevEl: '.icon_arrow_left',
        },


        slidesPerView: 2,
        spaceBetween: 30,

        breakpoints: {
            501: {
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


    // function mobilSlider () {
    //     let slider_services = null;
    //     let slider_conditions = null;
    //     let mediaQuerySize = 501;
    //
    //     function initSlider () {
    //         if (!slider_services) {
    //             slider_services = new Swiper('.services-swiper-js', {
    //
    //                 pagination: {
    //                     el: '.services__dotted',
    //                 },
    //
    //                 slidesPerView: 1,
    //                 spaceBetween: 22,
    //
    //                 observer: true,
    //                 observeParents: true,
    //                 observeSlideChildren: true,
    //             });
    //         }
    //
    //         if (!slider_conditions) {
    //             slider_conditions = new Swiper('.conditions-swiper-js', {
    //
    //                 pagination: {
    //                     el: '.conditions__dotted',
    //                 },
    //
    //                 slidesPerView: 1,
    //                 spaceBetween: 22,
    //
    //                 observer: true,
    //                 observeParents: true,
    //                 observeSlideChildren: true,
    //             });
    //         }
    //
    //     }
    //
    //     function destroySlider () {
    //         if (slider_services) {
    //             slider_services.destroy();
    //             slider_services = null;
    //         }
    //
    //         if (slider_conditions) {
    //             slider_conditions.destroy();
    //             slider_conditions = null;
    //         }
    //     }
    //
    //     $(window).on('load resize', function () {
    //         let windowWidth = $(this).innerWidth();
    //         if (windowWidth <= mediaQuerySize) {
    //             // initSlider();
    //             console.log('init');
    //         } else {
    //             // destroySlider();
    //             console.log('destroy');
    //         }
    //     });
    // }
    // mobilSlider();

});

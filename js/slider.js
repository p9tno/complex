$(document).ready(function() {


    const presentation = new Swiper('.presentation_swiper_js', {


        speed: 500,

        centeredSlides: true,
        loop: true,
        // autoplay: {
        //   delay: 5000,
        // },

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


});

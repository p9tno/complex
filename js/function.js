var app = {
    pageScroll: '',
    lgWidth: 1200,
    mdWidth: 992,
    smWidth: 768,
    resized: false,
    iOS: function () {
        return navigator.userAgent.match( /iPhone|iPad|iPod/i );
    },
    touchDevice: function () {
        return navigator.userAgent.match( /iPhone|iPad|iPod|Android|BlackBerry|Opera Mini|IEMobile/i );
    }
};

function isLgWidth() {
    return $( window ).width() >= app.lgWidth;
} // >= 1200
function isMdWidth() {
    return $( window ).width() >= app.mdWidth && $( window ).width() < app.lgWidth;
} //  >= 992 && < 1200
function isSmWidth() {
    return $( window ).width() >= app.smWidth && $( window ).width() < app.mdWidth;
} // >= 768 && < 992
function isXsWidth() {
    return $( window ).width() < app.smWidth;
} // < 768
function isIOS() {
    return app.iOS();
} // for iPhone iPad iPod
function isTouch() {
    return app.touchDevice();
} // for touch device






$(document).ready(function() {


    function toggleNav() {
        $('.hamburger').click(function(event) {
            // console.log('Показ меню');
            $('.hamburger').toggleClass('hamburger_open');
            $('.header__nav').toggleClass('header__nav_open');
            $( 'body' ).toggleClass( 'nav-open' );
        });
    };
    toggleNav();

    function hideNav() {
        $(".header__nav").on('mouseenter', function() {
            // console.log('mouse on');
            // let wrap = $(this).find('.task__wrap');
            // wrap.slideDown(300)

        });

        $(".header__nav").on('mouseleave', function() {
            console.log('mouse of');
            // let wrap = $(this).find('.task__wrap');
            // wrap.slideUp(300)
            $('.hamburger').removeClass('hamburger_open');
            $('.header__nav').removeClass('header__nav_open');
            $( 'body' ).removeClass( 'nav-open' );
        });
    }
    hideNav();

    function showModal() {
        $('.show_js').on('click', function (e) {
            e.preventDefault();
            let id  = $(this).attr('href');
            $(id).modal('show');

            let item = $(this);
            let src = item.find('img').attr('data-src');
            let title = item.find('.apartments__title span').attr('data-title');
            let m2 = item.find('.m2_js').attr('data-m2');
            let ft = item.find('.ft_js').attr('data-ft');
            let aed = item.find('.aed_js').attr('data-aed');
            let dollar = item.find('.dollar_js').attr('data-dollar');
            console.log(src);


            let modal_src_js = $('.modal_src_js');
            let modal_title_js = $('.modal_title_js');
            let modal_m2_js = $('.modal_m2_js');
            let modal_ft_js = $('.modal_ft_js');
            let modal_aed_js = $('.modal_aed_js');
            let modal_dollar_js = $('.modal_dollar_js');

            modal_src_js.attr("src", src);
            modal_title_js.text(title);
            modal_m2_js.text(m2);
            modal_ft_js.text(ft);
            modal_aed_js.text(aed);
            modal_dollar_js.text(dollar);


            $("#thisApartment").on('hide.bs.modal', function () {
                modal_src_js.attr("src", '');
                modal_title_js.html('');
                modal_m2_js.html('');
                modal_ft_js.html('');
                modal_aed_js.html('');
                modal_dollar_js.html('');
            });

        });
    }
    showModal();

    $('.modal').on('show.bs.modal', () => {
        let openedModal = $('.modal.in:not(.popapCalc)');
        if (openedModal.length > 0) {
            openedModal.modal('hide');
        }
    });

    // function activeNav() {
    //     $('.menu-item').on('click', function() {
    //         $('.menu-item').removeClass('current-menu-item');
    //         $(this).addClass('current-menu-item');
    //     })
    // };
    // activeNav();



    function showMore(classItem, btn) {

    // let classItem = '.vacancies__item';
    // let classItem = class;
    let item = $(''+ classItem +'');
    let count = item.length;
    let start = 1;
    let show = 1;

    item.addClass('d-none');
    $('' + classItem + ':lt(' + start + ')').removeClass('d-none');

    $(btn).click(function(e) {
        e.preventDefault();
        $(this).addClass('loading');

        let load = $(this).data('load');
        let more = $(this).data('more');

        start = (start + show <= count) ? start + show : count;

        $(this).text(load);

        setTimeout(() => {
            $(''+ classItem +':lt(' + start + ')').removeClass('d-none');
            if ($(''+ classItem +':not(.d-none)').length == count) {
                $(this).parent().remove();
            }
            $(this).removeClass('loading');
            $(this).text(more);
        }, 500);


    });

    }
    // showMore('.vacancies__item', '.show_more_v_js');


    $('.select').select2({
        placeholder: $(this).data('placeholder'),
        minimumResultsForSearch: Infinity,
        dropdownPosition: 'below'
        // closeOnSelect: false
        // dropdownAutoWidth: false,
    });

    function addDataFancybox() {
        let item = $('.itemForDataFancybox_js');
        let num = 0;

        item.each(function(index, el) {
            $(this).find('a').attr('data-fancybox', num);
            num++;
        });
    }
    addDataFancybox();

    function stikyMenu() {
        // let HeaderTop = $( 'header' ).offset().top;
        let HeaderTop = $( 'header' ).offset().top + $( '.header' ).innerHeight();
        let currentTop = $( window ).scrollTop();

        // console.log(HeaderTop);
        // console.log(currentTop);

        setNavbarPosition();

        $( window ).scroll( function () {
            setNavbarPosition();
        } );

        function setNavbarPosition() {
            currentTop = $( window ).scrollTop();

            if ( currentTop > HeaderTop ) {
                $( 'header' ).addClass( 'stiky' );
            } else {
                $( 'header' ).removeClass( 'stiky' );
            }
        }
    }
    stikyMenu();

    // start animate numbers
    function onVisible( selector, callback, repeat = false ) {

    let options = {
        threshold: [ 0.5 ]
    };
    let observer = new IntersectionObserver( onEntry, options );
    let elements = document.querySelectorAll( selector );

    for ( let elm of elements ) {
        observer.observe( elm );
    }

    function onEntry( entry ) {
        entry.forEach( change => {
            let elem = change.target;
            // console.log(change);
            // console.log(elem.innerHTML);
            if ( change.isIntersecting ) {
                if ( !elem.classList.contains( 'show' ) || repeat ) {
                    elem.classList.add( 'show' );
                    callback( elem );
                }
            }
        } );
    }
    }

    onVisible( '.percent__number span', function ( e ) {
        animateNumber( e, e.innerHTML );
    } );

    function animateNumber( elem, final, duration = 2000 ) {
        let start = 0;
        // console.log('init');
        setInterval( function () {
            if ( final >= start ) {
                elem.innerHTML = start++;
            }
        }, duration / final );
    }
    // end animate numbers

    $(function(){
        $(".tel").mask("+7 999 999 99 99");
    });


    // Деление чисел на разряды Например из строки 10000 получаем 10 000
    // Использование: thousandSeparator(1000) или используем переменную.
    // function thousandSeparator(str) {
    //     var parts = (str + '').split('.'),
    //         main = parts[0],
    //         len = main.length,
    //         output = '',
    //         i = len - 1;
    //
    //     while(i >= 0) {
    //         output = main.charAt(i) + output;
    //         if ((len - i) % 3 === 0 && i > 0) {
    //             output = ' ' + output;
    //         }
    //         --i;
    //     }
    //
    //     if (parts.length > 1) {
    //         output += '.' + parts[1];
    //     }
    //     return output;
    // };
    //
    // console.log(thousandSeparator(700));

    function changeЫlide() {

        let el = $('.slide__img');

        // let width = el.width();
        // // let showWidth = width
        // console.log(width);

        $( ".slide_js" ).slider({
            range: "min",
            value: 1000,
            min: 0,
            max: 5000,
            step: 1,
            slide: function( event, ui ) {
                // console.log(event);
                console.log(ui.value/100);
                // $( "#slide-price-min" ).text( thousandSeparator(ui.value) );
                // $( "#square_field" ).val( ui.value );
                // $('.quiz-arrow__next').removeAttr('disabled');
                el.css({
                    // transform: `translateX(${ui.vaiue)`em),
                    transform: `translateX(-${ui.value/100}%)`
                })

            }
        });

    };
    changeЫlide();



    // $( "#current_text" ).text( $( ".js-slide" ).slider( "value" ) );
    // $( "#square_field" ).val( $( ".js-slide" ).slider( "value" ) );

})

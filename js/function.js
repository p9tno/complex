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

    $('.modal').on('show.bs.modal', () => {
        let openedModal = $('.modal.in:not(.popapCalc)');
        if (openedModal.length > 0) {
            openedModal.modal('hide');
        }
    });

    function activeNav() {
        $('.menu-item').on('click', function() {
            $('.menu-item').removeClass('current-menu-item');
            $(this).addClass('current-menu-item');
        })
    };
    activeNav();



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
        minimumResultsForSearch: Infinity
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

    onVisible( '.programsInfo__number', function ( e ) {
        animateNumber( e, e.innerHTML );
    } );

    function animateNumber( elem, final, duration = 1000 ) {
        let start = 0;
        // console.log('init');
        setInterval( function () {
            if ( final > start ) {
                elem.innerHTML = start++;
            }
        }, duration / final );
    }


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

})
// end animate numbers

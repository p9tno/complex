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


    function openMobileNav() {
        $('.header__toggle').click(function(event) {
            // console.log('Показ меню');
            $('.navbar').toggleClass('navbar_open');
            $('.header__toggle').toggleClass('header__toggle_open');
            // $('.nav_open_bg').toggleClass('nav_open_bg_open');
            $( 'body' ).toggleClass( 'nav-open' );
        });
    };
    openMobileNav();

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

    // Stiky menu // Липкое меню. При прокрутке к элементу #header добавляется класс .stiky который и стилизуем
    function stikyMenu() {
        let HeaderTop = $( 'header' ).offset().top;
        // let HeaderTop = $( 'header' ).offset().top + $( '.home' ).innerHeight();
        let currentTop = $( window ).scrollTop();

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

            // $( '.navbar__link' ).each( function () {
            //     let section = $( this ).attr( 'href' );
            //
            //     if ( $( 'section' ).is( section ) ) {
            //         let offset = $( section ).offset().top;
            //
            //         if ( offset <= currentTop && offset + $( section ).innerHeight() > currentTop ) {
            //             $( this ).addClass( 'active' );
            //         } else {
            //             $( this ).removeClass( 'active' );
            //         }
            //     }
            // } );
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



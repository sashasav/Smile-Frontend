// open menu
$('.nav').addClass('open');
$('.bt-nav').click( function() {
    $(this).parent().toggleClass( function() {
        if ( $(this).hasClass('open') ) {
            return 'close';
        } else
        if ( $(this).hasClass('close') ) {
            return 'open';
        }
    });
});


$(window).resize(function () {
    if ($(window).width() < 768) {
        var mainTop = $('.section-main').height();

        $(window).scroll(function() {                  // assign scroll event listener
            var currentScroll = $(window).scrollTop(); // get current position

            if (currentScroll >= mainTop) {           // apply position: fixed if you
                $('.bt-nav').css({                      // scroll to that element or below it
                    position: 'fixed',
                    right: '13px',
                    top: '31px',
                    background: '#000'
                }).closest('.nav').find('nav').css({
                    position: 'fixed'
                });
            } else {                                   // apply position: static
                $('.bt-nav').css({                      // if you scroll above it
                    position: 'absolute',
                    background: 'transparent'
                }).closest('.nav').find('nav').css({
                    position: 'absolute'
                });
            }
        });
    }
});

$('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
    if($('.nav.open.close')) {
        $('.nav.open.close').removeClass('close')
    }
});

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dotsEach:3,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:3
        }
    }
});

// init Isotope
var $grid = $('.grid').isotope({
    itemSelector: '.grid-item',
    layoutMode: 'fitRows'
});
// filter functions
var filterFns = {
    // show if number is greater than 50
    numberGreaterThan50: function() {
        var number = $(this).find('.number').text();
        return parseInt( number, 10 ) > 50;
    },
    // show if name ends with -ium
    ium: function() {
        var name = $(this).find('.name').text();
        return name.match( /ium$/ );
    }
};
// bind filter button click
$('.filters-button-group').on( 'click', 'button', function() {
    var filterValue = $( this ).attr('data-filter');
    // use filterFn if matches value
    filterValue = filterFns[ filterValue ] || filterValue;
    $grid.isotope({ filter: filterValue });
});
// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
        $buttonGroup.find('.is-checked').removeClass('is-checked');
        $( this ).addClass('is-checked');
    });
});

(function() {

    function extend( a, b ) {
        for( var key in b ) {
            if( b.hasOwnProperty( key ) ) {
                a[key] = b[key];
            }
        }
        return a;
    }

    function SVGButton( el, options ) {
        this.el = el;
        this.options = extend( {}, this.options );
        extend( this.options, options );
        this.init();
    }

    SVGButton.prototype.options = {
        speed : { reset : 800, active : 150 },
        easing : { reset : mina.elastic, active : mina.easein }
    };

    SVGButton.prototype.init = function() {
        this.shapeEl = this.el.querySelector( 'span.morph-shape' );

        var s = Snap( this.shapeEl.querySelector( 'svg' ) );
        this.pathEl = s.select( 'path' );
        this.paths = {
            reset : this.pathEl.attr( 'd' ),
            active : this.shapeEl.getAttribute( 'data-morph-active' )
        };

        this.initEvents();
    };

    SVGButton.prototype.initEvents = function() {
        this.el.addEventListener( 'mousedown', this.down.bind(this) );
        this.el.addEventListener( 'touchstart', this.down.bind(this) );

        this.el.addEventListener( 'mouseup', this.up.bind(this) );
        this.el.addEventListener( 'touchend', this.up.bind(this) );

        this.el.addEventListener( 'mouseout', this.up.bind(this) );
    };

    SVGButton.prototype.down = function() {
        this.pathEl.stop().animate( { 'path' : this.paths.active }, this.options.speed.active, this.options.easing.active );
    };

    SVGButton.prototype.up = function() {
        this.pathEl.stop().animate( { 'path' : this.paths.reset }, this.options.speed.reset, this.options.easing.reset );
    };

    [].slice.call( document.querySelectorAll( 'button.button--effect-1' ) ).forEach( function( el ) {
        new SVGButton( el );
    } );

    [].slice.call( document.querySelectorAll( 'button.button--effect-2' ) ).forEach( function( el ) {
        new SVGButton( el, {
            speed : { reset : 650, active : 650 },
            easing : { reset : mina.elastic, active : mina.elastic }
        } );
    } );

})();

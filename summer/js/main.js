$('.section-summer .owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    items:1,
    autoplay:true,
    autoplayTimeout:5000,
    dots:false
});

$('.section-popular .owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    autoplay:false,
    autoplayTimeout:5000,
    dots:false,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        768:{
            items:3,
            nav:false
        },
        1024:{
            nav:true
        },
        1440:{
            items:5,
            nav:true
        }
    }
});

$('.section-mailing .owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:false,
    items:10,
    autoplay:true,
    autoplayTimeout:5000,
    dots:false,
    autoWidth:true
});

$('.fa-bars').on('click', function() {
    $('.ul-nav').slideToggle();
});

$(window).resize(function () {
    if($(window).width > 480) {
        $('.summer-nav .ul-nav').css('display', 'flex');
    }
});

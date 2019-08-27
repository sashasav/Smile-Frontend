$(function() {

    $('.header__menu-btn').on('click', function() {
        $('.header__nav ul').slideToggle();
    });

    $(".owl-carousel").owlCarousel({
        items: 1,
        navigation : true, 
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem: true,
        pagination: false,
    	rewindSpeed: 500
    });

    var owl = $('.owl-carousel');
    owl.owlCarousel();
    
    $('.owl-next').click(function() {
        owl.trigger('next.owl.carousel');
    })
    // Go to the previous item
    $('.owl-prev').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl.trigger('prev.owl.carousel', [300]);
    })
});
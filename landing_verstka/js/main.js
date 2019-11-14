$(function() {
    
    var lisSumm = 0;
    var lis = $('.header__nav ul li');

    for (var i = 0; i < lis.length; i ++) {
        lisSumm += lis[i].clientWidth;
        console.log(lisSumm);
    }

    if (lisSumm > $(window).width() - 350) {

        $('.header__menu-btn').css('display', 'block');
        $('.header__nav ul').prop('style', 'display: none');
        $('.header__nav ul li').css({
            'display': 'block',
            'border-top': '1px solid #000',
            'padding-right': '30px',
            'margin': '0'
        });
        $('.header__nav').css({
            'position': 'absolute'
        });

        


        console.log('menu is wider');
    } else {
        console.log('menu is smaller');
    }
    
    $('.header__menu-btn').on('click', function() {
        $('.header__nav ul').slideToggle();
    });



    // if ($(window).width() > 600) {
    //     // $('.header nav ul').css("display", "block");
    // }
    // console.log($('.header__nav ul').width());
    // console.log($('.header__nav ul').width());
    
    
    // console.log(lis);
    
    // console.log($('.header nav li').width());




    // console.log($(window).width());

    // if ($('.header__nav ul').width() > $(window).width() * 1.2) {
    //     
    // }


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

    $('.owl-prev').click(function() {
        // With optional speed parameter
        owl.trigger('prev.owl.carousel', [300]);
    })
});
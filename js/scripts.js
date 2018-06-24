$( document ).ready(function() {
    // WOW
    wow = new WOW(
        {
            mobile: false
        }
    );
    wow.init();

    // Header Scroll
    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 50) {
            $('#header').addClass('fixed');
        } else {
            $('#header').removeClass('fixed');
        }
    });

    // Slider
    $('.tectimotial__img-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.testimonials__comment-slider'
    });
    $('.testimonials__comment-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.tectimotial__img-slider',
        arrows: false,
        dots: true,
        focusOnSelect: true,
        autoplay: true,
        autoplaySpeed: 15000
    });

    // Page Scroll
    var sections = $('section');
    nav = $('nav[role="navigation"]');

    $(window).on('scroll', function () {
        var cur_pos = $(this).scrollTop();
        sections.each(function() {
            var top = $(this).offset().top - 76;
            bottom = top + $(this).outerHeight();
            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find('a').removeClass('nav__link_active');
                nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('nav__link_active');
            }
        });
    });
    nav.find('a').on('click', function () {
        var $el = $(this),
        id = $el.attr('href');
        $('html, body').animate({
            scrollTop: $(id).offset().top - 75
        }, 500);
        return false;
    });



    // button to top
    var $btnTop = $('.btn-to-top');
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 100){
            $btnTop.fadeIn(500);
        } else {
            $btnTop.fadeOut(500);
        }
    });

    $btnTop.click(function () {
        $('body, html').animate({scrollTop: 0}, 800);
    });



    //
    $('.nav__link').click(function () {
        $('.header .nav').removeClass('active');
        $('.menu-toggle').removeClass('active')
    });

    // menu-toogle
    var $menuToogle = $('.menu-toggle');
    // делает крестик
    $menuToogle.click(function () {
        $('.menu-toggle').toggleClass('active')
    });

    $menuToogle.click(function () {
        $('.header .nav').toggleClass('active');
    });






});

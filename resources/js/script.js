$(function (){
    $('.js--section-features').waypoint(function (direction){
        if(direction == "down"){
            $('nav').addClass('sticky');
        }
        else {
            $('nav').removeClass('sticky');
        }
    },{
        offset: '60px'
    });

    /*scrol on btns*/

    $('.js--scroll-to-plans').click(function (){
        $('html, body').animate({
            scrollTop: $('.js--section-plans').offset().top
        }, 1500);
    });

    $('.js--scroll-to-start').click(function (){
        $('html, body').animate({
            scrollTop: $('.js--section-features').offset().top
        }, 1000);
    });

    /*Navigation scroll*/

    // Select all links with hashes
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function() {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });

    /*animate*/

    $('.js--wp-1').waypoint(function (direction){
        $('.js--wp-1').addClass('animate__animated animate__fadeInDown');
    }, {
        offset: '50%'
    });

    $('.js--wp-2').waypoint(function (direction){
        $('.js--wp-2').addClass('animate__animated animate__bounceInUp');
    }, {
        offset: '50%'
    });

    $('.js--wp-3').waypoint(function (direction){
        $('.js--wp-3').addClass('animate__animated animate__fadeIn');
    }, {
        offset: '50%'
    });

    $('.js--wp-4').waypoint(function (direction){
        $('.js--wp-4').addClass('animate__animated animate__rubberBand');
    }, {
        offset: '50%'
    });

    $('.js--wp-5').waypoint(function (direction){
        $('.js--wp-5').addClass('animate__animated animate__bounceInDown');
    }, {
        offset: '100%'
    });

    $('.js--wp-6').waypoint(function (direction){
        $('.js--wp-6').addClass('animate__animated animate__hinge animate__delay-1s');
    }, {
        offset: '100%'
    });

    $('.js--wp-7').waypoint(function (direction){
        $('.js--wp-7').addClass('animate__animated animate__backInLeft animate__delay-3s');
    }, {
        offset: '100%'
    });

    $('.js--wp-8').waypoint(function (direction){
        $('.js--wp-8').addClass('animate__animated animate__flipInX');
    }, {
        offset: '50%'
    });

    $('.js--wp-9').on('mouseover',function (){
        $(this).toggleClass('animate__animated animate__shakeY');
    });

    $('.js--wp-10').on('mouseover',function (){
        $(this).toggleClass('animate__animated animate__rubberBand');
    })

    /*->Mobile nav<-*/

    $('.js--nav-icon').click(function (){
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');

        nav.slideToggle(500);

        if(icon.hasClass('ion-ios-menu')){
            icon.addClass('ion-ios-close');
            icon.removeClass('ion-ios-menu');
        }
        else {
            icon.addClass('ion-ios-menu');
            icon.removeClass('ion-ios-close');
        }

    });

    /*-->Maps<--*/

    new GMaps({
        div: '.map',
        lat: 41.6395,
        lng: 22.4679
    });


});
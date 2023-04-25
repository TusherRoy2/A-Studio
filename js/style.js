$(document).ready(function (){
    'use strict'

    // code-start
    //   owl carousel
    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout:3000,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })

    $('.menu .menu-icon .fa-bars').on('click',function (){
        $('nav .menu ul').slideDown(700)
    })

    $('.menu .menu-icon .fa-times').on('click',function (){
        $('nav .menu ul').slideUp(700)
    })

    $(window).resize(function (){
        let screenSize = $(window).width()

        if (screenSize > 991){
            $('nav .menu ul').removeAttr("style");
        }

    })

    // venobox

    new VenoBox();


}) (jQuery);
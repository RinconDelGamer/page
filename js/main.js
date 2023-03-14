/*====================================================================
 !                  Rincon del Gamer - Main JS
 *====================================================================*/
(function($) {
    "use strict";
    var cfg = {
        scrollDuration : 800, // Smoothscroll duration in ms
        mailChimpURL   : ''   // Mailchimp url
    },

    $WIN = $(window);
    //* Add the User Agent to the <html>
    var doc = document.documentElement;
    doc.setAttribute('data-useragent', navigator.userAgent);

    /* Preloader */
    var ssPreloader = function() {
        $("html").addClass('ss-preload');
        $WIN.on('load', function() {
            // Force page scroll position to top at page refresh
            $('html, body').animate({ scrollTop: 0 }, 'normal');

            // Will first fade out the loading animation 
            $("#loader").fadeOut("slow", function() {
                // Will fade out the whole DIV that covers the website.
                $("#preloader").delay(300).fadeOut("slow");
            }); 
            
            // For content animations 
            $("html").removeClass('ss-preload');
            $("html").addClass('ss-loaded');
        });
    };

   /* Search */
    var ssSearch = function() {
        var searchWrap = $('.search-block'),
            searchField = searchWrap.find('.search-field'),
            closeSearch = searchWrap.find('.search-close'),
            searchTrigger = $('.search-trigger'),
            siteBody = $('body');

        searchTrigger.on('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            var $this = $(this);
            siteBody.addClass('search-is-visible');
            setTimeout(function(){
                searchWrap.find('.search-field').focus();
            }, 100);
        });

        closeSearch.on('click', function(e) {
            var $this = $(this);
            e.stopPropagation(); 
            if(siteBody.hasClass('search-is-visible')){
                siteBody.removeClass('search-is-visible');
                setTimeout(function(){
                    searchWrap.find('.search-field').blur();
                }, 100);
            }
        });

        searchWrap.on('click',  function(e) {
            if( !$(e.target).is('.search-field') ) {
                closeSearch.trigger('click');
            }
        });
            
        searchField.on('click', function(e){
            e.stopPropagation();
        });
            
        searchField.attr({placeholder: 'Escriba aquí', autocomplete: 'off'});

        /*
            TODO: Arrange the Search Fucntion to call API and request the respective Answers
         */
        searchField.on('keypress', function(e){
            if(e.key === 'Enter'){
                console.log('Buscando ' + this.value);
            }
        });
    };

    /* Menu */
    var ssMenu = function() {
        var menuToggle = $('.header__menu-toggle'),
            siteBody = $('body');

        menuToggle.on('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            menuToggle.toggleClass('is-clicked');
            siteBody.toggleClass('nav-wrap-is-visible');
        });

        $('.header__nav .has-children').children('a').on('click', function (e) {
            e.preventDefault();
            $(this).toggleClass('sub-menu-is-open')
                .next('ul')
                .slideToggle(200)
                .end()
                .parent('.has-children')
                .siblings('.has-children')
                .children('a')
                .removeClass('sub-menu-is-open')
                .next('ul')
                .slideUp(200);
        });
    };


    /* Masonry */ 
    var ssMasonryFolio = function () {
        var containerBricks = $('.masonry');
        containerBricks.masonry({
            itemSelector: '.masonry__brick',
            columnWidth: '.grid-sizer',
            percentPosition: true,
            resize: true
        });

        // Layout Masonry after each image loads
        containerBricks.imagesLoaded().progress( function() {
            containerBricks.masonry('layout');
        });
    };

    /* Animate bricks */
    var ssBricksAnimate = function() {
        var animateEl = $('.animate-this');
        $WIN.on('load', function() {
            setTimeout(function() {
                animateEl.each(function(ctr) {
                    var el = $(this);
                    setTimeout(function() {
                        el.addClass('animated');
                    }, ctr * 200);
                });
            }, 300);
        });

        $WIN.on('resize', function() {
            // Remove animation classes
            animateEl.removeClass('animate-this animated');
        });
    };

   /* Slick slider */
    var ssSlickSlider = function() {
        var $gallery = $('.slider__slides').slick({
            arrows: false,
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true,
            pauseOnFocus: false,
            fade: true,
            cssEase: 'linear'
        });
        
        $('.slider__slide').on('click', function() {
            $gallery.slick('slickGoTo', parseInt($gallery.slick('slickCurrentSlide'))+1);
        });
    };


   /* Smooth scrolling */
    var ssSmoothScroll = function() {
        $('.smoothscroll').on('click', function (e) {
            var target = this.hash,
            $target    = $(target);
            
            e.preventDefault();
            e.stopPropagation();

            $('html, body').stop().animate({
                'scrollTop': $target.offset().top
            }, cfg.scrollDuration, 'swing').promise().done(function () {

                // check if menu is open
                if ($('body').hasClass('menu-is-open')) {
                    $('.header-menu-toggle').trigger('click');
                }
                window.location.hash = target;
            });
        });
    };


   /* Alert boxes */
    var ssAlertBoxes = function() {
        $('.alert-box').on('click', '.alert-box__close', function() {
            $(this).parent().fadeOut(500);
        });
    };

    /* Back to Top */
    var ssBackToTop = function() {
        var pxShow      = 500,
            goTopButton = $(".go-top")
        // Show or hide the button
        if ($(window).scrollTop() >= pxShow) goTopButton.addClass('link-is-visible');

        $(window).on('scroll', function() {
            if ($(window).scrollTop() >= pxShow) {
                if(!goTopButton.hasClass('link-is-visible')) goTopButton.addClass('link-is-visible')
            } else {
                goTopButton.removeClass('link-is-visible')
            }
        });
    };


   /* Initialize */
    (function clInit() {
        ssPreloader();
        ssSearch();
        ssMenu();
        ssMasonryFolio();
        ssBricksAnimate();
        ssSlickSlider();
        ssSmoothScroll();
        ssAlertBoxes();
        ssBackToTop();
    })();
})(jQuery);
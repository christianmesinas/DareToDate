/**
* Template Name: Tempo - v2.0.0
* Template URL: https://bootstrapmade.com/tempo-free-onepage-bootstrap-theme/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

 var images = ["C:/Users/Guzma/web development/daretodate/images/images/iStock-916475400.jpg", "C:/Users/Guzma/web development/daretodate/images/images/photography-of-couple-holding-hands-842546.jpg"];

!(function($) {
  "use strict";

  // Smooth scroll for the navigation menu and links with .scrollto classes
  $(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function(e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      e.preventDefault();
      var target = $(this.hash);
      if (target.length) {

        var scrollto = target.offset().top;
        var scrolled = 20;

        if ($('#header').length) {
          scrollto -= $('#header').outerHeight()

          if (!$('#header').hasClass('header-scrolled')) {
            scrollto += scrolled;
          }
        }

        if ($(this).attr("href") == '#header') {
          scrollto = 0;
        }

        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu, .mobile-nav').length) {
          $('.nav-menu .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
        return false;
      }
    }
  });
  // Mobile Navigation
  if ($('.nav-menu').length) {
    var $mobile_nav = $('.nav-menu').clone().prop({
      class: 'mobile-nav d-lg-none'
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu icofont-2x"></i></button>');
    $('body').append('<div class="mobile-nav-overly"></div>');

    $(document).on('click', '.mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
      $('.mobile-nav-overly').toggle();
    });

    $(document).on('click', '.mobile-nav .drop-down > a', function(e) {
      e.preventDefault();
      $(this).next().slideToggle(300);
      $(this).parent().toggleClass('active');
    });

    $(document).click(function(e) {
      var container = $(".mobile-nav, .mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
      }
    });
  } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
  }
  // Toggle .header-scrolled class to #header when page is scrolled
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
    }
  });

  if ($(window).scrollTop() > 100) {
    $('#header').addClass('header-scrolled');
  }

  // dropdown gender show value
  $("#genderDropdown li a").click(function(){

    $(".events-toggle1:first-child").html($(this).text()+' <span class="caret"></span>');

  });
  // dropdown age show value
  $("#ageDropdown li a").click(function(){

    $(".events-toggle2:first-child").html($(this).text()+' <span class="caret"></span>');

  });

  //on click accordion icons
  $( ".btn-link" ).click(function() {
    $(this).find("i").toggleClass("fa-minus fa-plus");
});

//FAQ percentage increase
$('.Count').each(function () {
  var $this = $(this);
  jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
    duration: 2500,
    easing: 'swing',
    step: function () {
      $this.text(Math.ceil(this.Counter));
    }
  });
});

// image hearts change after time
var images = ["./images/Tekengebied 1 kopie.png"]
var current = 0;
setInterval(function(){

  $('#flip').attr('src', images[current]);
  current = (current < images.length - 1)? current + 1: 0;

},2450);
  // if dropdown is selected add inputs for coupon
  //$("#genderDropdown li a").each(function(){
  //    var kortingInput = $(this).html();
  //    addClass(kortingInput);
//});




  // Back to top button
//  $(window).scroll(function() {
//    if ($(this).scrollTop() > 100) {
//      $('.back-to-top').fadeIn('slow');
//    } else {
//      $('.back-to-top').fadeOut('slow');
//    }
//  });

//  $('.back-to-top').click(function() {
//    $('html, body').animate({
//      scrollTop: 0
//    }, 1500, 'easeInOutExpo');
//    return false;
//  });
//hero images change
//$(function () {
   //     var i = 0;
   //     $("#hero").css("background-image", "url(" + images[i] + ")");
   //     setInterval(function () {
   //         i++;
   //         if (i == images.length) {
   //             i = 0;
   //         }
   //         $("#hero").fadeOut("slow", function () {
   //             $(this).css("background-image", "url(" + images[i] + ")");
   //             $(this).fadeIn("slow");
   //         });
   //     }, 5000);
   // });

})(jQuery);

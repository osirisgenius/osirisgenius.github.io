// ANIMATION SLIDE FOR TIMELINE //

$(function(){

    window.sr = ScrollReveal();
  
    if ($(window).width() < 768) {
  
        if ($('.timeline-content').hasClass('js--fadeInLeft')) {
            $('.timeline-content').removeClass('js--fadeInLeft').addClass('js--fadeInRight');
        }
  
        sr.reveal('.js--fadeInRight', {
          origin: 'right',
          distance: '300px',
          easing: 'ease-in-out',
          duration: 1000,
        });


        sr.reveal('.js--fadeInLeft1', {
          origin: 'left',
          distance: '1000px',
            easing: 'ease-in-out',
          duration: 1000,
        });

        sr.reveal('.js--fadeInLeft2', {
          origin: 'left',
          distance: '600px',
            easing: 'ease-in-out',
          duration: 1000,
         });


        sr.reveal('.js--fadeInLeft3', {
          origin: 'left',
          distance: '300px',
          easing: 'ease-in-out',
          duration: 1000,
        });
  
    } else {
        
    sr.reveal('.js--fadeInLeft', {
      origin: 'left',
      distance: '300px',
      easing: 'ease-in-out',
      duration: 800,
    });

    sr.reveal('.js--fadeInRight', {
      origin: 'right',
      distance: '300px',
      easing: 'ease-in-out',
      duration: 1000,
    });

    sr.reveal('.js--fadeInLeft1', {
          origin: 'left',
          distance: '1000px',
            easing: 'ease-in-out',
          duration: 1500,
        });

    sr.reveal('.js--fadeInLeft2', {
          origin: 'left',
          distance: '600px',
            easing: 'ease-in-out',
          duration: 2000,
    });


    sr.reveal('.js--fadeInLeft3', {
      origin: 'left',
      distance: '300px',
        easing: 'ease-in-out',
      duration: 3000,
    });
        sr.reveal('.js--fadeup', {
          origin: 'top',
          distance: '300px',
            easing: 'ease-in-out',
          duration: 2000,
        });

        sr.reveal('.js--fadeDown', {
          origin: 'bottom',
          distance: '300px',
            easing: 'ease-in-out',
          duration: 1000,
        });
      }
  
  });
  
//*****TIMELINE SHOW AND HIDE ********/

  $(document).ready(function() {
    $(".milestone-show").click(function () {
    $(".timehide").show(1000)
    $(".milestone-show").slideToggle("slow");
    $(".milestone-hide").slideToggle("slow");
 });
 });

 $(document).ready(function() {
  $(".milestone-hide").click(function () {
  $(".timehide").hide(1000)
  $(".milestone-show").slideToggle("slow");
  $(".milestone-hide").slideToggle("slow");
});
});


// NAVMENU FOR MOBILE

$(document).ready(function(){
  $(".menu-toggler").click(function(){
    
    if ($(".fa-bars").hasClass("fa-bars")){

    $(".navbar").slideToggle("slow");
    $(".fa-bars").addClass("fa-close");
    $(".fa-bars").removeClass(" fa-bars");}

    else {

    $(".navbar").slideToggle("slow");
    $(".fa-close").addClass("fa-bars");
    $(".fa-close").removeClass("fa-close");}

  });
});

//NAVMENU SCROLL
$(document).ready(function() {
  $(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
      $("menu-toggler").animate({backgroundColor: 'rgba(255,255,255,.9)'}, 1000);
    }
  });
});


$(document).ready(function(){
    $(window).scroll(function() {
      if ($(document).scrollTop() > 50) {
    $(".cwhite").addClass("cblue");
    $(".cwhite").removeClass(" cwhite");}
  }
  });
});

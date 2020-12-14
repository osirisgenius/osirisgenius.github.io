
// MEDIA QUERY HOME NAVIGATION SHOW or HIDE //
const iconSelect = document.querySelector('#iconTrigger')
const icon = document.querySelector('#iconBar')
const menuBar = document.querySelector('.navigation')
const caret = document.querySelector('#caretIcon')

iconSelect.addEventListener('click',showNav)

function showNav() {
    if (icon.classList.contains('fa-bars')){
        icon.classList.remove('fa-bars')
        icon.classList.add('fa-close')

        menuBar.classList.remove('hide')
        menuBar.classList.add('show')

        caret.style.display ='none'
    }

    else{
        icon.classList.remove('fa-close')
        icon.classList.add('fa-bars')

        menuBar.classList.remove('show')
        menuBar.classList.add('hide')
        //REMOVE SUBNAV ON COMPANY//
        compSub.classList.remove('show')
        compSub.classList.add('hide')
    }
}

//DESKTOP HOME NAVIGATION COMPANY SUBNAV HIDE/SHOW //

const compSub = document.querySelector('#compsubnav')
const compShow = document.querySelector('#compshow')


compShow.addEventListener('click',showSub)

function showSub(){
    if (compSub.classList.contains('hide')){
        compSub.classList.remove('hide')
        compSub.classList.add('show')
    }
    else{
        compSub.classList.remove('show')
        compSub.classList.add('hide')
    }

}

// SLIDESHOW FOR ADVERTISEMENT //


var slideshows = document.querySelectorAll('[data-component="slideshow"]');
      // Apply to all slideshows that you define with the markup wrote
  slideshows.forEach(initSlideShow);

  function initSlideShow(slideshow) {

    var slides = document.querySelectorAll(`#${slideshow.id} [role="list"] .slide`); // Get an array of slides

    var index = 0, time = 3000;
    slides[index].classList.add('active');  
    
    setInterval( () => {
      slides[index].classList.remove('active');
      
      //Go over each slide incrementing the index
      index++;
      
      // If you go over all slides, restart the index to show the first slide and start again
      if (index === slides.length) index = 0; 
      
      slides[index].classList.add('active');

    }, time);
  }

//END OF SLIDESHOW//

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
          duration: 800,
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
          duration: 800,
        });
  
    }
    
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
          duration: 800,
        });
  
  
  });
  
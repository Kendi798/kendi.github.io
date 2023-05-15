$(document).ready(function() {

  $('#menu').click(function() {
    $(this).toggleClass('fa-times');
    $('header').toggleClass('toggle');
  });

  if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    // Only activate scroll animation for mobile devices
    $('a[href*="#"]').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top,
      }, 500, 'linear');
    });
  }

  $(window).on('scroll load', function() {
    if(!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {
      // Only remove toggle class for non-mobile devices
      $('#menu').removeClass('fa-times');
      $('header').removeClass('toggle');
    }
  });

});


const rocket = document.querySelector('.scroll-top');

rocket.addEventListener('click', () => {
  $('html, body').animate({
    scrollTop: 0
  }, 500);
});



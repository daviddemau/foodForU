$(document).ready(function() {
  //sticky navigation on scroll
  $('.features-section').waypoint(function(direction) {
    if(direction == 'down') {
      $('.head-nav').addClass('sticky');
    } else {
      $('.head-nav').removeClass('sticky');
    }
  }, {
    offset: '60px'
  });

  //scroll on elements
  $('.see-plans').on('click', function() {
    $('html, body').animate({scrollTop: $('.pricing').offset().top}, 1000)
  });
  $('.start').on('click', function() {
    $('html, body').animate({scrollTop: $('.features-section').offset().top}, 1000)
  });

  // Select all links with hashes - create the scrooling effect
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
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

  // mobile navigation
  $('.mobile-nav-icon i').click(function() {
    var nav = $('.menu');
    var icon = $('.mobile-nav-icon i');

    nav.slideToggle(100);
    if (icon.hasClass('ion-navicon-round')) {
      // icon.removeClass('ion-navicon-round');
      icon.addClass('ion-close-round');
    } else {
      // icon.removeClass('ion-close-round');
      icon.addClass('ion-navicon-round');
    }
  });
  //
});

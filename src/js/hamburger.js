$('.hamburger').on('click', function(e) {
  e.preventDefault();
  $('.hamburger').toggleClass('hamburger__is-open');
  $('.navigation-mobile').toggleClass('navigation-mobile__is-open');
});

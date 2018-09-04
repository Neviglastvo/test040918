require('slick-carousel');

var $slider = $('.js-hero-slider');
var slideCount = null;

$( document ).ready(function() {

  $slider.slick({
    arrows: true,
    prevArrow: '<div class="slider-arrow slider-arrow__prev"><?xml version="1.0" encoding="UTF-8" standalone="no"?><svg viewBox="0 0 252.1 477.2" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M248.2,229.1L23.1,4C17.8-1.3,9.3-1.3,4,4s-5.3,13.8,0,19.1l215.5,215.5L4,454.1c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C253.4,242.9,253.4,234.3,248.2,229.1z"/></svg></div>',
    nextArrow: '<div class="slider-arrow slider-arrow__next"><?xml version="1.0" encoding="UTF-8" standalone="no"?><svg viewBox="0 0 252.1 477.2" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M248.2,229.1L23.1,4C17.8-1.3,9.3-1.3,4,4s-5.3,13.8,0,19.1l215.5,215.5L4,454.1c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C253.4,242.9,253.4,234.3,248.2,229.1z"/></svg></div>',
    appendArrows: $('.slider-controls'),
    dots: false,
    dotsClass: 'slider-dots',
    appendDots: $('.slider-controls'),
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    rows: 0,
    customPaging: function(slider, i) {
    //FYI just have a look at the object to find available information
    //press f12 to access the console in most browsers
    //you could also debug or look in the source
      console.log(slider);
      return (i + 1) + '/' + slider.slideCount;
    }
  });

});

$slider.on('init', function(event, slick) {
  slideCount = slick.slideCount;
  setSlideCount();
  setCurrentSlideNumber(slick.currentSlide);
});

$slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
  setCurrentSlideNumber(nextSlide);
});

function setSlideCount() {
  var $el = $('.slider-counter').find('.js-slider-counter-total');
  $el.text(slideCount);
}

function setCurrentSlideNumber(currentSlide) {
  var $el = $('.slider-counter').find('.js-slider-counter-current');
  $el.text(currentSlide + 1);
}

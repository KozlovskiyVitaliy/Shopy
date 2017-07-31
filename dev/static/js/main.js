;
// Начинать писать отсюда!!!!
$(document).ready(function(){

  // Слайдер на главной странице
  $('.js-index-slider').bxSlider({
    pagerCustom: '.js-index-slider__pager',
    controls: false
  });

  // Слайдер продукта
  $('.product-item__slider').bxSlider({
    pagerCustom: '.product-item__colors',
    controls: false
  });

  $('.sizes-list li').click(function(){
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
  });
});
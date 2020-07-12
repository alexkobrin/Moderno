$(function() {


$(".rate-star").rateYo({
        starWidth: "12px",
        rating: 5,
        readOnly: true
        
      });
 var mixer =  mixitup('.products__inner-box')
   
      $('.product-slider__inner').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: true,
        arrows:false

        
      });
  
    });

$('.icon-th-large').on('click', function(){
  $('.product__item').removeClass('list');
  $('.icon-th-large').addClass('active');
  $('.icon-th-list').removeClass('active');
  
});

 $('.icon-th-list').on('click', function(){
  $('.product__item').addClass('list');
  $('.icon-th-list').addClass('active');
  $('.icon-th-large').removeClass('active');
});

      $(".js-range-slider").ionRangeSlider({
      type: "double",
      min: 0,
      max: 1000,
      from: 0,
      to: 600,
      prefix: "$"
    });
  
    
   
 
   
 

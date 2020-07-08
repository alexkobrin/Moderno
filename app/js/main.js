$ (function() {


$(".rate-star").rateYo({
        starWidth: "12px",
        rating: 5,
        readOnly: true
      });

var mixer = mixitup('.products__inner-box');

$('.product-slider__inner').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: true,
    arrows:false

  });
 

    
});


$(document).ready(function() {
  $('.owl-carousel').owlCarousel({
      loop:true,
      margin:10,
      // nav:true,
      autoplay:true,
      dots: true,
      autoplaySpeed:1000,
      paginationSpeed : 500,
      slideSpeed : 500,
      responsive:{
          300:{
              items:1
          },
          500:{
              items:2
          },
          900:{
              items:3
          },
          1200:{
              items:4
          }

      }

  })
});

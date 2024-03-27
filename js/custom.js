

$=jQuery

$(document).ready(function() {

/*
$('.').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: false,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
*/













});







function openNavigation() {
  document.getElementById("mySidenavigation").style.width = "300px";
}

function closeNavigation() {
  document.getElementById("mySidenavigation").style.width = "0";
}









$(window).scroll(function() {
    if ($(this).scrollTop() > 50){  
        $('header.mainheader').addClass("sticky");
    }
    else{
        $('header.mainheader').removeClass("sticky");
    }
});

  $( document ).ready(function() {
      $(".search-btn").click(function(){
      $(".se-tog-cont").slideToggle();
    });

  });


// $(document).ready(function(){
//   $("#mobile_bar-7").click(function(){
//     $("#mySidenavigation20").slideToggle();
//   });
// });












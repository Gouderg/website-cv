'use strict';
$(window).scroll(function(){
    var scrolledFromTop = $(window).scrollTop() + $(window).height();
    $(".hide").each(function(){
      var distanceFromTop = $(this).offset().top;
      if(scrolledFromTop >= distanceFromTop+100){
        var delaiAnim = $(this).data("delai");
        $(this).delay(delaiAnim).animate({
          top:0,
          opacity:1
        });
      }
    });
  });
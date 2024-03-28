(function ($) {
    "use strict";
  
   
    /* ========================== 
    Sticky Header
   ==========================*/
   $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 20) {
      $(".header__style").addClass("sticky");
    } else {
      $(".header__style").removeClass("sticky");
    }
  });

  // Player
  var toggleIcon = document.querySelectorAll('.cover')

  toggleIcon.forEach((element)=>{
      element.addEventListener('click', ()=>{
          document.querySelectorAll('.play-btn-wrap').forEach((el)=>{
              el.classList.add('hide')
          })
      })
  })



}(jQuery));
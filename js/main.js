$(window).on('load', function() { setTimeout(function(){},500);
//
//   $('.after-scroll-top-banner-container').css( "display", "flex" );
//   $('.atzman-intro-container').css( "opacity", "1" );
//   $('.navigation-bar').css( "opacity", "1" );
//
//
//
  $('body').css( "overflow", "auto");
  $('body').css( "overflow-x", "hidden");
  $('html').css( "overflow", "auto");
  $('html').css( "overflow-x", "hidden");

  });

//   var scroll_position_banner = 200 - ( $(window).scrollTop()* (5/6) ) ;
//
//   $('.atzman-intro-container').css( "margin-top", scroll_position_banner );
//
//   if( (1000 - $(window).scrollTop()) > 0 ) {
//     var scroll_position = 1000 - ( $(window).scrollTop() ) ;
//   } else { var scroll_position = 0; }
//
//   $('.navigation-bar').css( "margin-top", scroll_position );
//
//   $(window).scroll(function () {
//
//     var scroll_position_banner = 200 - ( $(window).scrollTop() * (5/6) ) ;
//
//     $('.atzman-intro-container').css( "margin-top", scroll_position_banner );
//
//     if( (1000 - $(window).scrollTop()) > 0 ) {
//       var scroll_position = 1000 - ( $(window).scrollTop() ) ;
//     } else {
//       var scroll_position = 0; }
//
//       $('.navigation-bar').css( "margin-top", scroll_position );
//
//   });
// // });
//
$("#tours").click(function(){
    $("#rotate").toggleClass("down");
    $(".navigation-container").toggleClass("active");
    $(".navigation-tours-container").toggleClass("active");

    // Just checking here for a smooth load of the Tour elements, if they are visible the tour bar should snap in ASAP -> no .delay()
    if ( $(".nav-tours-element").hasClass("active") || ( $(".nav-tours-element").css('opactiy') > '0' ) ) {
      $(".nav-tours-element").toggleClass("active");
    }
    else { $(".nav-tours-element").delay( 500 ).toggleClass("active"); }
});


$("#initiate").click(function(){
  $(".slider").toggleClass("active");
  $(".slider-background").toggleClass("active");
});

$(".slider-background").click(function(){
  $(".slider").toggleClass("active");
  $(".slider-background").toggleClass("active");
  $('.item-transition').toggleClass('active');
});


(function($) {
   $('.item-transition').on('click', function() {
      $(this).toggleClass('active');
   });

   $('.item-animation').on('click', function() {
      if($(this).hasClass('active-in')) {
         $(this).removeClass('active-in');
         $(this).addClass('active-out');
      } else {
         $(this).removeClass('active-out');
         $(this).addClass('active-in');
      }
   });
})(jQuery);



const rippleElements = document.getElementsByClassName("myRipple");

for(let i = 0; i < rippleElements.length; i++) {
  rippleElements[i].onclick = function(e){
    let X = e.pageX - this.offsetLeft;
    let Y = e.pageY - this.offsetTop;
    let rippleDiv = document.createElement("div");
    rippleDiv.classList.add('ripple');
    rippleDiv.setAttribute("style","top:"+Y+"px; left:"+X+"px;");
    let customColor = this.getAttribute('ripple-color');
    if (customColor) rippleDiv.style.background = customColor;
    this.appendChild(rippleDiv);
    setTimeout(function(){
      rippleDiv.parentElement.removeChild(rippleDiv);
    }, 900);
  }
}
//
// // Get the modal
// var modal = document.getElementById('myModal');
//
// // Get the image and insert it inside the modal - use its "alt" text as a caption
//
// var modalImg = document.getElementById("img01");
// var captionText = document.getElementById("caption");
//
// function triggerModal(txt) {
//
//   modal.style.display = "block";
//   modalImg.src = txt;
//   // captionText.innerHTML = this.alt;
//
// }
//
// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("closeCustom")[0];
//
// // When the user clicks on <span> (x), close the modal
// modal.onclick = function() {
//   modal.style.display = "none";
// }
//
// span.onclick = function() {
// modal.style.display = "none";
// }

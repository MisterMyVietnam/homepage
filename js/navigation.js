// onclick Tours

// function scrollBanner(config) {
//
// 	scrollPos = $(this).scrollTop();
//
// 	config.bannerText.css({
// 		'margin-top' : -(scrollPos/2 + 100) + "px",
// 		'opacity' : 1-(scrollPos/300)
// 	});
//
// 	config.banner.css({
// 		'background-position': 'center ' + (-scrollPos/4) + "px"
// 	});
//
// }
//
// $(document).ready(function(){
//
// 	$(window).scroll(function() {
//
// 		scrollBanner({
// 			banner: $('.banner'),
// 			bannerText: $('.banner-text')
// 		});
//
// 	});
//
// });

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

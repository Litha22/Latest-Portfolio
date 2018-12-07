

$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 50) {
          $(".grid-container1").css("background" , "$primary-color");
        }
  
        else{
            $(".grid-container1").css("background" , "transparent");  	
        }
    })
  })
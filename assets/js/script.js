$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if(scroll > 200){
            $(".navbar").css("background", "#0C0C0C");
        }
        else{
            $(".navbar").css("background", "transparent");
        }
    })
})
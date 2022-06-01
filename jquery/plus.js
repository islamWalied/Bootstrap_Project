/*global $, window*/

$(function () {
   
    "use strict";
    
    $(window).scroll(function () {
       
        if ($(window).scrollTop() >= $(".navbar").height()) {
            $(".navbar").addClass("scrolled");
        } else {
            $(".navbar").removeClass("scrolled");
        }
    });
    
    $(".tab-switch li").click(function () {
       
        $(this).addClass("selected").siblings().removeClass("selected");
        
        $(".tabs-section .tabs-content > div").hide();
        
        $("." + $(this).data("class")).show();
    });
    
});
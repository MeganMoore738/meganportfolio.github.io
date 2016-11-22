// menu toggle button
function myFunction(x) {
    x.classList.toggle("change");
}



 // page scroll

$("#home").click(function() {
    $('html, body').animate({
        scrollTop: $("#top").offset().top
    }, 0);
    $(".navigation").find("a").removeClass("active");
    $(this).addClass("active");

}); 



$("#about").click(function() {
    $('html, body').animate({
        scrollTop: $("#aboutme").offset().top
    }, 200);

    $(".navigation").find("a").removeClass("active");
    $(this).addClass("active");


});

$("#portfolio").click(function() {
    $('html, body').animate({
        scrollTop: $("#grid").offset().top
    }, 200);

    $(".navigation").find("a").removeClass("active");
    $(this).addClass("active");


});

$("#showreel").click(function() {
    $('html, body').animate({
        scrollTop: $("#video").offset().top
    }, 200);

    $(".navigation").find("a").removeClass("active");
    $(this).addClass("active");


});


$("#contact").click(function() {
    $('html, body').animate({
        scrollTop: $("#contactform").offset().top
    }, 200);

    $(".navigation").find("a").removeClass("active");
    $(this).addClass("active");


});

// back to top
jQuery(document).ready(function() {
                var offset = 220;
                var duration = 500;
                jQuery(window).scroll(function() {
                    if (jQuery(this).scrollTop() > offset) {
                        jQuery('.back-to-top').fadeIn(duration);
                    } else {
                        jQuery('.back-to-top').fadeOut(duration);
                    }
                });
                
                jQuery('.back-to-top').click(function(event) {
                    event.preventDefault();
                    jQuery('html, body').animate({scrollTop: 0}, duration);
                    return false;
                })

            });


// fixed menu 

 
jQuery("document").ready(function($){
    
    var nav = $('.navigation');
    
    $(window).scroll(function () {
        if ($(this).scrollTop() > 136) {
            nav.addClass("f-nav");
        } else {
            nav.removeClass("f-nav");
        }
    });
 
});



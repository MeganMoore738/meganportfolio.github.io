$(function(){
    $('.navbar-toggle, nav2').click(function(){
        $('.navbar-toggle').toggleClass('navbar-on');
        $('nav2').fadeToggle();
        $('nav2').removeClass('nav-hide');
    });
});
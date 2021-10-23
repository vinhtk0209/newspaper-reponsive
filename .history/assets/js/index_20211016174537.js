$(document).ready(function() {
    $('.header-top-bar').click(function() {
        // $('.list-menu-reponsive').slideToggle();
        alert('ok');
    });
});
$(document).ready(function(){
    $('.nav-toggle').click(function(){
        
        $('.reponsive-menu').slideToggle();
    });
    function hidemenu()
    {
        $('.reponsive-menu').slideUp();
    }
    $(window).resize(function(){
        hidemenu();
    });
    $(window).scroll(function() {
        hidemenu();
      
    });
});
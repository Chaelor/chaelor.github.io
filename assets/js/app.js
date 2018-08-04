$("document").ready(function () {
    $(".hide-li").on('click', function(){
        $(".sidenav").hide();
        $(".sidenav-overlay").hide();
    })
    //initializes the side navbar
    $('.sidenav').sidenav();
    AOS.init();
});
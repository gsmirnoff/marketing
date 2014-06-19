$(document).ready(function(e) {
    jQuery(function()
    {
        jQuery('.scroll-pane').jScrollPane();


    });

    var $topBar = $(".top-bar");
    var $asideBar = $(".add-nav-panel");

    $(window).scroll(function(){
        if ( $(this).scrollTop() > 150 && $topBar.hasClass("default-bar") ){
            $topBar.removeClass("default-bar").addClass("fixed-bar");
        } else if($(this).scrollTop() <= 150 && $topBar.hasClass("fixed-bar")) {
            $topBar.removeClass("fixed-bar").addClass("default-bar");
        }

        if ( $(this).scrollTop() > 150 && $asideBar.hasClass("default-bar") ){
            $asideBar.removeClass("default-bar").addClass("fixed-bar");
        } else if($(this).scrollTop() <= 150 && $asideBar.hasClass("fixed-bar")) {
            $asideBar.removeClass("fixed-bar").addClass("default-bar");
        }
    });
});

$(document).ready(function () {
    $('#fullpage').fullpage({
        anchors: ['page1', 'page2', 'page3'],
        navigation: true
    });

    $('.nav ul a').on('click', function () {
        $('.nav ul a').removeClass('active');
        $(this).addClass('active');
    });


    $(window).bind('mousewheel', function (e) {
        $('.nav li a').each(function () {
            var currLink = window.location.href;
            var refElement = 'file:///C:/Users/flori/Documents/Portfolios/Portfolio/Rework%20Portfolio/index.html' + $(this).attr("href");
            if (currLink === refElement) {
                $(this).addClass('active');
            } else {
                $(this).removeClass('active');
            }
        });
    });
});

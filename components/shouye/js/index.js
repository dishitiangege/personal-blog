window.onload = function () {
    setTimeout(hideURLbar, 0);

    function hideURLbar() {
        window.scrollTo(0, 1);
    }

    jQuery(document).ready(function ($) {
        $(".scroll").click(function (event) {
            event.preventDefault();
            $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 1000);
        });
    });

    // start-click-drop-down-menu
    // start-dropdown
    //End-click-drop-down-menu
    var $ = jQuery.noConflict();
    $(function () {
        $('#activator').click(function () {
            $('#box').animate({ 'top': '0px' }, 900);
        });
        $('#boxclose').click(function () {
            $('#box').animate({ 'top': '-1000px' }, 900);
        });
    });
    $(document).ready(function () {
        //Hide (Collapse) the toggle containers on load
        $(".toggle_container").hide();
        //Switch the "Open" and "Close" state per click then slide up/down (depending on open/close state)
        $(".trigger").click(function () {
            $(this).toggleClass("active").next().slideToggle("slow");
            return false; //Prevent the browser jump to the link anchor
        });

    });


    // You can also use "$(window).load(function() {"
    $(function () {
        // Slideshow 4
        $("#slider3").responsiveSlides({
            auto: true,
            pager: false,
            nav: true,
            speed: 500,
            namespace: "callbacks",
            before: function () {
                $('.events').append("<li>before event fired.</li>");
            },
            after: function () {
                $('.events').append("<li>after event fired.</li>");
            }
        });
    });


    
    var colors = [
        ['#6ed4c0', '#ffffff'], ['#6ed4c0', '#ffffff'], ['#6ed4c0', '#ffffff'], ['#6ed4c0', '#ffffff'], ['#6ed4c0', '#ffffff'], ['#6ed4c0', '#ffffff']
    ];
    for (var i = 1; i <= 7; i++) {
        var child = document.getElementById('circles-' + i),
            percentage = 30 + (i * 10);

        Circles.create({
            id: child,
            percentage: percentage,
            radius: 80,
            width: 10,
            number: percentage / 1,
            text: '%',
            colors: colors[i - 1]
        });
    }

} 

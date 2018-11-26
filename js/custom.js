/*===== SERVICES Section ===== */
$(function() {
    //animate on scroll
    new WOW().init();
});

/*===== WORK Section ===== */
$(function(){
    $('a.btn-gallery').on('click', function(event) {
		event.preventDefault();
		
		var gallery = $(this).attr('href');
    
		$(gallery).magnificPopup({
      delegate: 'a',
			type:'image',
			gallery: {
				enabled: true
			}
		}).magnificPopup('open');
	});
});

/*===== TEAM Section ===== */
$(function() {
    $("#team-members").owlCarousel({
        items: 2,
        autoplay: false,
        smartSpeed: 700,
        loop: false,
        autoplayHoverPause: true,
        responsive : {
            // breakpoint from 0 up
            0 : {
                items: 1
            },
            // breakpoint from 480 up
            480 : {
                items: 2
            },
            // breakpoint from 768 up
            768 : {
                items: 2
            },
            // breakpoint from 992 up
            992 : {
                items: 2
            }
        }
    });
});

/*===== TESTIMONIAL Section ===== */
$(function() {
    $("#customers-testimonials").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true
    });
});

/*===== STATS Section ===== */
$(function() {
    $(".counter").counterUp({
        delay: 10,
        time: 2000
    });
});

/*===== CLIENTS Section ===== */
$(function() {
    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        responsive : {
            // breakpoint from 0 up
            0 : {
                items: 1
            },
            // breakpoint from 480 up
            480 : {
                items: 3
            },
            // breakpoint from 768 up
            768 : {
                items: 5
            },
            // breakpoint from 992 up
            992 : {
                items: 6
            }
        }
    });
});

/*===== NAVIGATION Section ===== */
$(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() < 50 ){
            //hide navigation bar
            $("nav").removeClass("digicart-top-nav");
            $("#back-to-top").fadeOut();
        }else {
            //show navigation bar
            $("nav").addClass("digicart-top-nav");
            $("#back-to-top").fadeIn();
        }
    });
});

//Smooth scrolling
$(function(){
    $("a.smooth-scroll").click(function(event){
        event.preventDefault();
        //get/return id like #about, #work, #team and etc.
        var section = $(this).attr("href");

        $('html, body').animate({
            scrollTop: $(section).offset().top - 64
        }, 1250, "easeInOutExpo");
    });
});

//Close Mobile Menu on Click
$(function(){
    $(".navbar-collapse ul li a").on("click touch", function(){
        $(".navbar-toggle").click();
    });
});
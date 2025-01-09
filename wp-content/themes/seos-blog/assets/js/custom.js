jQuery("body").ready(function($) {
	
    // Responsive Menu
    $('.menu-toggle').on("click", function() {
        $(this).toggleClass('active');
        $(this).parent().find('ul.nav-menu').slideToggle();
        $(this).parent().find('div.nav-menu > ul').slideToggle();
	});
	
    $('.dropdown-toggle').on('click', function() {
        $(this).toggleClass('active');
        $(this).parent().find('.sub-menu').first().slideToggle();
        $(this).parent().find('.children').first().slideToggle();
	});
	
    if( $(window).width() < 1024 ) {
        $('#site-navigation .nav-menu').find("li").last().bind( 'keydown', function(e) {
            if( !e.shiftKey && e.which === 9 ) {
                e.preventDefault();
                $('.site-header').find('.menu-toggle').focus();
			}
		});
	}
    else {
        $('#site-navigation .nav-menu').find("li").unbind('keydown');
	}
	
    $(window).resize(function() {
        if( $(window).width() < 1024 ) {
            $('#site-navigation .nav-menu').find("li").last().bind( 'keydown', function(e) {
                if( !e.shiftKey && e.which === 9 ) {
                    e.preventDefault();
                    $('.site-header').find('.menu-toggle').focus();
				}
			});
		}
        else {
            $('#site-navigation .nav-menu').find("li").unbind('keydown');
		}
	});
	
    $('.menu-toggle').on('keydown', function (e) {
        let tabKey    = e.keyCode === 9;
        let shiftKey  = e.shiftKey;
		
        if( $('.menu-toggle').hasClass('active') ) {
            if ( shiftKey && tabKey ) {
                e.preventDefault();
                $('#site-navigation .nav-menu').find("li:last-child > a").focus();
                $('#site-navigation .nav-menu').find("li").last().bind( 'keydown', function(e) {
                    if( !e.shiftKey && e.which === 9 ) {
                        e.preventDefault();
                        $('.site-header').find('.menu-toggle').focus();
					}
				});
			}
		}
	});
	
    // Adds a search icon.
    $('.search-form input[type="submit"]').replaceWith('<button type="submit" class="search-submit" value="Search"><span class="dashicons dashicons-search"></span></button>');
	
	let scroll    = $(window).scrollTop();  
	let scrollup  = $('.to-top');
	
	$(window).scroll(function() {
		if ($(this).scrollTop() > 1) {
			scrollup.addClass('show'); // Добавяме класа show, когато се появи
			} else {
			scrollup.removeClass('show');
		}
	});
	
	scrollup.on('click', function() {
		$('html, body').animate({scrollTop: '0px'}, 400);
		return false;
	});
	
	
	function toggleSidebar() {
		jQuery(".button").toggleClass("active");
		//jQuery("main-left").toggleClass("move-to-left");
		jQuery(".sidebar-item").toggleClass("active");
		jQuery(".menu-left").toggle('slide');		
	}
	
	jQuery(".button").on("click tap", function() {
		toggleSidebar();
	}); 
	
	
});


document.addEventListener('DOMContentLoaded', function() {
	
	let sBLiveClock = document.getElementById("live-clock");
	
	if(sBLiveClock){	
		function liveNewsClock() {
			let hours = document.getElementById("live-hours");
			let minutes = document.getElementById("live-minutes");
			let seconds = document.getElementById("live-seconds");
			let phase = document.getElementById("live-phase");


			let h = new Date().getHours();
			let m = new Date().getMinutes();
			let s = new Date().getSeconds();
			let am = "AM";

			if (h > 12) {
				h = h - 12;
				let am = "PM";
			}

			h = h < 10 ? "0" + h : h;
			m = m < 10 ? "0" + m : m;
			s = s < 10 ? "0" + s : s;

			hours.innerHTML = h;
			minutes.innerHTML = m;
			seconds.innerHTML = s;
			phase.innerHTML = am;
		}
	
	    let liveNewsInterval = setInterval(liveNewsClock, 1000);
	}

});




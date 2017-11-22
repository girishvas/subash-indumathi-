$(document).ready(function(e){
	$(".nav_bar_class li").click(function(){
		$(".nav_bar_class li").removeClass('active');
		$(this).addClass('active');
	});
	
	var d = new Date(new Date().getTime() + 230 * 120 * 120 * 2000);
	// default example
	// simplyCountdown('.simply-countdown-one', {
	// 	year: d.getFullYear(),
	// 	month: d.getMonth() + 1,
	// 	day: d.getDate()
	// });
	// inline example
	// simplyCountdown('.simply-countdown-inline', {
	// 	year: d.getFullYear(),
	// 	month: d.getMonth() + 1,
	// 	day: d.getDate(),
	// 	inline: true
	// });
	//jQuery example
	$('#simply-countdown-losange').simplyCountdown({
		// year: d.getFullYear(),
		// month: d.getMonth() + 1,
		// day: d.getDate(),
		// enableUtc: false
		year: '2018',
		month: '01',
		day: '28',
		enableUtc: false
	});


	// Slideshow 4
	$("#slider3").responsiveSlides({
		auto: true,
		pager:true,
		nav:false,
		speed: 500,
		namespace: "callbacks",
		before: function () {
			$('.events').append("<li>before event fired.</li>");
		},
		after: function () {
			$('.events').append("<li>after event fired.</li>");
		}
	});
	// End of Slideshow 4
	$("#owl-demo").owlCarousel({
		items :5,
		itemsDesktop : [768,4],
		itemsDesktopSmall : [414,3],
		lazyLoad : true,
		autoPlay : true,
		navigation :true,
		navigationText :  false,
		pagination : true,
	});
	/*
		var defaults = {
			containerID: 'toTop', // fading element id
			containerHoverID: 'toTopHover', // fading element hover id
			scrollSpeed: 1200,
			easingType: 'linear' 
		};
	*/
	$().UItoTop({ easingType: 'easeOutQuart' });

	// start-smoth-scrolling 
	$(".scroll").click(function(event){		
		event.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top},1000);
	});
	// end-smoth-scrolling 
	$('#horizontalTab').easyResponsiveTabs({
		type: 'default', //Types: default, vertical, accordion           
		width: 'auto', //auto or any width like 600px
		fit: true,   // 100% fit in a container
		closed: 'accordion', // Start closed if in accordion view
		activate: function(event) { // Callback function if tab is switched
			var $tab = $(this);
			var $info = $('#tabInfo');
			var $name = $('span', $info);
			$name.text($tab.text());
			$info.show();
		}
	});
	$('#verticalTab').easyResponsiveTabs({
		type: 'vertical',
		width: 'auto',
		fit: true
	});
	$(window).load(function() {
		$.fn.lightspeedBox();
	});
});
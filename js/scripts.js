function create_slides() {

	$(".slide_item").each(function(){ $(this).wrap("<div class='swiper-slide acp'></div>"); })
	$(".acp:last-child").addClass("last_scroll")
	$(".acp").wrapAll("<div class='swiper-wrapper'></div>");
	$(".main_slides").append("<div class='swiper-pagination'></div>")
	
	var swiper = new Swiper('.main_slides', {
        pagination: '.swiper-pagination',
        direction: 'vertical',
        slidesPerView: 1,
		speed:1500,
        paginationClickable: true,
        mousewheelControl: true
    });
	
	swiper.on('slideChangeStart', function () {
		var i = parseInt($(".swiper-slide.swiper-slide-active").index());
		var nextIdx = (i + 1) % 5;
		var className = "s" + i;
		$("body").attr("class",className);
		$("#newspaper-first").attr("src", "newspaper-" + i + ".png")
		$("#newspaper-last").fadeOut("fast", function() {
			$("#newspaper-last").attr("src", "newspaper-" + i + ".png");
			$("#newspaper-last").fadeIn(0);
		})
	});
	
}

function resize(){
	var wW = $(window).width()
		wH = $(window).height()
	
	 for (i = 0; i < 15; i++) {
		$(".face").append('<div class="l" style="transform: translateZ(-'+parseInt(i-0.5)+'px);"></div>')
	 }
}

$(document).ready(function(){

	
	resize();
	create_slides();
	$(window).resize(resize);

	$(document).on('click', '.g', function(e) {
		$(".p").addClass("go");
	});
	
	$(".last_scroll").bind('mousewheel', function(event) {
		if(event.originalEvent.wheelDelta <= 0) $("body").addClass("show_shares");
	});

	$(".last_screen").bind('mousewheel', function(event) {
		if(event.originalEvent.wheelDelta >= 0) $("body").removeClass("show_shares")
	});

})

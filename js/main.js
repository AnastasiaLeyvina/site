$(function () {
	$('.mobile div').on('click', () => {
    $('.mobile div').toggleClass('active');
    $('.mobile nav').toggleClass('open');
    $('.mobile nav ul').toggleClass('show');
});
for (let a = 1; a <= $(".mobile ul li").length; a++){ 
    $(".mobile ul li:nth-child("+ a +")").css("animation-delay", "."+ (a+1) +"s");    
}

	$('a.call-btn').click( function(event){
	event.preventDefault();
		$('.myoverlay').fadeIn(297,	function(){
		$('.mymodal') 
		.css('display', 'block')
		.animate({opacity: 1}, 198);
		});
	});

	$('.mymodal-close, .myoverlay').click( function(){
		$('.mymodal').animate({opacity: 0}, 198, function(){
		$(this).css('display', 'none');
		$('.myoverlay').fadeOut(297);
		});
	});


	$(window).scroll(function(){
		if($(window).scrollTop() > 90) {
			$('.totop').show();
		} else {
			$('.totop').hide();
		}
	});
 
	$('.totop').click(function(){
		$('html, body').animate({scrollTop: 0}, 600);
		return false;
	});
});

$(document).ready(function($) {
	$('.popup-open').click(function() {
		$('.popup-fade').fadeIn();
		return false;
	});	
	
	$('.popup-close').click(function() {
		$(this).parents('.popup-fade').fadeOut();
		return false;
	});		
 
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.popup-fade').fadeOut();
		}
	});
	
	$('.popup-fade').click(function(e) {
		if ($(e.target).closest('.popup').length == 0) {
			$(this).fadeOut();					
		}
	});
});


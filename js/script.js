$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		dots:true,
		slidesToShow:3,
		autoplay:true,
		speed:1000,
		autoplaySpeed:800,
		responsive:[
			{
				breakpoint: 993,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 577,
				settings: {
					slidesToShow:1,
					autoplaySpeed:3000,
				}
			},
		]
	});
});


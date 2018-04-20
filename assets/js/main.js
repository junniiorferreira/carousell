
// 
// Swiper
// 
$(function(){
	var newSwiper = new Swiper('.customers-swiper',{	
		slidesPerView: 3,
		spaceBetween: 1,		
		breakpoints: {
		    1199: {
		      slidesPerView: 1,
		      spaceBetween: 10
		    }			
		},
		pagination: {
			el: '.customer-pagination',
			type: 'bullets',
			clickable: true
		}				
	});
	var newSwiper2 = new Swiper('.custom-swiper',{	
		slidesPerView: 3,
		spaceBetween: 1,		
		breakpoints: {
		    1199: {
		      slidesPerView: 1,
		      spaceBetween: 10
		    }			
		},				
	});
	$('input[required]').on('invalid', function() {
		this.setCustomValidity($(this).data("required-message"));
	});	
});


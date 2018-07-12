window.addEventListener('load', function(){
	$('.item').find('.data-d').each(function(index) {
		 $(this).animateCSS('fadeInUp-p', 100 * index);
	});
})
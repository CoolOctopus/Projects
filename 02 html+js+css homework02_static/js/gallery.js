$('.img-box').each( function (i,e){
	$(this).click(function() {
		$('.img-box-lg img').removeClass('hidden')
		$('.choosed').removeClass('choosed')
		$(this).addClass('choosed');
		let imgUrl = $(this).children("img")[0].src;
		$(".img-box-lg img").attr('src', imgUrl);
	})
});
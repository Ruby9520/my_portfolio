//function
function getRandom(min, max) {
	return Math.random() * (max - min);
}

//jQuery
$(document).ready(function ($) {
	/*snowwww*/
	var snow = $('svg').find('.snow');
	snow.each(function () {
		let yValue= getRandom(200, 300);
		// $(this).attr('cx', getRandom(1, 100) + '%').attr('cy', '-' + getRandom(1, 100)).attr('r', getRandom(1, 6))
		$(this).attr('x1', getRandom(1, 6) + '%').attr('x2', '-' + getRandom(1, 6)).attr('y1', yValue).attr('y2', yValue);
	})
	//if not stick to the top, than fixed, and skill bar animation
	$(window).scroll(function () {
		if ($(window).scrollTop() > 100) {
			$('.navigation').addClass('offtop');
		} else {
			$('.navigation').removeClass('offtop');
		}
	})
	//click nav scroll
	$('.navigation>ul>li').click(function () {
		//get click id
		let clickNum = '#' + $(this).find('a').attr('href').substr(1);
		console.log(clickNum);
		$([document.documentElement, document.body]).animate({
			scrollTop: $(clickNum).offset().top - 50
		}, 1000);
	})
	//arrive block top show
	var $skill = $('.skill');
	var $allHeight = $(window).scrollTop() + $(window).height();
	if ($allHeight >= $skill.offset().top) {
		$skill.fadeIn('slow');
	}
})



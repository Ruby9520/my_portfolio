function getRandom(min, max) {
  return Math.random() * (max - min);
}
$(document).ready(function($){
/*snowwww*/
  var snow=$('svg').find('.snow');
 snow.each(function(){
   $(this).attr('cx', getRandom(1,100) + '%').attr('cy', '-' + getRandom(1,100)).attr('r', getRandom(1,6))
 })
 //if not stick to the top, than fixed, and skill bar animation
$(window).scroll(function(){
  if($(window).scrollTop()> 480){
    var $bar=$('.bar');
    $bar.find('#p90').animate({'width':'90%'}, 'slow');
    $bar.find('#p70').animate({'width':'70%'}, 'slow');
    $('#p60').animate({'width':'60%'}, 'slow');
    $('#p50').animate({'width':'50%'}, 'slow');
  }
  else if($(window).scrollTop()> 100){
    $('.navigation').addClass('offtop');
  }else{
  $('.navigation').removeClass('offtop');
  }
})

 //arrive block top show
  var $skill= $('.skill');
  var $allHeight= $(window).scrollTop()+$(window).height();
  if( $allHeight >= $skill.offset().top){
     $skill.fadeIn('slow');
  } 
})

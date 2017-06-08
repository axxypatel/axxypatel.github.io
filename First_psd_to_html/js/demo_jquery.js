$(document).ready(function(){
$('.banner_img > div:gt(0)').hide();
setInterval(function(){
	$('.banner_img >div:eg(0)').fadeOut()
	.next('div').fadeIn(1000)
	.fadeOut(1000);
	}
		,3000);
});

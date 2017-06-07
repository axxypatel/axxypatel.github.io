$(document).ready(function(){
$(".banner_img > div:gt(0)").hide();
setInterval(function(){
	$(".banner_img >div:first-child").fadeOut()
	.next('img').fadeIn()
	.end().appendTo('banner_img');}
		,3000);
});

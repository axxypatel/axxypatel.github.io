var sliderindex=1;
slider_demo(sliderindex);

function preslider(n) {
	slider_demo(n);
}
function nextslider(n){
	slider_demo(n);
}

 function slider_demo(n) {
	var slider=document.getElementsByClassName("banner_img");
	var i=0;
	var len=slider.length;
	for (i=0;i<len;i++)
	{
		slider[i].style.display="none";
	}
	if (n<0)
	{
		sliderindex=sliderindex-1;
	}
	else if (n=1)
	{
		sliderindex=sliderindex+1;
	}
	if (sliderindex<0){sliderindex=len-1;}
	if (sliderindex>len-1){sliderindex=0;}
	slider[sliderindex].style.display= "block";  
	
} 
function click1(){
	document.getElementById("content1").style.display="none";
}

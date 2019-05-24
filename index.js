window.onscroll = function() {show()};

function show() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("topButton").style.display = "block";
  } else {
    document.getElementById("topButton").style.display = "none";
  }
}


var timeOut;
function topFunction() {
	if (document.body.scrollTop!=0 || document.documentElement.scrollTop!=0){
		window.scrollBy(0,-30);
		timeOut=setTimeout('topFunction()',10);
	}	else {
    clearTimeout(timeOut);
  }
}

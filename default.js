var counter = 0;
var images = new Array("assets/images/bg1.jpg");

function rotate() {
     counter++;
     if (counter == images.length) {
        counter = 0;
     }
     document.getElementById("bgimage").src = images[counter];
}

window.onload = function() {
	setInterval(rotate, 5000)
};

function swap(image) {
	document.getElementById("main").src = image.href;
}
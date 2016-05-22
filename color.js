
var n = 6;
var colors = colorArray(n);

var squareColor = document.querySelectorAll(".square");


var selectColor =  colors[randomColor(n)];

var message = document.querySelector(".message");

document.querySelector(".selectColor").textContent = selectColor;

var restart_button = document.querySelector("#restart");
var eay_button = document.querySelector("#eay-btn");
var had_button = document.querySelector("#had-btn");

eay_button.addEventListener("click", function(){
	eay_button.classList.add("selected");
	had_button.classList.remove("selected");

	n = 3;
	colors = colorArray(n);
	selectColor =  colors[randomColor(n)];
	document.querySelector(".selectColor").textContent = selectColor;
	document.querySelector("h1").style.background = "steelblue";
	for(var i = 0; i < squareColor.length; i++){
		if(colors[i]){
		squareColor[i].style.background = colors[i];
		squareColor[i].style.display = "block";
		}else{
		squareColor[i].style.display = "none";
		}
		
	};
	restart_button.textContent = "New Colors";
	message.textContent = "";
})

had_button.addEventListener("click", function(){
	eay_button.classList.remove("selected");
	had_button.classList.add("selected");
	n = 6;
	colors = colorArray(n);
	selectColor =  colors[randomColor(n)];
	document.querySelector(".selectColor").textContent = selectColor;
	document.querySelector("h1").style.background = "steelblue";
	for(var i = 0; i < squareColor.length; i++){
		if(colors[i]){
		squareColor[i].style.background = colors[i];
		squareColor[i].style.display = "block";
		}else{
		squareColor[i].style.display = "none";
		}
		
	};
	restart_button.textContent = "New Colors";
	message.textContent = "";
})




restart_button.addEventListener("click", function(){
	colors = colorArray(n);
	selectColor =  colors[randomColor(n)];
	document.querySelector(".selectColor").textContent = selectColor;
	document.querySelector("h1").style.background = "steelblue";
	for(var i = 0; i < squareColor.length; i++){
		squareColor[i].style.background = colors[i];
	};
	restart_button.textContent = "New Colors";
	message.textContent = "";

})



for(var i = 0; i < squareColor.length; i++){
	squareColor[i].style.background = colors[i];
	squareColor[i].addEventListener("click", function(){
		if(this.style.background===selectColor){
			//alert(this.style.background);
			message.textContent = "Correct!";
			changeColor(squareColor, selectColor);
			document.querySelector("h1").style.background = selectColor;
			restart_button.textContent = "Play Again?"
		}else{
			message.textContent = "Please Try Again!";
			this.style.background =  "#232323";
		}

	})

}

function changeColor(colors, color){
	for(var i=0; i<colors.length; i++){
		colors[i].style.background =  color;
	}
}

function randomColor(n){
	return Math.floor(Math.random()*(n));
}

function colorArray(num){
	var a = Array();
	for(var i =0; i<num; i++){
		a.push(randomrgb());
	}
	return a;
}

function randomrgb(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
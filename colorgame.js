var n = 6;
var colors = Array();
var selectColor;
var squareColor = document.querySelectorAll(".square");
var message = document.querySelector(".message");
var restart_button = document.querySelector("#restart");
var modebutton =  document.querySelectorAll(".mode");


init();

restart_button.addEventListener("click", function(){
	restart(n);
})


function init(){
	restart(n);
	setupSquare();
	setupMode();

}
function setupMode(){
	for(var i= 0; i < modebutton.length;i++){
		modebutton[i].addEventListener("click", function() {
			modebutton[0].classList.remove("selected");
			modebutton[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent==="Easy" ? n = 3: n = 6;
			restart(n);
		})
	}
}
	

function restart(n){
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
}





function setupSquare(){
	for(var i = 0; i < squareColor.length; i++){
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
		});
	}
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
var colors = generateRandomColors(6);
var numberOfsquares = generateRandomColors(numSquares);
var numSquares = 6;
var square = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn")
var hardBtn = document.querySelector("#hardBtn")

// EASY BUTTON
easyBtn.addEventListener("click" , function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	colors = generateRandomColors(numSquares);
	numSquares = 3;
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0 ; i < square.length ; i++){
		if(colors[i]){
			square[i].style.background = colors[i];
		} else {
			square[i].style.display = "none" 
		}
	}
});
// HARD BUTTON
hardBtn.addEventListener("click" , function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	colors = generateRandomColors(numSquares);
	numSquares = 6;
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0 ; i < square.length ; i++){
	square[i].style.background = colors[i];
	square[i].style.display = "block";
	}
});
// RESET BUTTON!
resetButton.addEventListener("click", function(){
colors = generateRandomColors(numSquares);
pickedColor = pickColor(); 
colorDisplay.textContent = pickedColor;
this.textContent = "New Colors";

messageDisplay.textContent = "";
for(var i = 0 ; i < square.length; i++){
	square[i].style.background = colors[i];
}
h1.style.background = "#b72626";
})

colorDisplay.textContent = pickedColor;
// add initial colors to squares
for(var i = 0; i < square.length; i++){
	square[i].style.background = colors[i];

square[i].addEventListener("click", function(){
// grab color of clicked square
var clickedColor = this.style.background;
// compare color with picked color
if(clickedColor === pickedColor){
	messageDisplay.textContent = "Correct!";
	resetButton.textContent = "Play Again?"
changeColors(clickedColor);
h1.style.background = clickedColor;
}
	else{
		this.style.background = "#232323"
		messageDisplay.textContent = "Try Again"
	}
}

)};

function changeColors(color){
	//loop through all squares
	for(var i = 0; i < square.length; i++){
		//change each color to match given color
		square[i].style.background = color;};}

function pickColor(){
var random = Math.floor(Math.random() * colors.length)
return colors [random];
}

function generateRandomColors(num){
	var arr = []
	for(var i = 0; i < num ; i++){
arr.push(randomColor())
	}
	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random() * 256)
	var g = Math.floor(Math.random() * 256)
	var b = Math.floor(Math.random() * 256)


// THE SPACES BETWEEN THE COMMAS ARE IMPORTANT!!! BUG INVOLVED! CSS DOESNT UNDERSTAND IT
	return "rgb(" + r + ", " + g + ", " + b +")"
}

// ------------------
		
	


// var	colors = [
// "rgb(255, 0, 0)",
// "rgb(255, 255, 0)",
// "rgb(0, 255, 0)",
// "rgb(0, 255, 255)",
// "rgb(0, 0, 255)",
// "rgb(255, 0, 255)"]

// var squares = document.querySelectorAll(".squares")
// for (var i = 0; i < squares.lenght; i++){
// 	squares[i].style.background = colors[i];
// }

// var squares = document.querySelectorAll(".square");
// for(var i = 0; i < squares.lenght; i++){
// 	squares[i].style.background = colors[i];
// }

// var numSquares = 6;
// var colors = [];
// var pickedColor;
// var squares = document.querySelectorAll(".square");
// var colorDisplay = document.getElementById("colorDisplay");
// var messageDisplay = document.querySelector("#message");
// var h1 = document.querySelector("h1");
// var resetButton = document.querySelector("#reset");
// var modeButtons = document.querySelectorAll(".mode");


// init();

// function init(){
// 	setupModeButtons();
// 	setupSquares();
// 	reset();
// }

// function setupModeButtons(){
// 	for(var i = 0; i < modeButtons.length; i++){
// 		modeButtons[i].addEventListener("click", function(){
// 			modeButtons[0].classList.remove("selected");
// 			modeButtons[1].classList.remove("selected");
// 			this.classList.add("selected");
// 			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
// 			reset();
// 		});
// 	}
// }

// function setupSquares(){
// 	for(var i = 0; i < squares.length; i++){
// 	//add click listeners to squares
// 		squares[i].addEventListener("click", function(){
// 			//grab color of clicked square
// 			var clickedColor = this.style.background;
// 			//compare color to pickedColor
// 			if(clickedColor === pickedColor){
// 				messageDisplay.textContent = "Correct!";
// 				resetButton.textContent = "Play Again?"
// 				changeColors(clickedColor);
// 				h1.style.background = clickedColor;
// 			} else {
// 				this.style.background = "#232323";
// 				messageDisplay.textContent = "Try Again"
// 			}
// 		});
// 	}
// }



// function reset(){
// 	colors = generateRandomColors(numSquares);
// 	//pick a new random color from array
// 	pickedColor = pickColor();
// 	//change colorDisplay to match picked Color
// 	colorDisplay.textContent = pickedColor;
// 	resetButton.textContent = "New Colors"
// 	messageDisplay.textContent = "";
// 	//change colors of squares
// 	for(var i = 0; i < squares.length; i++){
// 		if(colors[i]){
// 			squares[i].style.display = "block"
// 			squares[i].style.background = colors[i];
// 		} else {
// 			squares[i].style.display = "none";
// 		}
// 	}
// 	h1.style.background = "steelblue";
// }

// resetButton.addEventListener("click", function(){
// 	reset();
// })

// function changeColors(color){
// 	//loop through all squares
// 	for(var i = 0; i < squares.length; i++){
// 		//change each color to match given color
// 		squares[i].style.background = color;
// 	}
// }

// function pickColor(){
// 	var random = Math.floor(Math.random() * colors.length);
// 	return colors[random];
// }

// function generateRandomColors(num){
// 	//make an array
// 	var arr = []
// 	//repeat num times
// 	for(var i = 0; i < num; i++){
// 		//get random color and push into arr
// 		arr.push(randomColor())
// 	}
// 	//return that array
// 	return arr;
// }

// function randomColor(){
// 	//pick a "red" from 0 - 255
// 	var r = Math.floor(Math.random() * 256);
// 	//pick a "green" from  0 -255
// 	var g = Math.floor(Math.random() * 256);
// 	//pick a "blue" from  0 -255
// 	var b = Math.floor(Math.random() * 256);
// 	return "rgb(" + r + ", " + g + ", " + b + ")";
// }

var numbersquares=9;
var colors = generateRandomColors(numbersquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickcolor();
var colordis = document.getElementById("colordis");
var messagedis = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.getElementsByClassName("mode");

for(var i = 0; i < modeButtons.length; i++) {
	modeButtons[i].addEventListener("click", function() {
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");	
		this.textContent === "Easy" ?	numbersquares = 3 : numbersquares = 6;
		reset();
	});
}
function reset(){
    colors = generateRandomColors(numbersquares);
    pickedColor = pickcolor();
    colordis.textContent = pickedColor;
    resetButton.textContent="NEW COLORS";
    messagedis.textContent = "";
    for (var i=0; i<squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }else{
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor="steelblue";
}

/*easyButton.addEventListener("click", function(){
    easyButton.classList.add("selected");
    hardButton.classList.remove("selected");
    numbersquares=3;
    colors = generateRandomColors(numbersquares);
    pickedColor = pickcolor();
    colordis.textContent = pickedColor;
    for (var i=0; i<squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        }else{
            squares[i].style.display = "none";
        }
    }
});

hardButton.addEventListener("click", function(){
    easyButton.classList.remove("selected");
    hardButton.classList.add("selected");
    numbersquares=6;
    colors = generateRandomColors(numbersquares);
    pickedColor = pickcolor();
    colordis.textContent = pickedColor;
    for (var i=0; i<squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
});*/

resetButton.addEventListener("click", function(){
   reset();
});

colordis.textContent = pickedColor;

for(var i= 0; i<squares.length; i++){
    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener("click", function(){
       var clickedColor = this.style.backgroundColor;
        if(clickedColor === pickedColor){
            messagedis.textContent="CORRECT!";
            resetButton.textContent="PLAY AGAIN?"
            changeColors(clickedColor);
            h1.style.backgroundColor=clickedColor;
        } else {
            this.style.backgroundColor = "#232323";
            messagedis.textContent="TRY AGAIN!";
        }
    });
}

function changeColors(color){
    for (var i=0; i<squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickcolor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    var arr = [] 
    for (var i=0; i<num; i++){
        arr.push(randomColor())
    }
    return arr;
}

function randomColor(){
    var red = Math.floor(Math.random()*256);
    var green = Math.floor(Math.random()*256);
    var blue = Math.floor(Math.random()*256);
return "rgb("+ red + ", " + green + ", " + blue + ")";
}


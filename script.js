var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("enter");

// This function sets the body's background gradient color into the
// values that are picked in the inputs. The color changes from
// left to right. It also displays the picked css linear gradient property
// in the h3 element.
function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

// At first this function creates random numbers into a hex format
// between 000000 and FFFFFF and then it sets those as color1/color2
// values. Then it does the same as the setGradient function above.
function randomColor() {
	color1.value = '#'+('00000'+(Math.random()*(1<<24)|0).toString(16)).slice(-6);
	color2.value = '#'+('00000'+(Math.random()*(1<<24)|0).toString(16)).slice(-6);

	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

// Listens for the color inputs.
color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

// Listens for the button click to execute randomColor function.
button.addEventListener("click", randomColor);

// Display the initial CSS linear gradient property on page load.
document.addEventListener("DOMContentLoaded", setGradient);
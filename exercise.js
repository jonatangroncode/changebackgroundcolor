



setBodyColor(document.getElementById("red"), "#ff0000");
setBodyColor(document.getElementById("green"), "#00ff00");
setBodyColor(document.getElementById("blue"), "blue");
setBodyColor(document.getElementById("grey"), "grey");
setBodyColor(document.getElementById("yellow"), "yellow");
setBodyColor(document.getElementById("orange"), "orange");



// document.getElementById("colorInput").addEventListener("keydown", function(event) {
//     if (event.key === "Enter") {
//         changeColorButton();
//     }
// });

var changeColorButton = document.getElementById("changeColor");

var changeColorButton = document.getElementById("changeColor");



changeColorButton.addEventListener("click", function(event) {
  var body = document.getElementsByTagName("body")[0];
  var colorInput = document.getElementById("colorInput").value;

 
  if (isValidColor(colorInput)) {
    body.style.backgroundColor = colorInput;
    document.getElementById("error-message").style.display = "none"; // göm felmeddelande
  } else {
    document.getElementById("error-message").style.display = "block"; // visa felmeddelande
  }
});


function setBodyColor(button, color) {
  button.addEventListener("click", function() {
    var body = document.getElementsByTagName("body")[0];
    body.style.backgroundColor = color;
  });
}

function isValidColor(color) {
  var s = new Option().style;
  s.color = color;
  return s.color !== '';
}


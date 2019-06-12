
var color1 = document.getElementById('color1');
var color2 = document.getElementById('color2');
var button = document.getElementById('switch');
var body = document.getElementById('bg');

var options = {
  max: 360,       // maximum value
  min: 0,         // minimum value
  step: 1,        // [min, min+step, ..., max]
  name: 'angle',  // used for <input name>
};

var elem = document.getElementById('my-angle-input');

var angle = AngleInput(elem);

angle(0);

function setBackgroundGradient() {
    body.style.background = "linear-gradient(-" +
    angle()
    + "deg,"
    + color1.value
    + ", "
    + color2.value + ")";
    // css.textContent = body.style.background + ";";
    console.log(angle());
}

setBackgroundGradient();
color1.addEventListener("input",setBackgroundGradient);
color2.addEventListener("input",setBackgroundGradient);
button.addEventListener("click", function() {
  var temp = color1.value;
  color1.value = color2.value;
  color2.value = temp;
  setBackgroundGradient();
})
elem.addEventListener("input", function() {
  document.getElementById("degree").innerHTML = angle() + " deg";
  setBackgroundGradient();
});

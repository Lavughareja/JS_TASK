function getColors() {
  const redSlider = document.getElementById("red");
  const greenSlider = document.getElementById("green");
  const blueSlider = document.getElementById("blue");

  const redNum = document.getElementById("r-num");
  const greenNum = document.getElementById("g-num");
  const blueNum = document.getElementById("b-num");

  const red = redSlider.value;
  const green = greenSlider.value;
  const blue = blueSlider.value;

  redNum.value = red;
  greenNum.value = green;
  blueNum.value = blue;

  const rgb = `rgb(${red}, ${green}, ${blue})`;
  document.getElementById("color-box").style.backgroundColor = rgb;
  document.getElementById("rgb-value").innerText = rgb;
}

function getInputNum() {
  const redSlider = document.getElementById("red");
  const greenSlider = document.getElementById("green");
  const blueSlider = document.getElementById("blue");

  const redNum = document.getElementById("r-num");
  const greenNum = document.getElementById("g-num");
  const blueNum = document.getElementById("b-num");

  const red = redNum.value;
  const green = greenNum.value;
  const blue = blueNum.value;

  redSlider.value = red;
  greenSlider.value = green;
  blueSlider.value = blue;

  const rgb = `rgb(${red}, ${green}, ${blue})`;
  document.getElementById("color-box").style.backgroundColor = rgb;
  document.getElementById("rgb-value").innerText = rgb;
}

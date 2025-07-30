function calc() {
  const b1 = document.getElementById("box1").value;
  const b2 = document.getElementById("box2").value;
  const output = document.getElementById("outputbox");

  var result = b1 * b2;
  output.innerHTML = result;
  console.log(result);
}

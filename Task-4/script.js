function CTOF() {
  const Celsius = document.getElementById("C1").value;
  const CTF = Celsius * 1.8 + 32;
  document.getElementById("F1").value = CTF;
}

function FTOC() {
  const Fahrenheit = document.getElementById("F1").value;
  const FTC = (Fahrenheit - 32) / 1.8;
  document.getElementById("C1").value = FTC;
}
  
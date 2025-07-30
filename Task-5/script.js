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

function STOM() {
  const second = document.getElementById("S1").value;
  const STM = second / 60;
  document.getElementById("M1").value = STM;
}

function MTOS() {
  const minutes = document.getElementById("M1").value;
  const MTS = minutes * 60;
  document.getElementById("S1").value = MTS;
}

function handleConverter() {
  const selectedConverter = document.getElementById("converterselect").value;

  const temp = document.getElementById("temperatureconverter");

  const time = document.getElementById("timeconverter");

  if (selectedConverter === "temperature") {
    temp.style.display = "flex";
    time.style.display = "none";
  } else if (selectedConverter === "time") {
    time.style.display = "flex";
    temp.style.display = "none";
  }
}

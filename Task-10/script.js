document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("container");
  const button = document.getElementById("clonebutton");
  function cloneElement() {
    const elementToClone = document.getElementById("clone-list");
    const clonedElement = elementToClone.cloneNode(true);
    container.appendChild(clonedElement);
  }
  button.addEventListener("click", cloneElement);
});
function removeElement() {
  const element = document.getElementById("clone-list");
  element.remove();
}

function Validation() {
  const percentagevalue = document.getElementById("percentage").value.trim();
  const noofmemebrvalue = document.getElementById("noofmemebr").value.trim();

  const noofmemebrerror = document.getElementById("noofmemebr-error");
  const percentageerror = document.getElementById("percentage-error");

  percentageerror.textContent = "";
  noofmemebrerror.textContent = "";

  let isValid = true;

  if (percentagevalue === "") {
    percentageerror.textContent = "Percentage is Required";
    isValid = false;
  }
  if (noofmemebrvalue === "") {
    noofmemebrerror.textContent = "Number of member is Required";
    isValid = false;
  }
  if (isValid) {
    alert("Form submitted successfully!");
    return true;
  } else {
    return false;
  }
}

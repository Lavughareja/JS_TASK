document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("container");
  const button = document.getElementById("clonebutton");

  button.addEventListener("click", function () {
    const cloneList = container.querySelector(".clone-list");
    const cloned = cloneList.cloneNode(true);

    cloned.querySelector(".noofmemebr").value = "";
    cloned.querySelector(".percentage").value = "";
    cloned.querySelector(".noofmemebr-error").textContent = "";
    cloned.querySelector(".percentage-error").textContent = "";

    cloned
      .querySelector(".remove-button")
      .addEventListener("click", function () {
        const totalBlocks = document.querySelectorAll(".clone-list").length;
        if (totalBlocks > 1) {
          cloned.remove();
        }
      });
    container.insertBefore(cloned, button);
  });
});

const initialRemoveButton = container.querySelector(
  ".clone-list .remove-button"
);

function Validation() {
  let isValid = true;

  const blocks = document.querySelectorAll(".clone-list");

  blocks.forEach((block) => {
    const percentageInput = block.querySelector(".percentage");
    const numberInput = block.querySelector(".noofmemebr");
    const percentageError = block.querySelector(".percentage-error");
    const numberError = block.querySelector(".noofmemebr-error");

    percentageError.textContent = "";
    numberError.textContent = "";

    if (percentageInput.value.trim() === "") {
      percentageError.textContent = "Percentage is Required";
      isValid = false;
    }
    if (numberInput.value.trim() === "") {
      numberError.textContent = "Number of member is Required";
      isValid = false;
    }
  });

  return isValid;
}
/* const form = document.getElementById("form");
const name = document.getElementById("name");
const URL = document.getElementById("URL");
const funnel = document.getElementById("funnel");
const email = document.getElementById("email");
const password = document.getElementById("password");
const conformationpassword = document.getElementById("conformationpassword");
const noofmemebrInput = document.getElementById("noofmemebr");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const namevalue = name.value;
  const URLvalue = URL.value;
  const funnelvalue = funnel.value;
  const emailvalue = email.value;
  const passwordvalue = password.value;
  const conformationpasswordvalue = conformationpassword.value;
  const noofmemebrValue = noofmemebrInput.value;

  if (!Validation()) {
    return;
  }

  localStorage.setItem("fullname", namevalue);
  localStorage.setItem("URL", URLvalue);
  localStorage.setItem("funnel", funnelvalue);
  localStorage.setItem("email", emailvalue);
  localStorage.setItem("password", passwordvalue);
  console.log(passwordvalue);
  localStorage.setItem("conformationpassword", conformationpasswordvalue);
  localStorage.setItem("noofmember", noofmemebrValue);

  window.location.href = "display.html";
}); */

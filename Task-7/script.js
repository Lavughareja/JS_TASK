document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("container");
  const button = document.getElementById("clonebutton");
  function cloneElement() {
    const elementToClone = document.getElementById("ul-list");
    const clonedElement = elementToClone.cloneNode(true);
    container.appendChild(clonedElement);
  }
  button.addEventListener("click", cloneElement);
});

document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("increment-me");
  const element = document.getElementById("clone-me");
  const button = document.getElementById("add-new");

  button.addEventListener("click", function () {
    const newCounter = createCounter();
    container.appendChild(newCounter);
  });

  function createCounter() {
    const clone = element.cloneNode(true);
    clone.style.display = "flex";
    clone.dataset.count = 0;
    clone.querySelector(".output").innerText = "0";

    const incrementButton = clone.querySelector(".increment");
    const decrementButton = clone.querySelector(".decrement");
    const output = clone.querySelector(".output");

    incrementButton.addEventListener("click", () => {
      let count = parseInt(clone.dataset.count) + 1;
      clone.dataset.count = count;
      console.log("Increment :" + clone.dataset.count);
      output.innerText = count;
    });
    decrementButton.addEventListener("click", () => {
      let count = parseInt(clone.dataset.count) - 1;
      clone.dataset.count = count;
      console.log("Decrement :" + clone.dataset.count);
      output.innerText = count;
    });
    return clone;
  }
});

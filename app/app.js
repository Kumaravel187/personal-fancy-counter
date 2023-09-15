// Selecting elements from the DOM
const btnIncrementEl = document.querySelector(".counter__button--increase");
const btnDecrementEl = document.querySelector(".counter__button--decrease");
const counterValue = document.querySelector(".counter__value");
const counterTitle = document.querySelector(".counter__title");
const counterReset = document.querySelector(".counter__reset-button");
const countEl = document.querySelector(".counter");

// Selecting an additional element with an ID
const spanEl = document.querySelector("#test");

// Initialize a counter variable
let counter = 0;

// Function to increment the counter
const incrementCounter = () => {
  if (counter < 10) {
    counter++;
    counterValue.textContent = counter;

    // Check if the counter has reached its limit
    if (counter === 10) {
      counterTitle.textContent = "Limit! Buy pro for $4.99";
      countEl.classList.add("error");
      btnDecrementEl.disabled = true;
      btnIncrementEl.disabled = true;
    }
  }
};

// Function to decrement the counter
const decrementCounter = () => {
  if (counter > 0) {
    counter--;
    counterValue.textContent = counter;
  }
};

// Function to reset the counter
const reset = () => {
  counterTitle.innerHTML = "Fancy <span>Counter</span>";
  counterValue.textContent = 0;
  countEl.classList.remove("error");
  counter = 0;
  btnDecrementEl.disabled = false;
  btnIncrementEl.disabled = false;
};

// Event listeners for button clicks
btnIncrementEl.addEventListener("click", incrementCounter);
btnDecrementEl.addEventListener("click", decrementCounter);
counterReset.addEventListener("click", reset);

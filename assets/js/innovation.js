document.addEventListener("DOMContentLoaded", function () {
  let currentNumber = 0;
  let number = 121;
  let increment = 1;
  let interval = 20;

  let intervalId = setInterval(function () {
    document.getElementById("number").textContent = currentNumber;
    currentNumber += increment;

    if (currentNumber >= number) {
      clearInterval(intervalId);
      document.getElementById("number").textContent = number;
    }
  }, interval);

});

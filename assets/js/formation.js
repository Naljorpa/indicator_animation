document.addEventListener("DOMContentLoaded", function () {

  let currentNumber = 0;
  let number = 46048;
  let increment = 100;
  let interval = 1;

  let intervalId = setInterval(function () {
    let formattedNumber = currentNumber.toLocaleString();
    formattedNumber = formattedNumber.replace(/,/g, ",\u2009");
    document.getElementById("number").textContent = formattedNumber;
    currentNumber += increment;

    if (currentNumber >= number) {
      clearInterval(intervalId);
      document.getElementById("number").textContent = number.toLocaleString();
    }
  }, interval);

  const paths = document.querySelectorAll("path");
  let delay = 0;
  paths.forEach((path, index) => {
    path.style.animationDelay = `${delay}s`;
    path.style.opacity = "0";
    path.addEventListener("animationstart", () => {
      path.style.opacity = "1";
    });
    if (index < paths.length - 1) {
      path.addEventListener("animationend", () => {
        path.classList.add("completed");
      });
    }
    delay += 0.1;
  });
});

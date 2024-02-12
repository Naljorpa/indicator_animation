document.addEventListener("DOMContentLoaded", function () {
  function animatePartenariat() {
    let currentPercentage = 0;
    let percentage = 52;
    let increment = 1;
    let interval = 40;

    let intervalId = setInterval(function () {
      document.getElementById("percentage").textContent =
        currentPercentage + "%";
      currentPercentage += increment;

      if (currentPercentage >= percentage) {
        clearInterval(intervalId);
        document.getElementById("percentage").textContent = percentage + "%";
      }
    }, interval);

    let number = 190 * (1 - percentage / 100);

    console.log(number);
    document.documentElement.style.setProperty("--end-value", number);
  }

  function animateInnovation() {
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
  }

  animatePartenariat();
  animateInnovation();

});

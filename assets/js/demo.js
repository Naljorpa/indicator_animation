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

  function animateFormation() {
    let currentNumber = 0;
    let number = 46048;
    let increment = 100;
    let interval = 1;

    let intervalId = setInterval(function () {
      let formattedNumber = currentNumber.toLocaleString();
      formattedNumber = formattedNumber.replace(/,/g, ",\u2009");
      document.getElementById("formation-number").textContent = formattedNumber;
      currentNumber += increment;

      if (currentNumber >= number) {
        clearInterval(intervalId);
        document.getElementById("formation-number").textContent = number.toLocaleString();
      }
    }, interval);

    const bars = document.querySelectorAll(".bar");
    let delay = 0;
    bars.forEach((bar, index) => {
      bar.style.animationDelay = `${delay}s`;
      bar.style.opacity = "0";
      bar.addEventListener("animationstart", () => {
        bar.style.opacity = "1";
      });
      if (index < bars.length - 1) {
        bar.addEventListener("animationend", () => {
          bar.classList.add("completed");
        });
      }
      delay += 0.1;
    });
  }

  animatePartenariat();
  animateInnovation();
  animateFormation();
});

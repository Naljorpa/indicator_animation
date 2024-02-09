document.addEventListener("DOMContentLoaded", function () {
  let currentPercentage = 0;
  let percentage = 52;
  let increment = 1;
  let interval = 40;

  let intervalId = setInterval(function () {
    document.getElementById("percentage").textContent = currentPercentage + "%";
    currentPercentage += increment;

    if (currentPercentage >= percentage) {
      clearInterval(intervalId);
      document.getElementById("percentage").textContent = percentage + "%";
    }

    let number = 190 * (currentPercentage / 100);
    document.documentElement.style.setProperty("--end-value", number);
  }, interval);
});

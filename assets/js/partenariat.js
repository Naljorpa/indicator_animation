
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
      document.getElementById("percentage").textContent =
        percentage + "%";
    }
  }, interval);

  let number = 190 * (1 - (percentage / 100)) ;

  console.log(number);
  document.documentElement.style.setProperty("--end-value", number);
});

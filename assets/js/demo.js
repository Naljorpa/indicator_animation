document.addEventListener("DOMContentLoaded", function () {
  // Fonction pour animer la première roulette de pourcentage
  function animatePartenariat1() {
    let currentPercentage = 0;
    let percentage = 52; // à modifier si nécessaire
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

    document.documentElement.style.setProperty("--end-value1", number);
  }

  // Fonction pour animer le graphique de la flèche
  function animateInnovation() {
    let currentNumber = 0;
    let number = 121; // à modifier si nécessaire
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

    const fleche = document.querySelector(".fleche");
    fleche.style.transform = "unset";

    const maskRect = document.getElementById("maskRect");
    const animateX = maskRect.querySelector("animate");
    const animateTransform = maskRect.querySelector("animateTransform");

    animateX.beginElement();
    animateTransform.beginElement();
  }

  // Fonction pour animer le graphique à bars
  function animateFormation() {
    let currentNumber = 0;
    let number = 46048; // à modifier si nécessaire
    let increment = 100;
    let interval = 1;

    let intervalId = setInterval(function () {
      let formattedNumber = currentNumber.toLocaleString();
      formattedNumber = formattedNumber.replace(/,/g, ",\u2009");
      document.getElementById("formation-number").textContent = formattedNumber;
      currentNumber += increment;

      if (currentNumber >= number) {
        clearInterval(intervalId);
        document.getElementById("formation-number").textContent =
          number.toLocaleString();
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

  // Fonction pour animer la deuxième roullette de pourcentage
  function animatePartenariat2() {
    let currentPercentage = 0;
    let percentage = 60; // à modifier si nécessaire
    let increment = 1;
    let interval = 35;

    let intervalId = setInterval(function () {
      document.getElementById("percentage2").textContent =
        currentPercentage + "%";
      currentPercentage += increment;

      if (currentPercentage >= percentage) {
        clearInterval(intervalId);
        document.getElementById("percentage2").textContent = percentage + "%";
      }
    }, interval);

    let number = 190 * (1 - percentage / 100);

    document.documentElement.style.setProperty("--end-value2", number);
  }

  //fonctions pour déclencher les animations à l'aide d'un intersection observer

  const observer = new IntersectionObserver(callback, {
    root: null,
    rootMargin: "0px",
    threshold: 0.8,
  });

  const animateBoxes = document.querySelectorAll(".animate-box");

  animateBoxes.forEach((animateBox) => {
    observer.observe(animateBox);
  });

  let entryTrigger = 0;

  function callback(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entryTrigger++;

        if (entry.target.classList.contains("partenariat1")) {
          const circlePie = entry.target.querySelector(".x1");
          circlePie.style.animation = "dash-animation1 2s ease-in forwards";
          animatePartenariat1();
        }

        if (entry.target.classList.contains("innovation")) {
          const arrow = entry.target.querySelector(".fleche");
          arrow.style.animation = "deplacementFleche 2s forwards";
          animateInnovation();
        }

        if (entry.target.classList.contains("partenariat2")) {
          const circlePie = entry.target.querySelector(".x2");
          circlePie.style.animation = "dash-animation2 2s ease-in forwards";
          animatePartenariat2();
        }
        if (entry.target.classList.contains("formation")) {
          const bars = entry.target.querySelectorAll(".bar");
          bars.forEach((bar) => {
            bar.style.animation = "reveal 1s ease forwards";
          });
          animateFormation();
        }
      }
    });
    if (entryTrigger == 4) {
      observer.disconnect();
    }
  }
});

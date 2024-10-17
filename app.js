// Selecte the dark mode btn

const darkModeBtn = document.querySelector(".dark-btn");
const body = document.body;
console.log(body);

// Add an Event Listener to our button
// Set Default mode
// Get the Default mode from local storage
const defaultMode = localStorage.getItem("mode") || "light";

body.classList.add(defaultMode);
darkModeBtn.addEventListener("click", function () {
  console.log("btn clicked");
  // Check id the Body has a light add a dark class and vicevasa
  if (body.classList.contains("light")) {
    // Remove the light class
    body.classList.remove("light");
    // add a dark class
    body.classList.add("dark");
    localStorage.setItem("mode", "dark");
  } else {
    // Remove the dark class
    body.classList.remove("dark");
    // add a light class
    body.classList.add("light");
    localStorage.setItem("mode", "light");
  }
});

// All the data for overview Cards
const overviewCards = [
  {
    title: "Page Views",
    number: "87",
    percent: 3,
    icon: "./assets/images/icon-facebook.svg",
    isPositive: true,
  },

  {
    title: "Likes",
    number: "52",
    percent: 2,
    icon: "./assets/images/icon-facebook.svg",
    isPositive: false,
  },
  {
    title: "Likes",
    number: "5462",
    percent: 2257,
    icon: "./assets/images/icon-instagram.svg",
    isPositive: true,
  },
  {
    title: "Profile Views",
    number: "52k",
    percent: 1375,
    icon: "./assets/images/icon-instagram.svg",
    isPositive: true,
  },

  {
    title: "Retweets",
    number: "117",
    percent: 303,
    icon: "./assets/images/icon-twitter.svg",
    isPositive: true,
  },
  {
    title: "Likes",
    number: "507",
    percent: 553,
    icon: "./assets/images/icon-twitter.svg",
    isPositive: true,
  },
  {
    title: "Likes",
    number: "107",
    percent: 19,
    icon: "./assets/images/icon-youtube.svg",
    isPositive: false,
  },
  {
    title: "Total Views",
    number: "1407",
    percent: 12,
    icon: "./assets/images/icon-youtube.svg",
    isPositive: false,
  },
];

// Select the Overview Cards container
const cardsContainer = document.querySelector(".overview-cards");

// Array methods

overviewCards.forEach((card) => {
  const cardHtml = ` <div class="overview-card">
            <div class="card-views">
              <p>${card.title}</p>
              <img src=${card.icon} alt="">
            </div>
            <div class="card-percent">
              <p class="number">${card.number}</p>
              <p class=${card.isPositive ? "increment" : "down"}>
                <i class="bx bxs-up-arrow"></i>
                <span> ${card.percent} %</span>
              </p>
            </div>
          </div>`;

  // Insert Insert ADJACENT HTML
  cardsContainer.insertAdjacentHTML("beforeend", cardHtml);
});

console.log(cardsContainer);

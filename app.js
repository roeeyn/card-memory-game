document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector(".grid");
  const resultDisplay = document.querySelector("#result");

  let cardsChosen = [];
  let cardsChosenId = [];
  let wonCards = [];

  const cardsArray = [
    { name: "cheeseburger", img: "images/cheeseburger.png" },
    { name: "fries", img: "images/fries.png" },
    { name: "hotdog", img: "images/hotdog.png" },
    { name: "ice-cream", img: "images/ice-cream.png" },
    { name: "milkshake", img: "images/milkshake.png" },
    { name: "pizza", img: "images/pizza.png" },
  ]
    .reduce((acc, element) => [...acc, element, element], [])
    .sort(() => 0.5 - Math.random());

  const checkMatch = () => {
    const allCards = document.querySelectorAll("img");
    const firstCard = cardsChosen[0];
    const secondCard = cardsChosen[1];
    if (firstCard === secondCard) {
      allCards[cardsChosenId[0]].classList.add("invisible");
      allCards[cardsChosenId[1]].classList.add("invisible");
    } else {
      allCards[cardsChosenId[0]].setAttribute("src", `images/blank.png`);
      allCards[cardsChosenId[1]].setAttribute("src", `images/blank.png`);
    }

    // check if its a match
    if (firstCard === secondCard) {
      wonCards = [...wonCards, firstCard];
      resultDisplay.textContent = wonCards.length;
    }

    // check for finished match
    if (wonCards.length === allCards.length / 2) alert("ya ganaste puñetas");

    // reset arrays
    cardsChosen = [];
    cardsChosenId = [];
  };

  const flipCard = (img, name, { target }) => {
    if (target.classList.contains("invisible")) return;
    const cardId = target.getAttribute("data-id");
    target.setAttribute("src", img);
    cardsChosen = [...cardsChosen, name];
    cardsChosenId = [...cardsChosenId, cardId];
    if (cardsChosen.length === 2) setTimeout(checkMatch, 500);
  };

  // fill cards grid
  cardsArray.forEach(({ img, name }, idx) => {
    const card = document.createElement("img");
    card.setAttribute("src", "images/blank.png");
    card.setAttribute("data-id", idx);
    card.addEventListener("click", (event) => flipCard(img, name, event));
    grid.appendChild(card);
  });
});

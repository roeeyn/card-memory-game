// Helped you a little by adding some boilerplate code.
// Feel free to modify it, if you believe is necessary.
const grid = document.querySelector(".grid");

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

// fill cards grid
cardsArray.forEach(({ img, name }, idx) => {
  const card = document.createElement("img");
  card.setAttribute("src", "images/blank.png");
  grid.appendChild(card);
});

// Your amazing code here 🚀
// PRO Tip: For making a card disappear, add the class \
// "invisible" to it. 🔥

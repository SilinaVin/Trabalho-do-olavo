
const symbols = [
     "🐶","🐶",
  "🐱","🐱",
  "🐭","🐭",
  "🐹","🐹",
  "🐰","🐰",
  "🦊","🦊",
  "🐻","🐻",
  "🐼","🐼",
  "🐨","🐨",
  "🐯","🐯",
  "🦁","🦁",
  "🐮","🐮",
  "🐷","🐷",
  "🐸","🐸",
  "🐵","🐵"
    ];

    let firstCard = null;
    let secondCard = null;
    let lock = false;

    function shuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }

    function createGame() {
      const game = document.getElementById("game");
      game.innerHTML = "";

      const shuffled = [...symbols];
      shuffle(shuffled);

      shuffled.forEach(symbol => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.dataset.symbol = symbol;

        card.addEventListener("click", () => flipCard(card));

        game.appendChild(card);
      });
    }

   function flipCard(card) {
  if (lock || card.classList.contains("flipped")) return;
  if (card === firstCard) return;

  card.classList.add("flipped");
  card.textContent = card.dataset.symbol;

  if (!firstCard) {
    firstCard = card;
  } else {
    secondCard = card;
    checkMatch();
  }
}

    function checkMatch() {
      if (firstCard.dataset.symbol === secondCard.dataset.symbol) {
        firstCard = null;
        secondCard = null;
      } else {
        lock = true;

        setTimeout(() => {
          firstCard.classList.remove("flipped");
          secondCard.classList.remove("flipped");

          firstCard.innerHTML = "";
          secondCard.innerHTML = "";

          firstCard = null;
          secondCard = null;
          lock = false;
        }, 800);
      }
    }

    document.getElementById("restartBtn").addEventListener("click", () => {
      firstCard = null;
      secondCard = null;
      lock = false;
      createGame();
    });

    createGame();


document.getElementById("restartBtn").addEventListener("click", () => {
  createGame();
});

createGame();

const symbols = [
      "https://pbs.twimg.com/media/GmSpd61WgAAr-9K.jpg",
  "https://pbs.twimg.com/media/GmSpd61WgAAr-9K.jpg",
  "https://pbs.twimg.com/media/HKV7DspWwAAsnBB?format=jpg&name=small",
  "https://pbs.twimg.com/media/HKV7DspWwAAsnBB?format=jpg&name=small",
  "https://pbs.twimg.com/media/HJwEJJLW0AAcj6r?format=jpg&name=small",
  "https://pbs.twimg.com/media/HJwEJJLW0AAcj6r?format=jpg&name=small",
  "https://pbs.twimg.com/media/G9YbcSLXAAAdQYj?format=jpg&name=900x900",
      "https://pbs.twimg.com/media/G9YbcSLXAAAdQYj?format=jpg&name=900x900",
      "https://pbs.twimg.com/media/GnkzLr-WEAAUxSE?format=jpg&name=900x900","https://pbs.twimg.com/media/GnkzLr-WEAAUxSE?format=jpg&name=900x900",
      "https://pbs.twimg.com/media/Gp_FElCXUAArCJ6?format=jpg&name=small","https://pbs.twimg.com/media/Gp_FElCXUAArCJ6?format=jpg&name=small",
      "https://pbs.twimg.com/media/HK1xNWCW8AAN-Li?format=png&name=900x900","https://pbs.twimg.com/media/HK1xNWCW8AAN-Li?format=png&name=900x900"
      ,"https://pbs.twimg.com/media/G35ZpjcWcAAIr4O?format=jpg&name=small","https://pbs.twimg.com/media/G35ZpjcWcAAIr4O?format=jpg&name=small","https://pbs.twimg.com/media/HKtsZLWWwAA5PuG?format=jpg&name=360x360",
      "https://pbs.twimg.com/media/HKtsZLWWwAA5PuG?format=jpg&name=360x360","https://pbs.twimg.com/media/HJweLuYXsAEyYue?format=jpg&name=small","https://pbs.twimg.com/media/HJweLuYXsAEyYue?format=jpg&name=small"
      ,"https://pbs.twimg.com/media/GpzvoRMX0AMcnMd?format=jpg&name=360x360","https://pbs.twimg.com/media/GpzvoRMX0AMcnMd?format=jpg&name=360x360","https://pbs.twimg.com/media/GdvvFzJWgAAFGCI?format=jpg&name=small",
      "https://pbs.twimg.com/media/GdvvFzJWgAAFGCI?format=jpg&name=small","https://pbs.twimg.com/media/HK8GUHoWEAES_3q?format=jpg&name=900x900"
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
      card.innerHTML = `<img src="${card.dataset.symbol}">`;

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

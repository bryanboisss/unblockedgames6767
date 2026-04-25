const games = [
  {name:"snake", img:"images/snake.png", cat:"action"},
  {name:"tetris", img:"images/tetris.png", cat:"puzzle"},
  {name:"2048", img:"images/2048.png", cat:"puzzle"},
  {name:"flappy", img:"images/flappy.png", cat:"action"},
  {name:"minesweeper", img:"images/minesweeper.png", cat:"puzzle"},
  {name:"pong-mp", img:"images/pong.png", cat:"multi"},
  {name:"chess", img:"images/chess.png", cat:"multi"},
  {name:"pacman", img:"images/pacman.png", cat:"action"}
];

function render(category, elementId){
  const el = document.getElementById(elementId);
  el.innerHTML = games
    .filter(g => g.cat === category)
    .map(g => `
      <div class="card">
        <a href="play.html?game=${g.name}">
          <img src="${g.img}">
          <p>${g.name.toUpperCase()}</p>
        </a>
      </div>
    `).join("");
}

render("puzzle","puzzle");
render("action","action");
render("multi","multi");

/* SEARCH */
document.getElementById("search").oninput = e => {
  const q = e.target.value.toLowerCase();

  document.querySelectorAll(".card").forEach(card => {
    card.style.display =
      card.innerText.toLowerCase().includes(q) ? "block" : "none";
  });
};
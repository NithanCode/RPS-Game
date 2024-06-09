var yourScore = 0,
  opponentScore = 0,
  choices = ["rock", "paper", "scissors"];
var wins = { rock: 0, paper: 0, scissors: 0 };

window.onload = function () {
  choices.forEach(
    (choice) => (document.getElementById(choice).onclick = selectChoice)
  );
};

function selectChoice() {
  var you = this.id,
    opponent = choices[Math.floor(Math.random() * 3)];
  document.getElementById("your-choice").src = you + ".png";
  document.getElementById("opponent-choice").src = opponent + ".png";

  if (you === opponent) {
    yourScore++;
    opponentScore++;
  } else if (
    (you === "rock" && opponent === "scissors") ||
    (you === "scissors" && opponent === "paper") ||
    (you === "paper" && opponent === "rock")
  ) {
    yourScore++;
    wins[you]++;
  } else {
    opponentScore++;
    wins[opponent]++;
  }

  document.getElementById("your-score").innerText = yourScore;
  document.getElementById("opponent-score").innerText = opponentScore;

  updatePanel();
}

function updatePanel() {
  document.getElementById("rock-wins").innerText = wins.rock;
  document.getElementById("paper-wins").innerText = wins.paper;
  document.getElementById("scissors-wins").innerText = wins.scissors;

  var stats = [
    { id: "rock-stat", wins: wins.rock },
    { id: "paper-stat", wins: wins.paper },
    { id: "scissors-stat", wins: wins.scissors },
  ];

  stats.sort((a, b) => b.wins - a.wins);

  var panel = document.getElementById("panel");
  stats.forEach((stat) => panel.appendChild(document.getElementById(stat.id)));
}

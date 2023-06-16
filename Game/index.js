function Game() {
    let choices = ["rock", "paper", "scissors"];
    let player = prompt("Choose rock, paper, or scissors:");
    let computer = choices[Math.floor(Math.random() * 3)];
  
    let result;
    if (player === computer) {
      result = "Try again!";
    } else if (
      (player === "rock" && computer === "scissors") ||
      (player === "paper" && computer === "rock") ||
      (player === "scissors" && computer === "paper")
    ) {
      result = "You win!";
    } else {
      result = "Computer wins!";
    }
  
    alert(
      "Player's choice: " +
        player +  
        "Computer's choice: " +
        computer + 
        "Result: " + 
        result
    );
  }

  Game(); 
  
  
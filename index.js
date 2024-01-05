let currentPlayer = "O";
let playerSymbol = document.createTextNode(`Player: ${currentPlayer}`);
const displayPlayer = document.getElementById("player");
const blocks = document.querySelectorAll(".blocks");

const renderCurrentPlayer = () => {
  displayPlayer.textContent = `Player: ${currentPlayer}`;
};
renderCurrentPlayer();

const move = (index) => {
  if (!blocks[index].textContent) {
    // Check if the cell is empty
    blocks[index].textContent = currentPlayer; // Set the current player's symbol
    checkWinner();
    currentPlayer = currentPlayer === "O" ? "X" : "O"; // Toggle player turn
    renderCurrentPlayer();
  }
};

const checkWinner = () => {
  const winningCombinations = [
    //Rows
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    //Coulmn
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    //Diagonal
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let combination of winningCombinations) {
    const [a, b, c] = combination;
    if (
      blocks[a].textContent &&
      blocks[a].textContent === blocks[b].textContent &&
      blocks[a].textContent === blocks[c].textContent
    ) {
      // If any winning combination is found, highlight the winner and exit the function
      setTimeout(() => {
        alert(`Player ${blocks[a].textContent} wins!`, location.reload());
      }, 500);
      return;
    }
  }

  // If no winner is found and all cells are filled, it's a tie
  if ([...blocks].every((block) => block.textContent !== "")) {
    setTimeout(() => {
      alert("It's a tie!", location.reload());
    }, 500);
  }
};

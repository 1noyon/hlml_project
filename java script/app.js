let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let winnerText = document.querySelector("#winner");

let turn = "X";
let gameActive = true;

// Winning combinations
let winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];


boxes.forEach(box => {
    box.addEventListener("click", () => {
        if (box.textContent === "" && gameActive) {
            box.textContent = turn;
            checkWinner();
            turn = turn === "X" ? "O" : "X";
        }
    });
});


function checkWinner() {
    for (let pattern of winPatterns) {
        let [a, b, c] = pattern;
        let val1 = boxes[a].textContent;
        let val2 = boxes[b].textContent;
        let val3 = boxes[c].textContent;

        if (val1 && val1 === val2 && val1 === val3) {
            gameActive = false;
            winnerText.textContent = `Winner is: ${val1}`;
            highlightWinnerBoxes(pattern);
            return;
        }
    }

    
    if ([...boxes].every(box => box.textContent !== "")) {
        winnerText.textContent = "It's a Draw!";
        gameActive = false;
    }
}


function highlightWinnerBoxes(pattern) {
    pattern.forEach(index => {
        boxes[index].style.backgroundColor = "#90EE90";
    });
}


resetBtn.addEventListener("click", () => {
    boxes.forEach(box => {
        box.textContent = "";
        box.style.backgroundColor = "#fff";
    });
    winnerText.textContent = "";
    turn = "X";
    gameActive = true;
});

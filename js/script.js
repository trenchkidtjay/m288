// Define the audio file
const audioWin = new Audio('/Assets/Sigue.mp3');

document.addEventListener('DOMContentLoaded', function () {
    const cells = document.querySelectorAll('.cell');
    const statusText = document.getElementById('statusText');
    const restartButton = document.getElementById('Restart');
    let currentPlayer = 'X';

    cells.forEach(cell => {
        cell.addEventListener('click', () => {
            if (!cell.textContent) {
                cell.style.backgroundImage = currentPlayer === 'X' ? "url('/Assets/sbw+nm_cmyk.png')" : "url('/Assets/Sigue.png')";
                cell.textContent = currentPlayer;
                if (checkWin()) {
                    statusText.textContent = `${currentPlayer} wins!`;
                    audioWin.play(); // Start the audio
                    document.getElementById('gameContainer').style.backgroundImage = "url('/Assets/Hpz6.gif')";
                    disableClicks();
                } else if (checkDraw()) {
                    statusText.textContent = "It's a draw!";
                    disableClicks();
                } else {
                    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                    statusText.textContent = `Player ${currentPlayer}'s turn`;
                }
            }
        });
    });

    restartButton.addEventListener('click', () => {
        resetGame();
        audioWin.pause(); // Pause the audio when restarting
    });

    function checkWin() {
        const winConditions = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];
        return winConditions.some(condition => {
            const [a, b, c] = condition;
            return cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent;
        });
    }

    function checkDraw() {
        return [...cells].every(cell => cell.textContent);
    }

    function disableClicks() {
        cells.forEach(cell => {
            cell.style.pointerEvents = 'none';
        });
    }

    function resetGame() {
        cells.forEach(cell => {
            cell.style.backgroundImage = '';
            cell.textContent = '';
            cell.style.pointerEvents = 'auto';
        });
        currentPlayer = 'X';
        statusText.textContent = `Player ${currentPlayer}'s turn`;
        document.getElementById('gameContainer').style.backgroundImage = "url(none)";
    }
});

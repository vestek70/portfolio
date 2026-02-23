class PortfolioApp {
    constructor() {
        this.board = Array(9).fill(null);
        this.currentPlayer = 'X';
        window.addEventListener('DOMContentLoaded', () => {
            this.initTTT();
        });
    }

    // Калькулятор баллов
    checkGrade() {
        const val = document.getElementById('gradeIn').value;
        const res = document.getElementById('gradeRes');
        if(!val || !res) return;
        const isPassed = val >= 60;
        res.innerHTML = isPassed ? 
            `<span style="color:var(--primary)">✅ Одобрен</span>` : 
            `<span style="color:#ff4d4d">❌ Мало баллов</span>`;
    }

    // Крестики-нолики
    initTTT() {
        const cells = document.querySelectorAll('.cell');
        cells.forEach(cell => {
            cell.onclick = (e) => {
                const idx = e.target.dataset.i;
                if(this.board[idx] || this.checkWinner()) return;
                
                this.board[idx] = this.currentPlayer;
                e.target.innerText = this.currentPlayer;
                e.target.style.color = this.currentPlayer === 'X' ? 'var(--primary)' : 'var(--accent)';
                
                if(this.checkWinner()) {
                    setTimeout(() => alert(`Победа: ${this.currentPlayer}`), 10);
                } else {
                    this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
                }
            };
        });
    }

    checkWinner() {
        const wins = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
        return wins.some(comb => this.board[comb[0]] && this.board[comb[0]] === this.board[comb[1]] && this.board[comb[0]] === this.board[comb[2]]);
    }

    resetTTT() {
        this.board.fill(null);
        this.currentPlayer = 'X';
        document.querySelectorAll('.cell').forEach(c => c.innerText = "");
    }

    // Копирование Email
    copyEmail() {
        const email = "vestek70@gmail.com";
        navigator.clipboard.writeText(email).then(() => {
            const status = document.getElementById('formStatus');
            if(status) {
                status.innerText = "Email скопирован!";
                status.style.color = "var(--primary)";
                setTimeout(() => status.innerText = "", 2000);
            }
        });
    }

    // Обработка формы
    handleForm(event) {
        event.preventDefault();
        const status = document.getElementById('formStatus');
        status.innerText = "Сообщение отправлено!";
        status.style.color = "var(--primary)";
        event.target.reset();
    }
}

const app = new PortfolioApp();
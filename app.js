class PortfolioApp {
    constructor() {
        this.board = Array(9).fill(null);
        this.currentPlayer = 'X';
        this.initTTT();
    }

    // 1. Калькулятор баллов
    checkGrade() {
        const val = document.getElementById('gradeIn').value;
        const res = document.getElementById('gradeRes');
        if(!val) return;
        const isPassed = val >= 60;
        res.innerHTML = isPassed ? 
            `<span style="color:var(--primary)">✅ Статус: Одобрен</span>` : 
            `<span style="color:#ff4d4d">❌ Статус: Недостаточно баллов</span>`;
    }

    // 2. Крестики-нолики
    initTTT() {
        document.querySelectorAll('.cell').forEach(cell => {
            cell.onclick = (e) => {
                const idx = e.target.dataset.i;
                if(this.board[idx] || this.checkWinner()) return;
                
                this.board[idx] = this.currentPlayer;
                e.target.innerText = this.currentPlayer;
                e.target.style.color = this.currentPlayer === 'X' ? 'var(--primary)' : 'var(--accent)';
                
                if(this.checkWinner()) {
                    setTimeout(() => alert(`Победитель: ${this.currentPlayer}`), 10);
                } else {
                    this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
                }
            };
        });
    }

    checkWinner() {
        const wins = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
        return wins.some(comb => 
            this.board[comb[0]] && 
            this.board[comb[0]] === this.board[comb[1]] && 
            this.board[comb[0]] === this.board[comb[2]]
        );
    }

    resetTTT() {
        this.board.fill(null);
        this.currentPlayer = 'X';
        document.querySelectorAll('.cell').forEach(c => c.innerText = "");
    }

    // 3. Асинхронная загрузка
    async fetchData() {
        const status = document.getElementById('fetchStatus');
        const btn = document.getElementById('fetchBtn');
        btn.disabled = true;
        status.innerText = "⏳ Подключение к серверу...";
        
        await new Promise(res => setTimeout(res, 1500));
        
        status.innerHTML = `<span style="color:var(--primary)">✅ Данные успешно синхронизированы!</span>`;
        btn.disabled = false;
    }

    // 4. Валидация формы
    handleForm(e) {
        e.preventDefault();
        const email = document.getElementById('fEmail').value;
        const status = document.getElementById('formStatus');
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if(re.test(email)) {
            status.innerText = "Спасибо! Сообщение отправлено.";
            status.style.color = "var(--primary)";
        } else {
            status.innerText = "Ошибка: неверный формат почты.";
            status.style.color = "#ff4d4d";
        }
    }
}

const app = new PortfolioApp();
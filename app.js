class PortfolioApp {
    constructor() {
        this.board = Array(9).fill(null);
        this.player = 'X';
        this.initTTT();
    }

    // 1. Баллы
    checkGrade() {
        const v = document.getElementById('gradeIn').value;
        const res = document.getElementById('gradeRes');
        if (!v) return;
        res.innerText = v >= 60 ? "✅ Одобрен" : "❌ Не одобрен";
        res.style.color = v >= 60 ? "var(--primary)" : "#ff4d4d";
    }

    // 2. Скидки
    calcDiscount() {
        const p = parseFloat(document.getElementById('priceIn').value);
        const d = parseFloat(document.getElementById('discIn').value);
        const res = document.getElementById('discRes');
        if (isNaN(p) || isNaN(d) || p < 0 || d < 0 || d > 100) {
            res.innerText = "Ошибка данных";
            return;
        }
        const final = p - (p * (d / 100));
        res.innerText = `Итог: ${final.toFixed(2)} ₽`;
    }

    // 3. Базовая арифметика (Switch Case)
    basicCalc() {
        const a = parseFloat(document.getElementById('n1').value);
        const b = parseFloat(document.getElementById('n2').value);
        const op = document.getElementById('op').value;
        const res = document.getElementById('calcRes');
        let val;

        switch(op) {
            case '+': val = a + b; break;
            case '-': val = a - b; break;
            case '*': val = a * b; break;
            case '/': val = b !== 0 ? a / b : "Error 0"; break;
            default: val = 0;
        }
        res.innerText = `Результат: ${val}`;
    }

    // 4. Крестики-нолики
    initTTT() {
        document.querySelectorAll('.cell').forEach(c => {
            c.onclick = (e) => {
                const i = e.target.dataset.i;
                if (this.board[i] || this.checkWin()) return;
                this.board[i] = this.player;
                e.target.innerText = this.player;
                this.player = this.player === 'X' ? 'O' : 'X';
            }
        });
    }
    checkWin() {
        const w = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
        return w.some(l => this.board[l[0]] && this.board[l[0]] === this.board[l[1]] && this.board[l[0]] === this.board[l[2]]);
    }
    resetTTT() {
        this.board.fill(null);
        document.querySelectorAll('.cell').forEach(c => c.innerText = "");
        this.player = 'X';
    }

    // 5. To-Do List
    addTodo() {
        const i = document.getElementById('todoIn');
        if (!i.value) return;
        const li = document.createElement('li');
        li.innerText = `• ${i.value}`;
        document.getElementById('todoList').appendChild(li);
        i.value = "";
    }

    // 6. Async Fetch
    async fetchSim() {
        const s = document.getElementById('fetchStatus');
        s.innerText = "⏳ Загрузка...";
        await new Promise(r => setTimeout(r, 1500));
        s.innerText = "✅ Данные получены";
    }
}

const app = new PortfolioApp();
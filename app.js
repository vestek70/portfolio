class PortfolioApp {
    constructor() {
        this.board = Array(9).fill(null);
        this.currentPlayer = 'X';
        this.active = true;
        
        window.addEventListener('DOMContentLoaded', () => {
            this.initTTT();
        });
    }

    // 1. Одобрение
    checkGrade() {
        const val = parseFloat(document.getElementById('gradeIn').value);
        const res = document.getElementById('gradeRes');
        if(isNaN(val)) return;
        res.innerHTML = val >= 7 ? "<span style='color:var(--primary)'>✅ Студент одобрен</span>" : "<span style='color:#ff4d4d'>❌ Не одобрен</span>";
    }

    // 2. Скидка
    calcDiscount() {
        const p = parseFloat(document.getElementById('discPrice').value);
        const d = parseFloat(document.getElementById('discPerc').value);
        if(p < 0 || d < 0) return alert("Ошибка данных");
        const final = p - (p * (d / 100));
        document.getElementById('discRes').innerText = `Итог: ${final.toFixed(2)}`;
    }

    // 3. Цвет
    changeColor(c) {
        document.getElementById('colorBox').style.backgroundColor = c;
    }

    // 4. Калькулятор
    calc(op) {
        const n1 = parseFloat(document.getElementById('calcN1').value);
        const n2 = parseFloat(document.getElementById('calcN2').value);
        let res;
        switch(op) {
            case '+': res = n1 + n2; break;
            case '-': res = n1 - n2; break;
            case '*': res = n1 * n2; break;
            case '/': res = n2 === 0 ? "На 0 нельзя" : n1 / n2; break;
        }
        document.getElementById('calcRes').innerText = "Результат: " + res;
    }

    // 5. Приветствие
    sayHello() {
        const n = document.getElementById('greetName').value || "Гость";
        const h = parseInt(document.getElementById('greetHour').value);
        let s = (h < 12) ? "Доброе утро" : (h < 18) ? "Добрый день" : "Добрый вечер";
        document.getElementById('greetRes').innerText = `${s}, ${n}!`;
    }

    // 6. Крестики-нолики
    initTTT() {
        document.querySelectorAll('.cell').forEach(cell => {
            cell.onclick = (e) => {
                const idx = e.target.dataset.i;
                if(!this.active || this.board[idx]) return;
                this.board[idx] = this.currentPlayer;
                e.target.innerText = this.currentPlayer;
                e.target.style.color = this.currentPlayer === 'X' ? 'var(--primary)' : 'var(--accent)';
                if(this.checkWinner()) {
                    alert("Победа: " + this.currentPlayer);
                    this.active = false;
                }
                this.currentPlayer = (this.currentPlayer === 'X') ? 'O' : 'X';
            };
        });
    }
    checkWinner() {
        const wins = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
        return wins.some(c => this.board[c[0]] && this.board[c[0]] === this.board[c[1]] && this.board[c[0]] === this.board[c[2]]);
    }
    resetTTT() {
        this.board.fill(null); this.active = true; this.currentPlayer = 'X';
        document.querySelectorAll('.cell').forEach(c => c.innerText = "");
    }

    // 7. To-Do
    addTodo() {
        const val = document.getElementById('todoIn').value;
        if(!val) return;
        const li = document.createElement('li');
        li.innerText = val;
        document.getElementById('todoList').appendChild(li);
        document.getElementById('todoIn').value = "";
    }

    // 8. Валидация
    validate() {
        const n = document.getElementById('vName').value;
        const e = document.getElementById('vEmail').value;
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const res = document.getElementById('vRes');
        if(n.length >= 3 && re.test(e)) {
            res.innerText = "✅ Валидация пройдена";
            res.style.color = "var(--primary)";
        } else {
            res.innerText = "❌ Ошибка в полях";
            res.style.color = "#ff4d4d";
        }
    }

    // 9. ООП
    testOOP() {
        class Veiculo { constructor(f,m){this.f=f;this.m=m;} info(){return `${this.f} ${this.m}`;} }
        class Carro extends Veiculo { constructor(f,m,p){super(f,m);this.p=p;} }
        const c = new Carro("Tesla", "Model S", 4);
        document.getElementById('oopRes').innerText = "Класс Carro инициализирован: " + c.info();
    }

    // 10. Асинхронность
    async fetchAsync() {
        const res = document.getElementById('fetchRes');
        res.innerText = "⏳ Загрузка...";
        await new Promise(r => setTimeout(r, 1500));
        res.innerText = "✅ Данные с сервера получены (Simulation)";
    }

    copyEmail() {
        navigator.clipboard.writeText("vestek70@gmail.com");
        const status = document.getElementById('formStatus');
        status.innerText = "Email скопирован!";
        setTimeout(() => status.innerText = "", 2000);
    }

    handleForm(e) {
        e.preventDefault();
        document.getElementById('formStatus').innerText = "Сообщение отправлено!";
        e.target.reset();
    }
}
const app = new PortfolioApp();
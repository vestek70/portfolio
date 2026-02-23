// ============================================
// KONSTANTIN PORTFOLIO - MAIN APPLICATION
// ============================================

// Global App Object
const app = {
    modules: {},
    
    init() {
        console.log('🚀 Iniciando Laboratório Prático de JavaScript');
        this.initModules();
        this.attachEventListeners();
        this.initAnimationCanvas();
    },

    initModules() {
        this.modules = {
            approval: new ApprovalCalculator(),
            discount: new DiscountCalculator(),
            colorSwitcher: new ColorSwitcher(),
            calculator: new ArithmeticCalculator(),
            greeting: new SmartGreeting(),
            tictactoe: new TicTacToe(),
            todoList: new ToDoList(),
            formValidation: new FormValidation(),
            vehicleSystem: new VehicleSystem(),
            serverSimulation: new ServerSimulation()
        };
    },

    attachEventListeners() {
        // Color switcher buttons
        document.querySelectorAll('.btn-color').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const color = e.target.dataset.color;
                this.modules.colorSwitcher.setColor(color);
            });
        });

        // Enter key support on input fields
        document.querySelectorAll('.input-field').forEach(input => {
            input.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    const card = input.closest('.lab-card');
                    const btn = card?.querySelector('.btn-primary');
                    if (btn) btn.click();
                }
            });
        });
    },

    initAnimationCanvas() {
        const canvas = document.getElementById('bgCanvas');
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        let particles = [];
        const particleCount = 30;

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2 + 0.5;
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5;
                this.opacity = Math.random() * 0.5 + 0.1;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                if (this.x < 0) this.x = canvas.width;
                if (this.x > canvas.width) this.x = 0;
                if (this.y < 0) this.y = canvas.height;
                if (this.y > canvas.height) this.y = 0;
            }

            draw() {
                ctx.fillStyle = `rgba(0, 217, 255, ${this.opacity})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });

            requestAnimationFrame(animate);
        };

        animate();

        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });
    }
};

// ============================================
// 1. APPROVAL CALCULATOR
// ============================================
class ApprovalCalculator {
    check() {
        const grade = parseFloat(document.getElementById('gradeInput').value);
        const resultEl = document.getElementById('gradeResult');

        if (isNaN(grade) || grade < 0 || grade > 10) {
            resultEl.textContent = '❌ Digite uma nota válida (0-10)';
            resultEl.style.color = '#ff4d4d';
            return;
        }

        const approved = grade >= 7;
        const status = approved ? '✅ APROVADO' : '❌ REPROVADO';
        const color = approved ? '#00ff88' : '#ff4d4d';

        resultEl.textContent = `${status} (Nota: ${grade})`;
        resultEl.style.color = color;
    }
}

// ============================================
// 2. DISCOUNT CALCULATOR
// ============================================
class DiscountCalculator {
    calculate() {
        const price = parseFloat(document.getElementById('priceInput').value);
        const discount = parseFloat(document.getElementById('discountInput').value);
        const resultEl = document.getElementById('discountResult');

        if (isNaN(price) || isNaN(discount) || price < 0 || discount < 0 || discount > 100) {
            resultEl.textContent = '❌ Valores inválidos';
            resultEl.style.color = '#ff4d4d';
            return;
        }

        const discountAmount = price * (discount / 100);
        const finalPrice = price - discountAmount;

        resultEl.textContent = `R$ ${finalPrice.toFixed(2)} (economizou R$ ${discountAmount.toFixed(2)})`;
        resultEl.style.color = '#00ff88';
    }
}

// ============================================
// 3. COLOR SWITCHER
// ============================================
class ColorSwitcher {
    setColor(color) {
        const boxes = [
            document.getElementById('colorBox1'),
            document.getElementById('colorBox2'),
            document.getElementById('colorBox3')
        ];

        boxes.forEach(box => {
            if (box) {
                box.style.backgroundColor = color;
                box.style.transition = 'background-color 0.3s ease';
            }
        });
    }

    reset() {
        const boxes = [
            document.getElementById('colorBox1'),
            document.getElementById('colorBox2'),
            document.getElementById('colorBox3')
        ];

        boxes.forEach(box => {
            if (box) {
                box.style.backgroundColor = '';
            }
        });
    }
}

// ============================================
// 4. ARITHMETIC CALCULATOR
// ============================================
class ArithmeticCalculator {
    compute() {
        const num1 = parseFloat(document.getElementById('calcNum1').value);
        const num2 = parseFloat(document.getElementById('calcNum2').value);
        const operator = document.getElementById('calcOperator').value;
        const resultEl = document.getElementById('calcResult');

        if (isNaN(num1) || isNaN(num2)) {
            resultEl.textContent = '❌ Digite números válidos';
            resultEl.style.color = '#ff4d4d';
            return;
        }

        let result;
        const symbol = {'+': '+', '-': '-', '*': '×', '/': '÷'}[operator];

        switch (operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                if (num2 === 0) {
                    resultEl.textContent = '❌ Divisão por zero é inválida';
                    resultEl.style.color = '#ff4d4d';
                    return;
                }
                result = num1 / num2;
                break;
            default:
                resultEl.textContent = '❌ Operador inválido';
        }

        resultEl.textContent = `${num1} ${symbol} ${num2} = ${result.toFixed(4)}`;
        resultEl.style.color = '#00d9ff';
    }
}

// ============================================
// 5. SMART GREETING
// ============================================
class SmartGreeting {
    generate() {
        const name = document.getElementById('greetingName').value.trim();
        const hour = parseInt(document.getElementById('greetingHour').value);
        const resultEl = document.getElementById('greetingResult');

        if (!name || name.length < 2) {
            resultEl.textContent = '❌ Digite seu nome';
            resultEl.style.color = '#ff4d4d';
            return;
        }

        let greeting;
        const finalHour = isNaN(hour) ? new Date().getHours() : (hour % 24);

        if (finalHour < 12) {
            greeting = `☀️ Bom dia, ${name}!`;
        } else if (finalHour < 18) {
            greeting = `🌤️ Boa tarde, ${name}!`;
        } else {
            greeting = `🌙 Boa noite, ${name}!`;
        }

        resultEl.textContent = greeting;
        resultEl.style.color = '#00ff88';
    }
}

// ============================================
// 6. TIC-TAC-TOE GAME
// ============================================
class TicTacToe {
    constructor() {
        this.board = Array(9).fill(null);
        this.currentPlayer = 'X';
        this.gameOver = false;
    }

    reset() {
        this.board = Array(9).fill(null);
        this.currentPlayer = 'X';
        this.gameOver = false;

        document.querySelectorAll('.game-cell').forEach(cell => {
            cell.textContent = '';
            cell.style.color = '';
            cell.onclick = (e) => this.play(e);
        });

        this.updateStatus();
    }

    play(e) {
        if (this.gameOver) return;

        const cell = e.target;
        const index = Array.from(cell.parentElement.children).indexOf(cell);

        if (this.board[index] !== null) return;

        this.board[index] = this.currentPlayer;
        cell.textContent = this.currentPlayer;
        cell.style.color = this.currentPlayer === 'X' ? '#00d9ff' : '#ff006e';

        if (this.checkWin()) {
            this.gameOver = true;
            document.getElementById('gameStatus').textContent = `🎉 Vitória: ${this.currentPlayer}!`;
            return;
        }

        if (this.board.every(cell => cell !== null)) {
            this.gameOver = true;
            document.getElementById('gameStatus').textContent = '🤝 Empate!';
            return;
        }

        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
        this.updateStatus();
    }

    checkWin() {
        const lines = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];

        return lines.some(([a, b, c]) => 
            this.board[a] && 
            this.board[a] === this.board[b] && 
            this.board[a] === this.board[c]
        );
    }

    updateStatus() {
        document.getElementById('gameStatus').textContent = `Turno: ${this.currentPlayer}`;
    }

    initializeBoardListeners() {
        document.querySelectorAll('.game-cell').forEach(cell => {
            cell.onclick = (e) => this.play(e);
        });
    }
}

// ============================================
// 7. TO-DO LIST
// ============================================
class ToDoList {
    add() {
        const input = document.getElementById('todoInput');
        const text = input.value.trim();
        const listEl = document.getElementById('todoListContainer');

        if (!text) {
            alert('Digite uma tarefa');
            return;
        }

        const li = document.createElement('li');
        li.textContent = text;
        
        li.onclick = () => {
            li.style.opacity = '0.5';
            li.style.textDecoration = 'line-through';
        };

        listEl.appendChild(li);
        input.value = '';
        input.focus();
    }
}

// ============================================
// 8. FORM VALIDATION
// ============================================
class FormValidation {
    validate() {
        const name = document.getElementById('formName').value.trim();
        const email = document.getElementById('formEmail').value.trim();
        const resultEl = document.getElementById('formResult');

        // Name validation
        if (!name || name.length < 3 || name.length > 50) {
            resultEl.textContent = '❌ Nome deve ter 3-50 caracteres';
            resultEl.style.color = '#ff4d4d';
            return false;
        }

        // Email validation with Regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            resultEl.textContent = '❌ Email inválido';
            resultEl.style.color = '#ff4d4d';
            return false;
        }

        resultEl.textContent = '✅ Formulário validado com sucesso!';
        resultEl.style.color = '#00ff88';
        return true;
    }
}

// ============================================
// 9. VEHICLE SYSTEM (OOP)
// ============================================
class Vehicle {
    constructor(manufacturer, model, year) {
        this.manufacturer = manufacturer;
        this.model = model;
        this.year = year;
    }

    displayInfo() {
        console.log(`${this.manufacturer} ${this.model} (${this.year})`);
    }
}

class Car extends Vehicle {
    constructor(manufacturer, model, year, doors) {
        super(manufacturer, model, year);
        this.doors = doors;
    }

    displayInfo() {
        console.log(`🚗 ${this.manufacturer} ${this.model} (${this.year}) - ${this.doors} portas`);
    }
}

class Motorcycle extends Vehicle {
    constructor(manufacturer, model, year, displacement) {
        super(manufacturer, model, year);
        this.displacement = displacement;
    }

    displayInfo() {
        console.log(`🏍️ ${this.manufacturer} ${this.model} (${this.year}) - ${this.displacement}cc`);
    }
}

class Truck extends Vehicle {
    constructor(manufacturer, model, year, capacity) {
        super(manufacturer, model, year);
        this.capacity = capacity;
    }

    displayInfo() {
        console.log(`🚚 ${this.manufacturer} ${this.model} (${this.year}) - Carga: ${this.capacity}t`);
    }
}

class VehicleSystem {
    demo() {
        console.clear();
        console.log('%c🚗 SISTEMA DE GERENCIAMENTO DE VEÍCULOS 🚗', 'color: #00d9ff; font-size: 16px; font-weight: bold;');
        console.log('%c--- Demonstração de OOP com Classes, Herança e Polimorfismo ---', 'color: #80b0ff;');
        console.log('');

        const vehicles = [
            new Car('Toyota', 'Corolla', 2023, 4),
            new Motorcycle('Harley-Davidson', 'Street 750', 2022, 750),
            new Truck('Volvo', 'FH16', 2021, 25),
            new Car('BMW', 'M4', 2024, 2),
            new Motorcycle('Yamaha', 'YZF-R1', 2023, 998)
        ];

        vehicles.forEach((vehicle, index) => {
            console.log(`${index + 1}. `, vehicle);
            vehicle.displayInfo();
        });

        console.log('');
        console.log('%c✅ Sistema de Veículos Implementado com Sucesso!', 'color: #00ff88; font-weight: bold;');
    }
}

// ============================================
// 10. SERVER SIMULATION
// ============================================
class ServerSimulation {
    async fetch() {
        const resultEl = document.getElementById('serverResult');
        const spinnerEl = document.getElementById('loadingSpinner');
        const btnEl = document.getElementById('serverBtn');

        spinnerEl.style.display = 'block';
        resultEl.textContent = '';
        btnEl.disabled = true;

        try {
            const data = await this.simulateServerRequest();
            
            spinnerEl.style.display = 'none';
            resultEl.textContent = `✅ ${data.message}`;
            resultEl.style.color = '#00ff88';
        } catch (error) {
            spinnerEl.style.display = 'none';
            resultEl.textContent = `❌ ${error.message}`;
            resultEl.style.color = '#ff4d4d';
        } finally {
            btnEl.disabled = false;
        }
    }

    simulateServerRequest() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const success = Math.random() > 0.3;

                if (success) {
                    resolve({
                        message: 'Dados carregados com sucesso! 🎉',
                        timestamp: new Date().toLocaleString('pt-BR')
                    });
                } else {
                    reject(new Error('Falha na conexão com servidor'));
                }
            }, 2000);
        });
    }
}

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    app.init();
    
    // Initialize Tic-Tac-Toe listeners
    app.modules.tictactoe.initializeBoardListeners();
    
    console.log('✅ Aplicação inicializada com sucesso!');
});

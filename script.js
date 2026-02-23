let scene, camera, renderer, core;

function init3D() {
    const container = document.getElementById('canvas-container');
    if(!container) return;

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    const geometry = new THREE.IcosahedronGeometry(2, 2);
    const material = new THREE.MeshPhongMaterial({ color: 0x00f2ff, wireframe: true, transparent: true, opacity: 0.08 });
    core = new THREE.Mesh(geometry, material);
    scene.add(core);

    const light = new THREE.PointLight(0xffffff, 1, 100);
    light.position.set(10, 10, 10);
    scene.add(light, new THREE.AmbientLight(0xffffff, 0.2));
    camera.position.z = 5;
}

function animate() {
    requestAnimationFrame(animate);
    if(core) { core.rotation.y += 0.001; core.rotation.x += 0.001; }
    if(renderer) renderer.render(scene, camera);
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
    });
}, { threshold: 0.1 });

window.addEventListener('load', () => {
    init3D();
    animate();
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});

window.addEventListener('resize', () => {
    if(!camera || !renderer) return;
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// --- Лабораторные упражнения ---
function calcularDesconto(preco, percentual) {
    if (preco === '' || percentual === '') return null;
    preco = Number(preco);
    percentual = Number(percentual);
    if (isNaN(preco) || isNaN(percentual) || preco < 0 || percentual < 0) {
        alert('Отрицательные или некорректные значения не допускаются!');
        return null;
    }
    const valorDesconto = preco * (percentual / 100);
    const precoFinal = preco - valorDesconto;
    return { preco, percentual, valorDesconto, precoFinal };
}

// Переключатель цвета
function initColorSwitcher() {
    document.querySelectorAll('.color-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const color = btn.dataset.color;
            document.getElementById('div1').style.backgroundColor = color;
            document.getElementById('div2').style.backgroundColor = color;
            document.getElementById('div3').style.backgroundColor = color;
        });
    });
    document.getElementById('resetColors').addEventListener('click', () => {
        document.getElementById('div1').style.backgroundColor = '';
        document.getElementById('div2').style.backgroundColor = '';
        document.getElementById('div3').style.backgroundColor = '';
    });
}

// Арифметический калькулятор
function efetuaOperacao(n1, n2, operador) {
    let resultado;
    switch (operador) {
        case '+': resultado = n1 + n2; break;
        case '-': resultado = n1 - n2; break;
        case '*': resultado = n1 * n2; break;
        case '/':
            if (n2 === 0) {
                resultado = 'Деление на ноль недопустимо';
            } else {
                resultado = n1 / n2;
            }
            break;
        default: resultado = 'Неверный оператор';
    }
    return resultado;
}

// Приветствие
function saudacaoPersonalizada(nome, hora) {
    nome = nome || 'Гость';
    hora = Number(hora);
    if (isNaN(hora) || hora < 0 || hora > 23) hora = new Date().getHours();
    if (hora < 12) return 'Доброе утро, ' + nome;
    else if (hora >= 12 && hora < 18) return 'Добрый день, ' + nome;
    else return 'Добрый вечер, ' + nome;
}

// Крестики-нолики
let vezDoX = true;
function initTicTacToe() {
    const celulas = document.querySelectorAll('#board .cell');
    celulas.forEach(celula => {
        celula.textContent = '';
        celula.addEventListener('click', tratarClique, { once: true });
    });
    document.getElementById('resetTic').addEventListener('click', resetTic);
    updateTurnInfo();
}

function tratarClique(event) {
    const celula = event.target;
    celula.textContent = vezDoX ? 'X' : 'O';
    if (checkWin(vezDoX ? 'X' : 'O')) {
        setTimeout(() => alert('Победил ' + (vezDoX ? 'X' : 'O')), 50);
        // Заблокировать оставшиеся ячейки
        document.querySelectorAll('#board .cell').forEach(c => c.replaceWith(c.cloneNode(true)));
    } else if (isBoardFull()) {
        setTimeout(() => alert('Ничья'), 50);
    } else {
        vezDoX = !vezDoX;
        updateTurnInfo();
    }
}

function resetTic() {
    vezDoX = true;
    const board = document.getElementById('board');
    board.querySelectorAll('.cell').forEach((cell, idx) => {
        const newCell = document.createElement('div');
        newCell.className = 'cell';
        newCell.dataset.index = idx;
        newCell.addEventListener('click', tratarClique, { once: true });
        board.replaceChild(newCell, cell);
    });
    updateTurnInfo();
}

function getBoardState() {
    return Array.from(document.querySelectorAll('#board .cell')).map(c => c.textContent || null);
}

function isBoardFull() {
    return getBoardState().every(v => v !== null && v !== '');
}

function checkWin(player) {
    const s = getBoardState();
    const wins = [
        [0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6]
    ];
    return wins.some(trip => trip.every(i => s[i] === player));
}

function updateTurnInfo(){
    const el = document.getElementById('turnInfo');
    if(el) el.textContent = 'Ход: ' + (vezDoX ? 'X' : 'O');
}

// To-Do list
function initTodo() {
    document.getElementById('addTask').addEventListener('click', adicionarTarefa);
}
function adicionarTarefa() {
    const input = document.getElementById('inputTarefa');
    const lista = document.getElementById('listaTarefas');
    if(!input.value.trim()) return;
    const novaTarefa = document.createElement('li');
    novaTarefa.textContent = input.value.trim();
    lista.appendChild(novaTarefa);
    input.value = '';
}

// Валидация контактов
function validateForm(name, email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!name || name.length < 3 || name.length > 50) {
        alert('Имя должно быть от 3 до 50 символов');
        return false;
    }
    if (!emailPattern.test(email)) {
        alert('Введите корректный email');
        return false;
    }
    alert('Форма валидна!');
    return true;
}

// OOP demo
class Veiculo {
    constructor(fabricante, modelo, ano) {
        this.fabricante = fabricante;
        this.modelo = modelo;
        this.ano = ano;
    }
    mostrarDados() {
        console.log(`${this.fabricante} ${this.modelo} (${this.ano})`);
    }
}

class Carro extends Veiculo {
    constructor(fabricante, modelo, ano, portas) {
        super(fabricante, modelo, ano);
        this.portas = portas;
    }
}

class Moto extends Veiculo {
    constructor(fabricante, modelo, ano, cilindradas) {
        super(fabricante, modelo, ano);
        this.cilindradas = cilindradas;
    }
}

function demoVehicles() {
    const carro = new Carro('Toyota', 'Corolla', 2020, 4);
    const moto = new Moto('Yamaha', 'R1', 2021, 1000);
    carro.mostrarDados();
    moto.mostrarDados();
}

// Подключение обработчиков на загрузке страницы
window.addEventListener('DOMContentLoaded', () => {
    // Discount
    document.getElementById('calcDiscount').addEventListener('click', () => {
        const preco = document.getElementById('price').value;
        const percentual = document.getElementById('percent').value;
        const res = calcularDesconto(preco, percentual);
        const out = document.getElementById('discountResult');
        if(res) out.textContent = `Итого: ${res.precoFinal.toFixed(2)} ₽ (Скидка: ${res.valorDesconto.toFixed(2)} ₽)`;
        else out.textContent = '—';
    });

    // Color switcher
    initColorSwitcher();

    // Arithmetic
    document.getElementById('calcOp').addEventListener('click', () => {
        const n1 = Number(document.getElementById('n1').value);
        const n2 = Number(document.getElementById('n2').value);
        const op = document.getElementById('operator').value;
        const r = efetuaOperacao(n1, n2, op);
        document.getElementById('resultado').textContent = 'Результат: ' + r;
    });

    // Greeting
    document.getElementById('greetBtn').addEventListener('click', () => {
        const name = document.getElementById('nameInput').value;
        const hour = document.getElementById('hourInput').value;
        document.getElementById('greetResult').textContent = saudacaoPersonalizada(name, hour);
    });

    // TicTacToe
    initTicTacToe();

    // Todo
    initTodo();

    // Contact validation
    document.getElementById('validateContact').addEventListener('click', () => {
        const name = document.getElementById('contactName').value;
        const email = document.getElementById('contactEmail').value;
        const ok = validateForm(name, email);
        document.getElementById('contactResult').textContent = ok ? 'Форма валидна' : 'Ошибка в форме';
    });

    // OOP demo
    document.getElementById('demoVehicles').addEventListener('click', demoVehicles);
});
# 🚀 Laboratório Prático de JavaScript - Portfolio Profissional

> **Um portfólio moderno de desenvolvedor com 10 exercícios práticos interativos usando HTML5, CSS3 e JavaScript vanilla.**

## 👨‍💻 Desenvolvedor

**Konstantin** - Desenvolvedor Full-Stack com foco em Frontend  
*Meu nome é Konstantin. Eu projeto interfaces onde a lógica limpa encontra uma experiência UX impecável.*

---

## 📁 Estrutura do Projeto

```
frontend14/
├── index.html              # Página principal do portfólio
├── css/
│   └── style.css          # Estilos completos (Glassmorphism, Animações)
├── js/
│   └── main.js            # Aplicação principal com 10 módulos
└── README.md              # Este arquivo
```

---

## 🎯 Características

✨ **Design Moderno**
- Glassmorphism com efeitos de blur
- Gradientes suaves e neon
- Animações smooth e micro-interações
- Dark mode 2026-ready
- Responsive design (Mobile-first)

🧠 **Tecnologias**
- HTML5 Semântico
- CSS3 (Flexbox, Grid, Animações)
- JavaScript Vanilla (ES6+)
- Sem dependências externas

🎮 **10 Exercícios Interativos**

---

## 10 Exercícios Práticos

### 1️⃣ **Calculadora de Aprovação**
Valida se a nota é ≥7 para aprovação automática.
- **Skills**: Variáveis, Condicionais, DOM Manipulation
- **Input**: Nota (0-10)
- **Output**: ✅ APROVADO ou ❌ REPROVADO

### 2️⃣ **Calculadora de Desconto**
Calcula o preço final com validação de dados.
- **Skills**: Validação, Operações Matemáticas, Format
- **Input**: Preço (R$), Desconto (%)
- **Output**: Preço final e economia

### 3️⃣ **Alternador de Cores**
Muda as cores dos elementos com botões.
- **Skills**: Event Listeners, DOM Manipulation, CSS
- **Input**: Clique em botões de cores
- **Output**: Divs coloridas

### 4️⃣ **Calculadora Aritmética**
Operações com proteção contra divisão por zero.
- **Skills**: Switch-Case, Error Handling
- **Input**: Dois números + operador (+, -, ×, ÷)
- **Output**: Resultado da operação

### 5️⃣ **Saudação Inteligente**
Saudação personalizada conforme hora do dia.
- **Skills**: Strings, Date/Time, Condicionais
- **Input**: Nome, Hora (0-23)
- **Output**: Saudação personalizada

### 6️⃣ **Jogo da Velha (Tic-Tac-Toe)**
Jogo 3x3 com detecção automática de vitória.
- **Skills**: Estado, Lógica de Jogo, Arrays
- **Input**: Clique em células do tabuleiro
- **Output**: Placar de vitória/empate

### 7️⃣ **To-Do List Dinâmica**
Adicione tarefas e gerencie com DOM dinâmico.
- **Skills**: DOM Creation, Event Management, Array Methods
- **Input**: Texto da tarefa
- **Output**: Lista com tarefas criadas

### 8️⃣ **Validação de Formulário**
Valida nome e email com RegEx.
- **Skills**: Regex, Input Validation, User Feedback
- **Input**: Nome, Email
- **Output**: Validação com feedback visual

### 9️⃣ **Sistema de Veículos (OOP)**
Classes, herança e polimorfismo em prática.
- **Skills**: OOP, Classes, Herança, Polimorfismo
- **Output**: Console.log com informações dos veículos
- **Classes**: Vehicle, Car, Motorcycle, Truck

### 🔟 **Simulação de Servidor**
Promises, Async/Await e loading animation.
- **Skills**: Promises, Async/Await, Error Handling
- **Output**: Loading spinner + dados simulados
- **Demo**: Simula requisição HTTP com sucesso/erro

---

## 🎨 Design & UX

### Componentes Visuais
- **Cards com Hover Lift**: Efeito de levantamento ao passar o mouse
- **Botões com Ripple Effect**: Animação ao clicar
- **Loading Spinner**: Animação de carregamento
- **Fade-in Sections**: Reveal animations ao scroll
- **Smooth Transitions**: Todas as interações

### Paleta de Cores
```
Primary: #00d9ff     (Ciano)
Accent:  #ff006e     (Rosa/Magenta)
Success: #00ff88     (Verde)
Danger:  #ff4d4d     (Vermelho)
Background: #0a0e27  (Azul muito escuro)
```

---

## 🚀 Como Usar

### 1. **Iniciar Servidor Local**

#### Opção 1: Python 3
```bash
cd frontend14
python -m http.server 8000
```

#### Opção 2: Node.js (http-server)
```bash
cd frontend14
npx http-server -p 8000
```

#### Opção 3: Live Server no VSCode
- Instale a extensão "Live Server"
- Clique com botão direito em `index.html`
- Selecione "Open with Live Server"

### 2. **Acessar no Browser**
```
http://localhost:8000
```

### 3. **Testar Exercícios**
- Cada exercício é uma card interativa
- Preencha os inputs e clique em "Verificar/Calcular/etc"
- Veja os resultados em tempo real

### 4. **Abrir Console (DevTools)**
Para ver a saída do OOP Demo:
- Pressione **F12** ou **Ctrl+Shift+I** (Windows/Linux)
- Pressione **Cmd+Option+I** (Mac)
- Vá para aba "Console"
- Clique em "Sistema de Veículos" → "Executar Demo"

---

## 📝 Estrutura do Código JavaScript

### Arquitetura Modular
```javascript
app.init()
├── initModules()
│   ├── ApprovalCalculator
│   ├── DiscountCalculator
│   ├── ColorSwitcher
│   ├── ArithmeticCalculator
│   ├── SmartGreeting
│   ├── TicTacToe
│   ├── ToDoList
│   ├── FormValidation
│   ├── VehicleSystem
│   └── ServerSimulation
├── attachEventListeners()
└── initAnimationCanvas()
```

### Padrões Utilizados
- **Classes (ES6)**: Encapsulamento e organização
- **Herança**: Vehicle → Car, Motorcycle, Truck
- **Polimorfismo**: Método `displayInfo()` customizado
- **Promises & Async/Await**: Simulação assíncrona
- **Event Listeners**: Interatividade
- **DOM Manipulation**: Criação e atualização dinâmica

---

## 🎬 Animações Incluídas

- **slideInUp**: Elementos aparecem de baixo para cima
- **slideInLeft**: To-do items entram da esquerda
- **float**: Cards flutuando suavemente
- **floatCard**: Cards do hero com rotação suave
- **gradientFlow**: Texto com gradiente animado
- **spin**: Loading spinner
- **reveal-card**: Cards com stagger animation

---

## 📱 Responsividade

- **Desktop**: Layout completo com 3-4 colunas
- **Tablet** (1024px): 2 colunas
- **Mobile** (768px): 1 coluna
- **Small Mobile** (480px): Otimização de espaço

---

## 🔧 Tecnologias

| Tecnologia | Propósito |
|-----------|-----------|
| **HTML5** | Estrutura semântica |
| **CSS3** | Styling, Animations, Grid/Flexbox |
| **JavaScript (ES6+)** | Lógica e interatividade |
| **Canvas API** | Animação de background |
| **Regex** | Validação de email |

---

## ✅ Checklist de Funcionalidades

- [x] Hero Section com introdução
- [x] Tech Stack visível
- [x] 10 exercícios como cards
- [x] Validação de inputs
- [x] Feedback visual (cores, mensagens)
- [x] Animações suaves
- [x] Design responsivo
- [x] Console logging para OOP
- [x] Loading states
- [x] Error handling

---

## 🎓 Conceitos Aprendidos

### Fundamentals
- Variáveis e tipos de dados
- Operadores (aritméticos, lógicos)
- Condicionais (if/else, switch)
- Loops (for, while)
- Funções

### Intermediate
- Arrays e Objetos
- Manipulação de DOM
- Event Listeners
- LocalStorage
- Template Literals

### Advanced
- Classes e OOP
- Herança e Polimorfismo
- Promises e Async/Await
- Regular Expressions
- Functional Programming

---

## 📚 Referências

- [MDN Web Docs](https://developer.mozilla.org/)
- [JavaScript.info](https://javascript.info/)
- [CSS Tricks](https://css-tricks.com/)
- [Web.dev](https://web.dev/)

---

## 💡 Dicas de Desenvolvimento

1. **DevTools**: Use F12 para inspecionar elementos
2. **Console**: Verifique mensagens de erro
3. **Performance**: Use Lighthouse (DevTools)
4. **Acessibilidade**: Teste com screen readers
5. **Mobile First**: Sempre teste em dispositivos móveis

---

## 🚀 Próximos Passos

- [ ] Adicionar Backend (Node.js/Express)
- [ ] Implementar Banco de Dados (MongoDB)
- [ ] API REST
- [ ] Autenticação
- [ ] Progressive Web App (PWA)
- [ ] Testing (Jest/Mocha)

---

## 📄 Licença

Este projeto é de código aberto e fornecido como exemplo educacional.

---

## 👋 Contato

**Konstantin**
- GitHub: https://github.com/konstantin-dev
- LinkedIn: www.linkedin.com/in/konstantin-undefined-a235283b2
- Email: vestek70@gmail.com

---

**Criado em 2026 como demonstração profissional de desenvolvimento frontend.**

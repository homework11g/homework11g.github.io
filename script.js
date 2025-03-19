// JavaScript (чава скрипт)
function showMessage() {
    // Показываем скрытое сообщение
    document.getElementById('surpriseMessage').classList.remove('hidden');
}

function changeBackground() {
    // Меняем фон на случайный цвет
    const colors = ['#ff9a9e', '#fad0c4', '#a1c4fd', '#c2e9fb', '#d4fc79'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.background = randomColor;
}

function showEmojis() {
    // Показываем смайлики
    const emojiContainer = document.getElementById('emojiContainer');
    emojiContainer.classList.remove('hidden');
}

function playMusic() {
    // Включаем музыку
    const music = document.getElementById('music');
    music.play();
    alert('Музыка включена! 🎵');
}

function startConfetti() {
    // Запускаем конфетти
    const confettiContainer = document.getElementById('confetti');
    confettiContainer.classList.remove('hidden');

    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti-piece');
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.animationDelay = `${Math.random() * 2}s`;
        confettiContainer.appendChild(confetti);
    }

    setTimeout(() => {
        confettiContainer.classList.add('hidden');
        confettiContainer.innerHTML = '';
    }, 5000); // Останавливаем конфетти через 5 секунд
}

function startGame() {
    // Запускаем игру
    const game = document.getElementById('game');
    game.classList.remove('hidden');

    const target = document.getElementById('target');
    const scoreDisplay = document.getElementById('score');
    let score = 0;

    target.onclick = () => {
        score++;
        scoreDisplay.textContent = score;
        target.style.left = `${Math.random() * 80}vw`;
        target.style.top = `${Math.random() * 80}vh`;
    };
}

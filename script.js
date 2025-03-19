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

function showJoke() {
    // Показываем случайный анекдот
    const jokes = [
        "Почему снеговик не ходит на дискотеки? Потому что он боится растаять! ☃️",
        "Что сказал слон, когда наступил на колобка? — Колобок-колобок, я тебя съем! 🐘",
        "Почему рыбы не играют в футбол? Потому что боятся сетки! 🐟",
        "Что сказал кот, когда его спросили, почему он такой толстый? — Я не толстый, я просто пушистый! 🐱",
        "Почему курица перешла дорогу? Чтобы доказать, что она не индюк! 🐔",
        "Что сказал один банан другому? — Давай держаться вместе, а то нас разделят! 🍌",
        "Почему книга пошла к врачу? Потому что у неё были плохие страницы! 📚"
    ];
    const jokeText = document.getElementById('jokeText');
    jokeText.textContent = jokes[Math.floor(Math.random() * jokes.length)];
    document.getElementById('joke').classList.remove('hidden');
}

function showQuote() {
    // Показываем случайную цитату
    const quotes = [
        "Жизнь — это как велосипед: чтобы сохранить равновесие, нужно двигаться вперёд. 🚴‍♂️",
        "Мечты сбываются, если ты готов к ним идти. 🌟",
        "Счастье — это не что-то готовое. Оно приходит из твоих действий. 💖",
        "Каждый день — это новая возможность изменить свою жизнь. 🌈"
    ];
    const quoteText = document.getElementById('quoteText');
    quoteText.textContent = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById('quote').classList.remove('hidden');

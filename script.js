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

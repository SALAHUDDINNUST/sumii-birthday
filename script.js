// Loading Screen
window.addEventListener('load', function() {
    setTimeout(function() {
        document.getElementById('loading-screen').classList.add('hidden');
        document.getElementById('main-content').classList.add('visible');
    }, 10000);
});

// Floating Elements
const floatingContainer = document.getElementById('floatingElements');
const emojis = ['🎈','🎈','🎈','🧸','💕','💖','💗','🎉','🎉','💝','😘','💋','🌹','✨','🎂','⭐','💫'];

function createFloatingElement() {
    const element = document.createElement('div');
    element.className = 'floating-item balloon';
    element.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    element.style.left = Math.random() * 100 + '%';
    element.style.animationDelay = Math.random() * 5 + 's';
    element.style.animationDuration = (10 + Math.random() * 10) + 's';
    floatingContainer.appendChild(element);

    setTimeout(() => {
        element.remove();
    }, 20000);
}

setInterval(createFloatingElement, 800);
for (let i = 0; i < 25; i++) setTimeout(createFloatingElement, i * 300);

// Music Control
const musicControl = document.getElementById('musicControl');
const bgMusic = document.getElementById('bgMusic');
let isPlaying = false;

musicControl.addEventListener('click', function() {
    if (isPlaying) {
        bgMusic.pause();
        musicControl.innerHTML = '<span>🎵</span>';
        isPlaying = false;
    } else {
        bgMusic.play();
        musicControl.innerHTML = '<span>🔊</span>';
        isPlaying = true;
    }
});

// Autoplay After Loading Screen
setTimeout(() => {
    bgMusic.play().then(() => {
        musicControl.innerHTML = '<span>🔊</span>';
        isPlaying = true;
    }).catch(() => {});
}, 10500);

// Countdown
function updateCountdown() {
    const nextMeeting = new Date("2025-03-06T06:45:00");
    const now = new Date();
    const diff = nextMeeting - now;

    if (diff > 0) {
        document.getElementById('days').textContent = Math.floor(diff / (1000*60*60*24));
        document.getElementById('hours').textContent = Math.floor((diff%(1000*60*60*24))/(1000*60*60));
        document.getElementById('minutes').textContent = Math.floor((diff%(1000*60*60))/(1000*60));
        document.getElementById('seconds').textContent = Math.floor((diff%(1000*60))/1000);
    }
}

setInterval(updateCountdown, 1000);
updateCountdown();

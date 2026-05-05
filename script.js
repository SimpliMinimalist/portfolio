const themeSwitch = document.getElementById('themeSwitch');
const body = document.body;
const themeColorMeta = document.getElementById('themeColor');

function updateThemeColor(isDark) {
    if (themeColorMeta) {
        themeColorMeta.setAttribute('content', isDark ? '#121218' : '#fdfdfd');
    }
}

themeSwitch.addEventListener('click', () => {
    if (body.classList.contains('light-mode')) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        updateThemeColor(true);
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        updateThemeColor(false);
    }
});

const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
});

document.querySelectorAll('.reveal').forEach(el => {
    revealObserver.observe(el);
});

const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

const playAudioBtn = document.getElementById('playAudio');
const audioElement = document.getElementById('audioElement');

if (playAudioBtn && audioElement) {
    playAudioBtn.addEventListener('click', () => {
        if (audioElement.paused) {
            audioElement.play();
            playAudioBtn.classList.add('playing');
        } else {
            audioElement.pause();
            audioElement.currentTime = 0;
            playAudioBtn.classList.remove('playing');
        }
    });

    audioElement.addEventListener('ended', () => {
        playAudioBtn.classList.remove('playing');
    });
}

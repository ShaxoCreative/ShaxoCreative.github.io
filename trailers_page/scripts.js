const videoPlayer = document.getElementById('videoPlayer');
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('click', () => {

        cards.forEach(c => c.classList.remove('active'));

        card.classList.add('active');

        const videoSrc = card.getAttribute('data-video');
        videoPlayer.src = videoSrc;
        videoPlayer.play();
    });
});
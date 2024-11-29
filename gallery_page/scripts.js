document.addEventListener('DOMContentLoaded', () => {
    const galleryImages = document.querySelectorAll('.gallery img');
    const overlay = document.getElementById('overlay');
    const overlayImage = document.getElementById('overlayImage');
    const closeButton = document.getElementById('closeButton');

    galleryImages.forEach(image => {
        image.addEventListener('click', () => {
            overlay.style.display = 'flex';
            overlayImage.src = image.src;
        });
    });

    closeButton.addEventListener('click', () => {
        overlay.style.display = 'none';
    });

    overlay.addEventListener('click', (event) => {
        if (event.target === overlay) {
            overlay.style.display = 'none';
        }
    });
});

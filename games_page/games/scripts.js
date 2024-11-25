function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

const key = getQueryParam('key');

fetch('games.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Ошибка загрузки JSON');
        }
        return response.json();
    })
    .then(data => {
        if (data[key]) {
            const game = data[key];

            document.getElementById('game-title').textContent += game.title;
            document.getElementById('game-image').src = game.image;
            document.getElementById('game-data').textContent = game.data;
            document.getElementById('game-platforms').textContent = game.platforms;
            document.getElementById('game-description').textContent = game.description;
            document.getElementById('game-story').textContent = game.story;
            document.getElementById('game-gameplay').textContent = game.gameplay;
            document.getElementById('game-critics').textContent = game.critics;
            document.getElementById('game-screenshot1').src = game.screenshot1;
            document.getElementById('game-screenshot2').src = game.screenshot2;
            document.getElementById('game-screenshot3').src = game.screenshot3;

            const backgroundElement = document.querySelector('.fixed-background');

            if (game.background) {
                backgroundElement.style.background = `url('${game.background}') no-repeat center`;
                backgroundElement.style.backgroundSize = 'cover';
            }
            document.title += game.title;
        } else {
            throw new Error('Игра с таким ключом не найдена');
        }
    })
    .catch(error => {
        console.error('Ошибка:', error);
        document.getElementById('game-title').textContent = 'Ошибка';
        document.getElementById('game-data').textContent = 'Не удалось загрузить информацию об игре.';
        document.getElementById('game-platforms').textContent = 'Не удалось загрузить информацию об игре.';
        document.getElementById('game-description').textContent = 'Не удалось загрузить информацию об игре.';
        document.getElementById('game-story').textContent = 'Не удалось загрузить информацию об игре.';
        document.getElementById('game-gameplay').textContent = 'Не удалось загрузить информацию об игре.';
        document.getElementById('game-critics').textContent = 'Не удалось загрузить информацию об игре.';
    });

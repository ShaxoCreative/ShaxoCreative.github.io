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

            // Заполнение страницы
            document.getElementById('game-title').textContent = game.title;
            document.getElementById('game-image').src = game.image;
            document.getElementById('game-description').textContent = game.description;

            // Установка фона
            document.body.style.backgroundImage = `url(${game.background})`;

            // Изменение <title>
            document.title = game.title;
        } else {
            throw new Error('Игра с таким ключом не найдена');
        }
    })
    .catch(error => {
        console.error('Ошибка:', error);
        document.getElementById('game-title').textContent = 'Ошибка';
        document.getElementById('game-description').textContent = 'Не удалось загрузить информацию об игре.';
    });

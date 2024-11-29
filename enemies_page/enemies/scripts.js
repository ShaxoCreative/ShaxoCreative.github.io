function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

const key = getQueryParam('key');

fetch('enemies.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Ошибка загрузки JSON');
        }
        return response.json();
    })
    .then(data => {
        if (data[key]) {
            const boo = data[key];

            document.getElementById('boo-name').textContent = boo.name;
            document.getElementById('boo-nameinf').textContent = boo.name;
            document.getElementById('boo-image').src = boo.image;
            document.getElementById('boo-pathogen').textContent = boo.pathogen;
            document.getElementById('boo-games').textContent = boo.games;
            document.getElementById('boo-description').textContent = boo.description;
            document.getElementById('boo-screenshot1').src = boo.screenshot1;
            document.getElementById('boo-screenshot2').src = boo.screenshot2;
            document.getElementById('boo-screenshot3').src = boo.screenshot3;

            const backgroundElement = document.querySelector('.fixed-background');

            if (boo.background) {
                backgroundElement.style.background = `url('${boo.background}') no-repeat center`;
                backgroundElement.style.backgroundSize = 'cover';
            }
            document.title += boo.name;
        } else {
            throw new Error('Персонаж с таким ключом не найден');
        }
    })
    .catch(error => {
        console.error('Ошибка:', error);
        document.getElementById('boo-name').textContent = 'Ошибка';
        document.getElementById('boo-pathogen').textContent = 'Не удалось загрузить информацию о патогене.';
        document.getElementById('boo-games').textContent = 'Не удалось загрузить информацию о патогене.';
        document.getElementById('boo-description').textContent = 'Не удалось загрузить информацию о патогене.';

    });

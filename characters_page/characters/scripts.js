function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

const key = getQueryParam('key');

fetch('persons.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Ошибка загрузки JSON');
        }
        return response.json();
    })
    .then(data => {
        if (data[key]) {
            const char = data[key];

            document.getElementById('char-name').textContent = char.name;
            document.getElementById('char-nameinf').textContent = char.name;
            document.getElementById('char-image').src = char.image;
            document.getElementById('char-first').textContent = char.first;
            document.getElementById('char-last').textContent = char.last;
            document.getElementById('char-games').textContent = char.games;
            document.getElementById('char-biography1').textContent = char.biography1;
            document.getElementById('char-biography2').textContent = char.biography2;
            document.getElementById('char-biography3').textContent = char.biography3;
            document.getElementById('char-screenshot1').src = char.screenshot1;
            document.getElementById('char-screenshot2').src = char.screenshot2;
            document.getElementById('char-screenshot3').src = char.screenshot3;

            const backgroundElement = document.querySelector('.fixed-background');

            if (char.background) {
                backgroundElement.style.background = `url('${char.background}') no-repeat center`;
                backgroundElement.style.backgroundSize = 'cover';
            }
            document.title += char.name;
        } else {
            throw new Error('Персонаж с таким ключом не найден');
        }
    })
    .catch(error => {
        console.error('Ошибка:', error);
        document.getElementById('char-name').textContent = 'Ошибка';
        document.getElementById('char-first').textContent = 'Не удалось загрузить информацию о персонаже.';
        document.getElementById('char-last').textContent = 'Не удалось загрузить информацию о персонаже.';
        document.getElementById('char-games').textContent = 'Не удалось загрузить информацию о персонаже.';
        document.getElementById('char-biography1').textContent = 'Не удалось загрузить информацию о персонаже.';
        document.getElementById('char-biography2').textContent = 'Не удалось загрузить информацию о персонаже.';
        document.getElementById('char-biography3').textContent = 'Не удалось загрузить информацию о персонаже.';
    });

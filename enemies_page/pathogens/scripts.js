function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

const key = getQueryParam('key');

fetch('pathogens.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Ошибка загрузки JSON');
        }
        return response.json();
    })
    .then(data => {
        if (data[key]) {
            const gen = data[key];

            document.getElementById('gen-name').textContent = gen.name;
            document.getElementById('gen-nameinf').textContent = gen.name;
            document.getElementById('gen-image').src = gen.image;
            document.getElementById('gen-type').textContent = gen.type;
            document.getElementById('gen-games').textContent = gen.games;
            document.getElementById('gen-description').textContent = gen.description;
            document.getElementById('gen-screenshot1').src = gen.screenshot1;
            document.getElementById('gen-screenshot2').src = gen.screenshot2;
            document.getElementById('gen-screenshot3').src = gen.screenshot3;
            document.getElementById('gen-screendesc1').textContent = gen.screendesc1;
            document.getElementById('gen-screendesc2').textContent = gen.screendesc2;
            document.getElementById('gen-screendesc3').textContent = gen.screendesc3;

            const backgroundElement = document.querySelector('.fixed-background');

            if (gen.background) {
                backgroundElement.style.background = `url('${gen.background}') no-repeat center`;
                backgroundElement.style.backgroundSize = 'cover';
            }
            document.title += gen.name;
        } else {
            throw new Error('Персонаж с таким ключом не найден');
        }
    })
    .catch(error => {
        console.error('Ошибка:', error);
        document.getElementById('gen-name').textContent = 'Ошибка';
        document.getElementById('gen-type').textContent = 'Не удалось загрузить информацию о патогене.';
        document.getElementById('gen-games').textContent = 'Не удалось загрузить информацию о патогене.';
        document.getElementById('gen-description').textContent = 'Не удалось загрузить информацию о патогене.';
        document.getElementById('gen-screendesc1').textContent = 'Не удалось загрузить информацию о патогене.';
        document.getElementById('gen-screendesc2').textContent = 'Не удалось загрузить информацию о патогене.';
        document.getElementById('gen-screendesc3').textContent = 'Не удалось загрузить информацию о патогене.';

    });

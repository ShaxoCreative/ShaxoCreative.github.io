function redirectTo(key, option) {
    if (option == 1) {
        window.location.href = `pathogens/the_pathogen.html?key=${key}`;
    } else {
        window.location.href = `enemies/the_enemy.html?key=${key}`;
    }
}
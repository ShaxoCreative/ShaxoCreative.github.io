document.addEventListener("DOMContentLoaded", () => {
    const timelineItems = document.querySelectorAll(".timeline ul li");

    const handleScroll = () => {
        timelineItems.forEach((item) => {
            const rect = item.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.8) {
                item.classList.add("visible");
            }
        });
    };

    window.addEventListener("scroll", handleScroll);
});

function redirectTo(key, option) {
    if (option == 0) {
        window.location.href = `games_page/games/the_game.html?key=${key}`;
    } else if (option == 1) {
        window.location.href = `characters_page/characters/person.html?key=${key}`;
    } else if (option == 2) {
        window.location.href = `enemies_page/pathogens/the_pathogen.html?key=${key}`;
    }
}
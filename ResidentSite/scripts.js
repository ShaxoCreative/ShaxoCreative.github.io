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

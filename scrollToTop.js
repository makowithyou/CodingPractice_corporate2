const ScrollButton = document.getElementById("ScrollButton");

document.addEventListener("scroll", (event) => {
    if (window.scrollY > 700) {
        ScrollButton.classList.add("show");
    } else {
        ScrollButton.classList.remove("show");
    }
});

ScrollButton.addEventListener(
    "click",
    (event) => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }
);

const hamburger = document.getElementById("hamburger");

hamburger.addEventListener(
    "click",
    (event) => {
        const hamburger_lines = event.currentTarget.children;

        for (const line of hamburger_lines) {
            if (line.classList.length == 0) {
                line.classList.add("clicked");
                line.classList.add("open");
            } else if (line.classList[1] == "open") {
                line.classList.remove("open");
                line.classList.add("close");
            } else if (line.classList[1] == "close") {
                line.classList.remove("close");
                line.classList.add("open");
            }
        }
    }
);

const hamburger = document.getElementById("hamburger");

hamburger.addEventListener(
    "click",
    (event) => {
        const hamburger_lines = event.currentTarget.children;

        for (const line of hamburger_lines) {
            if (line.classList.length == 0) {
                line.classList.add("clicked");
            } else {
                line.classList.remove("clicked");
            }
        }
    }
);

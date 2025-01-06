const hamburger = document.getElementById("hamburger");
const aside = document.getElementsByTagName("aside");

hamburger.addEventListener(
    "click",
    (event) => {
        const hamburger_lines = event.currentTarget.children;
        for (const line of hamburger_lines) {
            if (line.classList.length == 0) {
                line.className = "open";
            } else {
                line.classList.toggle("open");
                line.classList.toggle("close");
            }
        }
    }
);

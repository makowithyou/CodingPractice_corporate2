const hamburger = document.getElementById("hamburger");
const asides = document.getElementsByTagName("aside");
console.log(asides);


hamburger.addEventListener(
    "click",
    (event) => {
        const hamburger_lines = event.currentTarget.children;
        for (const line of hamburger_lines) {
            if (line.classList.length == 0) {
                line.classList.add("open");
            } else {
                line.classList.toggle("open");
                line.classList.toggle("close");
            }
        }

        for (const aside of asides) {
            console.log(aside);
            aside.classList.toggle("open");
        }
    }
);

const hamburger = document.getElementById("hamburger");
console.log(hamburger.children);

hamburger.addEventListener(
    "click",
    (event) => {
        console.log("クリックイベントが発生しました");
        const hlines = event.target.children;

        for (const hline of hlines) {
            if () {
                hline.classList.add("clicked");
            } else {
            }
        }
        console.log(hlines);
    }
);

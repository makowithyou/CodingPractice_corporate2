const ScrollButton = document.getElementById("ScrollButton");
// スクロール時に「トップへ戻るボタン」を表示・非表示
document.addEventListener("scroll", (event) => {
    if (window.scrollY > 700) {
        ScrollButton.classList.add("show");
    } else {
        ScrollButton.classList.remove("show");
    }
});
// 「トップへ戻るボタン」クリック時に上にスクロール
ScrollButton.addEventListener(
    "click",
    (event) => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }
);

const Hamburger = document.getElementById("Hamburger");
const Aside = document.getElementById("Aside");

// ページの読み込み時に画面サイズが960px以上ならサイドメニューを表示させる
if (window.innerWidth >= 960) {
    Aside.classList.add("open");
}
// 画面サイズが変更された時に画面サイズが960px以上ならサイドメニューを表示、
// 960px以下なら非表示させる
window.addEventListener(
    "resize",
    () => {
        console.log(window.innerWidth);
        if (window.innerWidth >= 960) {
            Aside.classList.add("open");
        } else {
            Aside.classList.remove("open");
        }
    }
);
// ハンバーガーボタンクリック時のサイドメニューの表示・非表示
Hamburger.addEventListener(
    "click",
    (event) => {
        Hamburger.classList.toggle("open");

        const hamburger_lines = event.currentTarget.children;
        for (const line of hamburger_lines) {
            if (line.classList.length == 0) {
                line.classList.add("open");
            } else {
                line.classList.toggle("open");
                line.classList.toggle("close");
            }
        }

            Aside.classList.toggle("open");
    }
);

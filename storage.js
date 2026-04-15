
const checkbox = document.querySelector(".checkbox");
const body = document.querySelector("body");

// 👉 при завантаженні сторінки
if (localStorage.getItem("theme") === "on") {
    body.classList.add("active");
    checkbox.classList.add("active");
}

// 👉 при кліку
checkbox.addEventListener("click", () => {
    body.classList.toggle("active");
    checkbox.classList.toggle("active");

    // 👉 перевіряємо і зберігаємо
    if (body.classList.contains("active")) {
        localStorage.setItem("theme", "on");
    } else {
        localStorage.setItem("theme", "off");
    }
});
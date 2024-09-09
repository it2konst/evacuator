const header = document.querySelector(".header")
window.addEventListener("scroll", function () {
    window.scrollY > 1
        ? header.classList.add("sticky")
        : header.classList.remove("sticky")
})



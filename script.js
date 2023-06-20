function addClassToNavbar() {
    var navbar = document.getElementById("main-menu");
    navbar.classList.add("scrolled");
}

function removeClassFromNavbar() {
    var navbar = document.getElementById("main-menu");
    navbar.classList.remove("scrolled");
}

function handleScroll() {
    var scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop >= 10) {
        addClassToNavbar();
    } else {
        removeClassFromNavbar();
    }
}

window.addEventListener("scroll", handleScroll);

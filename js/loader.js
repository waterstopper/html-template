document.documentElement.setAttribute("data-theme", "light");

function changeTheme() {
    let theme = document.documentElement.getAttribute("data-theme");
    if (theme == "light") {
        theme = "dark"
    } else {
        theme = "light"
    }
    localStorage.setItem("data-theme", theme)
    document.documentElement.setAttribute("data-theme", theme);
}

export { changeTheme }
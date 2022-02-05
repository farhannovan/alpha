const toggleMode = () => {
    let element = document.body;
    if (element.classList.contains("darkMode")) {
        element.classList.add("lightMode");
        element.classList.remove("darkMode");
    } else {
        element.classList.add("darkMode");
        element.classList.remove("lightMode");
    }
};

const autoDarkMode = window.matchMedia("(prefers-color-scheme: dark)");

if ("addEventListener" in autoDarkMode) {
    autoDarkMode.addEventListener("change", (e) => {
        document.body.classList.remove("darkMode");
        document.body.classList.remove("lightMode");
    });
}

window.addEventListener("load", () => {
    document.body.classList.remove("preload");
});

// Changes title in tabar when window is innactive
/*     window.onblur = function() {
            document.title = 'Was it something I said?';
        }

        window.onfocus = function() {
            document.title = 'Farhan Novan | UI/UX Designer & Front-end Developer';
        } */
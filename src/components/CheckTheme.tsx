export function checkTheme() {
    let themeState = window.matchMedia('(prefers-color-scheme: dark)')
    if (themeState.matches) {
        document.documentElement.classList.add('dark')
    }
}

export const checkDarkFromLocal = (): boolean => {
    if (localStorage.getItem("prefs") !== null) {
        console.log("Prefs is set")
        const { darkTheme } = JSON.parse(localStorage.getItem("perfs") ?? "");
        if (typeof darkTheme === "boolean") {
            return darkTheme;
        } else {
            return false
        }
    } else {
        return document.documentElement.classList.contains("dark")
    }
}
import { useState } from "react"
import { checkDarkFromLocal } from "./CheckTheme"


function ToggleMode() {
    const [isDark, setIsDark] = useState<boolean>(checkDarkFromLocal())
    const [textState, setTextState] = useState<string>(checkDarkFromLocal() ? "🌚" : "🌞")
    function changeMode(): void {
        if (window.document.documentElement.classList.contains("dark")) {
            window.document.documentElement.classList.remove("dark")
            setTextState("🌞")
        } else {
            window.document.documentElement.classList.add("dark")
            setTextState("🌚")
        }
    }
    return <div className="text-right text-4xl absolute top-0 right-0 p-2">
        <button onClick={changeMode}>
            {textState}
        </button>
    </div>
}

export default ToggleMode;
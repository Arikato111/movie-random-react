import { FC } from "react";
import { Link } from "react-router-dom";
import GithubIcon from "./GithubIcon";
const Footer: FC = () => {
    return (
        <footer>
            <Link to={"/movies"}>
                <div className="fixed bottom-0 left-0 p-2 m-3 bg-emerald-400 dark:bg-black hover:bg-emerald-500 dark:hover:bg-white text-white dark:text-slate-200 dark:hover:text-black shadow-md dark:shadow shadow-emerald-300 dark:shadow-transparent dark:border dark:border-white rounded transition-all duration-300">
                    ภาพยนตร์ทั้งหมด
                </div>
            </Link>
            <GithubIcon />
        </footer>
    )
}

export default Footer;
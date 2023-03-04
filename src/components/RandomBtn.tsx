import { FC } from "react";

type RandomBtnInput = {
    onClick: Function;
}

const RandomBtn: FC<RandomBtnInput> = ({ onClick }) => {
    return <button onClick={() => onClick()} className="hover:scale-95 text-white dark:hover:text-black bg-pink-400/80 dark:bg-black dark:hover:bg-white dark:border hover:bg-pink-400 duration-300 active:scale-90 rounded py-2 px-3 shadow-md shadow-pink-300 dark:shadow-transparent">สุ่มภาพยนตร์</button>
}

export default RandomBtn;
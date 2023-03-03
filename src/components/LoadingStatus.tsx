import { FC } from "react";

type LoadingStatusInput = {
    loadState: number;
}

const LoadingStatus: FC<LoadingStatusInput> = ({ loadState }) => {
    return <div className="bg-zinc-100 my-3 text-center  w-[60vw] sm:w-[20vw] h-2 rounded-lg border border-emerald-400 dark:border-white box-content">
        <div style={{ width: `${loadState}%` }} className="rounded-lg bg-pink-300 dark:bg-black h-2 text-center"></div>
        <div className="my-1 text-center text-slate-800 dark:text-white">กำลังประมวลผล {loadState}%</div>
    </div>
}

export default LoadingStatus;
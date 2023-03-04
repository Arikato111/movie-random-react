import { FC, useEffect } from "react";
import { Link } from "react-router-dom";
import ShowMovie from "../components/ShowMovie";
import movies from '../Data/Movies.json'

const Movies: FC = () => {
    useEffect(()=> {
        document.title = "ภาพยนตร์ทั้งหมด"
    }, [])
    return <main className="frame">
        <div className="mb-3 px-3">
            <Link to={'/'}>
                <span className="left-0 p-2 m-3 bg-emerald-400 dark:bg-black hover:bg-emerald-500 dark:hover:bg-white text-white dark:text-slate-200 dark:hover:text-black shadow-md dark:shadow shadow-emerald-300 dark:shadow-transparent dark:border dark:border-white rounded transition-all duration-300">ย้อนกลับ</span>
            </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4">
            {movies.map((mv, key) => {
                return <div key={key} className="my-3">
                    <ShowMovie id={mv.id} name={mv.name} img={mv.img} year={mv.year} trailer={mv.trailer} />
                </div>
            })}
        </div>
        <div className="h-20">

        </div>
    </main>
}

export default Movies;
import { FC, useEffect } from "react";
import { useState } from "react";
import RandomBtn from "../components/RandomBtn";
import ShowMovie from "../components/ShowMovie";
import Movies from '../Data/Movies.json'
import LoadingStatus from "../components/LoadingStatus";
import Footer from "../components/Footer";

const Home: FC = () => {
    const [loadState, setLoadState] = useState(0)
    const [movie, setMovie] = useState(-1)
    const [delayLoading, setDelayLoading] = useState(50)

    useEffect(() => {
        return () => {
            document.title = "ดูอะไรดี"
        }
    }, [])

    useEffect(() => {
        const randomMovie_pressR = (e: KeyboardEvent) => {
            if (e.code === "KeyR") {
                if (loadState === 0 || loadState === 100)
                    setLoadState(1)
            }
        }
        window.addEventListener("keyup", randomMovie_pressR)
        return () => {
            window.removeEventListener("keyup", randomMovie_pressR)
        }
    }, [loadState])

    useEffect(() => {
        if (loadState === 100) {
            // random movie when loadState === 100
            setMovie(Math.floor(Math.random() * Movies.length))
        }
        if (loadState > 0 && loadState < 100) {
            setTimeout(() => {
                setLoadState(loadState + 1)
            }, delayLoading);
        }
        if (loadState === 1) {
            setDelayLoading(Math.floor(Math.random() * 150));
        }
    }, [loadState])

    return <>
        <main className={` min-h-screen bg-gradient-to-tr sm:bg-gradient-to-r from-pink-300 via-white to-emerald-300 dark:from-black dark:to-black ${loadState !== 100 ? "flex flex-col justify-center h-screen items-center" : "pt-10"}`}>
            <h3 className="text-3xl text-center my-2 text-slate-800 dark:text-slate-200">ดูภาพยนตร์อะไรดี?🎥</h3>
            <div className="flex flex-col items-center justify-center text-center">
                {movie > -1 && loadState === 100 ? (<div>
                    <div className="mb-3">
                        <RandomBtn onClick={() => setLoadState(1)} />
                    </div>
                    <ShowMovie {...Movies[movie]} />
                </div>) :
                    (loadState !== 0 ?
                        <LoadingStatus loadState={loadState} /> :
                        <div className="text-center">
                            <div className="text-center text-lg my-3 dark:text-slate-200">
                                อยากดูหนังสักเรื่อง แต่เลือกไม่ถูก กดเลย!
                            </div>
                            <RandomBtn onClick={() => setLoadState(1)} />
                        </div>
                    )
                }
            </div>
        </main>
        <Footer />
    </>
}

export default Home;
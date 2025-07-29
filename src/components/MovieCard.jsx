import FavButton from "./ui/FavButton";
import { memo, useCallback, useState, useEffect } from "react";
import Modal from "./ui/Modal";
import { fetchMovieVideos } from "../api/tmdbApi";
import { Link } from 'react-router-dom';




function MovieCard({ vote_average, poster_path, id }) {
    const [isOpen, setIsOpen] = useState(false);
    const [videoKey, setVideoKey] = useState(null);


    useEffect(() => {
        const fetchVideoKey = async () => {
            const videos = await fetchMovieVideos(id)
            setVideoKey(videos[0].key)
        }
        fetchVideoKey();
    }, [id])

    const openTrailer = useCallback(() => {
        setIsOpen(true)
    }, [])

    return (
        <div className="relative w-[200px] rounded-2xl overflow-hidden
             bg-neutral-900 shadow-lg hover:scale-105 transition-transform will-change-transform duration-300 pointer">
            {isOpen && <Modal onClose={() => {
                setIsOpen(false)
            }}>
                <iframe width="373"
                    height="210"
                    className="rounded-2xl"
                    src={`https://www.youtube.com/embed/${videoKey}?amp;controls=0`}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen />
            </Modal>}

            <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                alt="movie poster"
                className="w-full h-auto object-cover"
            />
            <div className="absolute bottom-0 left-0
            w-full bg-gradient-to-t from-black/80 to-transparent
            p-2 text-sm text-white font-semibold">
                IMDb: {vote_average?.toFixed(1) || 'N/A'}
            </div>
            <div className="absolute top-2 right-2 z-10 flex gap-2">
                <FavButton />
                <button onClick={(e) => {
                    e.preventDefault()
                    openTrailer()
                }}
                    className="btn">
                    🎥
                </button>
                <Link to={`/movie/${id}`} className="btn">
                    Details
                </Link>
            </div>
        </div >
    )
}

export default memo(MovieCard);
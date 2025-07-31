import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchMovieDetails, fetchMovieVideos } from '../api/tmdbApi'
import Modal from '../components/ui/Modal'

export default function MovieDetails() {
    const { id } = useParams()
    const [movie, setMovie] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [isTrailerOpen, setIsTrailerOpen] = useState(false)
    const [videoKey, setVideoKey] = useState(null)

    useEffect(() => {
        const loadMovie = async () => {
            try {
                setLoading(true)
                setError(null)
                const movieData = await fetchMovieDetails(id)
                setMovie(movieData)

                // Загружаем видео для трейлера
                const videos = await fetchMovieVideos(id)
                setVideoKey(videos[0]?.key || null)
            } catch (err) {
                setError('Failed to load movie details')
                console.error('Error loading movie details:', err)
            } finally {
                setLoading(false)
            }
        }

        if (id) {
            loadMovie()
        }
    }, [id])

    const openTrailer = () => {
        setIsTrailerOpen(true)
    }

    const closeTrailer = () => {
        setIsTrailerOpen(false)
    }

    if (loading) {
        return (
            <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center">
                <div className="text-black dark:text-white text-2xl font-bold">Loading...</div>
            </div>
        )
    }

    if (error) {
        return (
            <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center">
                <div className="text-red-500 text-2xl font-bold">{error}</div>
            </div>
        )
    }

    if (!movie) {
        return (
            <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center">
                <div className="text-black dark:text-white text-2xl font-bold">Movie not found</div>
            </div>
        )
    }

    return (
        <div className="bg-white dark:bg-black relative min-h-screen">
            <div className="absolute inset-0 z-0">
                <img
                    src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
                    alt={movie?.title}
                    className="w-full h-full object-cover rounded-lg animate-fade-in"
                />
                <div className="absolute inset-0 bg-gradient-to-r 
                from-white/90 via-white/70 to-transparent dark:from-black dark:via-black/80 dark:to-transparent" ></div>
                <div className="absolute inset-0 bg-gradient-to-t 
                from-white/80 via-transparent to-transparent dark:from-black dark:via-transparent dark:to-transparent"></div>
            </div>

            <div className="relative z-10 min-h-screen flex items-center justify-center">
                <div className="container mx-auto px-4 pb-20">
                    <div className="flex flex-col lg:flex-row items-end lg:items-end gap-8">
                        <div className="flex-1 text-black dark:text-white space-y-6">
                            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                                {movie?.title}
                            </h1>

                            <div className="flex items-center gap-6 text-lg">
                                <div className="flex items-center gap-2">
                                    <span className="text-yellow-500">★</span>
                                    <span className="font-semibold">{movie?.vote_average?.toFixed(1)}</span>
                                </div>
                                <span className="text-gray-600 dark:text-gray-300">•</span>
                                <span className="text-gray-600 dark:text-gray-300">{movie?.release_date}</span>
                                {movie?.runtime && (
                                    <>
                                        <span className="text-gray-600 dark:text-gray-300">•</span>
                                        <span className="text-gray-600 dark:text-gray-300">{movie.runtime} min</span>
                                    </>
                                )}
                            </div>

                            <div className="max-w-2xl">
                                <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed">
                                    {movie?.overview}
                                </p>
                            </div>

                            <div className="flex gap-4 pt-4">
                                <button
                                    onClick={openTrailer}
                                    className="bg-black dark:bg-white text-white dark:text-black px-8 py-3 rounded-md font-semibold hover:bg-red-700 dark:hover:bg-red-700 transition-colors flex items-center gap-2"
                                >
                                    <span>🎥</span>
                                    Watch Trailer
                                </button>
                            </div>
                        </div>

                        <div className="flex-shrink-0 animate-fade-in">
                            <div className="relative">
                                <img
                                    src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
                                    alt={movie?.title}
                                    className="w-64 h-96 object-cover rounded-lg shadow-2xl shadow-black/100"
                                />
                                <div className="absolute inset-0 rounded-lg shadow-[0_0_50px_rgba(0,0,0,0.1)] dark:shadow-[0_0_50px_rgba(255,255,255,0.1)] pointer-events-none"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {isTrailerOpen && videoKey && (
                <Modal onClose={closeTrailer}>
                    <iframe
                        width="560"
                        height="315"
                        className="rounded-2xl"
                        src={`https://www.youtube.com/embed/${videoKey}?controls=0`}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    />
                </Modal>
            )}
            {isTrailerOpen && !videoKey && (
                <Modal onClose={closeTrailer}>
                    <div className="text-black dark:text-white text-2xl font-bold text-center p-10">No trailer available</div>
                </Modal>
            )}
        </div>
    )
}
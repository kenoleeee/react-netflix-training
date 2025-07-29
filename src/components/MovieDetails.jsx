import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchMovieDetails } from "../api/tmdbApi";

export default function MovieDetails() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const loadMovie = async () => {
            try {
                setLoading(true)
                setError(null)
                const movieData = await fetchMovieDetails(id)
                if (!movieData) {
                    setError('Movie not found')
                } else {
                    setMovie(movieData)
                }
            } catch (err) {
                setError('Failed to load movie details')
                console.error('Error loading movie details:', err)
            } finally {
                setLoading(false)
            }
        }
        loadMovie()
    }, [id])

    if (loading) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center">
                <div className="text-white text-2xl font-bold">Loading...</div>
            </div>
        )
    }

    if (error) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center">
                <div className="text-red-500 text-2xl font-bold">{error}</div>
            </div>
        )
    }

    if (!movie) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center">
                <div className="text-white text-2xl font-bold">Movie not found</div>
            </div>
        )
    }

    return (
        <div className="bg-black relative min-h-screen">
            <div className="absolute inset-0 z-0">
                <img
                    src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
                    alt={movie?.title}
                    className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            </div>

            {/* <Link
                to="/"
                className="absolute top-4 left-4 z-20 bg-black/50 hover:bg-black/70 text-white p-3 rounded-xl backdrop-blur-sm border border-white/20 hover:border-white/40"
            >
                <span className="text-2xl">←</span>
            </Link> */}

            <div className="relative z-10 min-h-screen flex items-center justify-center">
                <div className="container mx-auto px-4 pb-20">
                    <div className="flex flex-col lg:flex-row items-end lg:items-end gap-8">
                        <div className="flex-1 text-white space-y-6">
                            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                                {movie?.title}
                            </h1>

                            <div className="flex items-center gap-6 text-lg">
                                <div className="flex items-center gap-2">
                                    <span className="text-yellow-400">★</span>
                                    <span className="font-semibold">{movie?.vote_average?.toFixed(1)}</span>
                                </div>
                                <span className="text-gray-300">•</span>
                                <span className="text-gray-300">{movie?.release_date}</span>
                                {movie?.runtime && (
                                    <>
                                        <span className="text-gray-300">•</span>
                                        <span className="text-gray-300">{movie.runtime} min</span>
                                    </>
                                )}
                            </div>

                            <div className="max-w-2xl">
                                <p className="text-lg text-gray-200 leading-relaxed">
                                    {movie?.overview}
                                </p>
                            </div>

                            <div className="flex gap-4 pt-4">
                                <button className="bg-white text-black px-8 py-3 rounded-md font-semibold hover:bg-red-700 transition-colors flex items-center gap-2">
                                    <span>▶</span>
                                    Play
                                </button>
                                <button className="bg-black/50 text-white px-8 py-3 rounded-md font-semibold hover:bg-red-700 transition-colors flex items-center gap-2">
                                    <span>ℹ</span>
                                    More Info
                                </button>
                            </div>
                        </div>

                        <div className="flex-shrink-0">
                            <div className="relative">
                                <img
                                    src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
                                    alt={movie?.title}
                                    className="w-64 h-96 object-cover rounded-lg shadow-2xl shadow-black/100"
                                />
                                <div className="absolute inset-0 rounded-lg shadow-[0_0_50px_rgba(255,255,255,0.1)] pointer-events-none"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
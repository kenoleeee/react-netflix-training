import { useState, useEffect } from 'react'
import { fetchPopularMovies } from '../api/tmdbApi'
import MovieCard from './MovieCard'

export default function PopularMovies() {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const loadMovies = async () => {
            try {
                setLoading(true)
                setError(null)
                const moviesData = await fetchPopularMovies()
                setMovies(moviesData)
            } catch (err) {
                setError('Failed to load popular movies')
                console.error('Error loading popular movies:', err)
            } finally {
                setLoading(false)
            }
        }

        loadMovies()
    }, [])

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-[400px]">
                <div className="text-white text-xl">Loading popular movies...</div>
            </div>
        )
    }

    if (error) {
        return (
            <div className="flex justify-center items-center min-h-[400px]">
                <div className="text-red-500 text-xl">{error}</div>
            </div>
        )
    }

    return (
        <div className="grid px-2 sm:px-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5
         xl:grid-cols-6 2xl:grid-cols-8 gap-6 sm:gap-3 md:gap-4 place-items-center w-full">
            {movies.length ? (
                movies.map((movie) => (
                    <MovieCard
                        key={movie.id}
                        poster_path={movie.poster_path}
                        vote_average={movie.vote_average}
                        id={movie.id}
                    />
                ))
            ) : (
                <p className="text-white text-center text-xl col-span-full">
                    No popular movies found
                </p>
            )}
        </div>
    )
} 
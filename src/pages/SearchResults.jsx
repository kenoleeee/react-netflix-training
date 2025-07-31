import { useState, useEffect } from 'react'
import { useDebounce } from '../hooks/useDebounce'
import { fetchSearchMovies } from '../api/tmdbApi'
import MovieCard from '../components/MovieCard'

export default function SearchResults({ searchQuery }) {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const debouncedSearch = useDebounce(searchQuery, 500)

    useEffect(() => {
        const loadSearchMovies = async () => {
            if (!debouncedSearch.trim()) {
                setMovies([])
                setError(null)
                return
            }

            try {
                setLoading(true)
                setError(null)
                const searchMovies = await fetchSearchMovies(debouncedSearch)
                setMovies(searchMovies)
            } catch (err) {
                setError('Failed to search movies')
                console.error('Error searching movies:', err)
            } finally {
                setLoading(false)
            }
        }

        loadSearchMovies()
    }, [debouncedSearch])

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-[400px]">
                <div className="text-white text-xl">Searching movies...</div>
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

    if (!debouncedSearch.trim()) {
        return null
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
                        title={movie.title}
                    />
                ))
            ) : (
                <p className="text-white text-center text-xl col-span-full">
                    No movies found for "{debouncedSearch}"
                </p>
            )}
        </div>
    )
} 
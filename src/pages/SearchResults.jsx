import { useState, useEffect } from 'react'
import { useDebounce } from '../hooks/useDebounce'
import { fetchSearchMovies, fetchSearchTVShows } from '../api/tmdbApi'
import TitlesCard from '../components/TitlesCard'
import { Link } from 'react-router-dom'



export default function SearchResults({ searchQuery }) {
    const [movies, setMovies] = useState([])
    const [tvShows, setTvShows] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const debouncedSearch = useDebounce(searchQuery, 500)

    useEffect(() => {
        const loadSearchTitles = async () => {
            if (!debouncedSearch.trim()) {
                setMovies([])
                setError(null)
                return
            }

            try {
                setLoading(true)
                setError(null)
                const [searchMovies, searchTVShows] = await Promise.all([
                    fetchSearchMovies(debouncedSearch),
                    fetchSearchTVShows(debouncedSearch),
                ])
                setMovies(searchMovies)
                setTvShows(searchTVShows)
            } catch (err) {
                setError('Failed to search movies and TV shows')
                console.error('Error searching movies and TV shows:', err)
            } finally {
                setLoading(false)
            }
        }

        loadSearchTitles()
    }, [debouncedSearch])

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-[400px]">
                <div className="text-white text-xl">Searching movies and TV shows...</div>
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
                    <TitlesCard
                        key={movie.id}
                        poster_path={movie.poster_path}
                        vote_average={movie.vote_average}
                        id={movie.id}
                        title={movie.title}
                        media_type="movie"
                    />
                ))
            ) : (
                <p className="text-white text-center text-xl col-span-full">
                    No movies and TV shows found for "{debouncedSearch}"
                </p>
            )}
            {tvShows.length ? (
                tvShows.map((tvShow) => (
                    <TitlesCard
                        key={tvShow.id}
                        poster_path={tvShow.poster_path}
                        vote_average={tvShow.vote_average}
                        id={tvShow.id}
                        title={tvShow.name}
                        media_type="tv"
                    />
                ))
            ) : (
                <p className="text-white text-center text-xl col-span-full">
                    No TV shows found for "{debouncedSearch}"
                </p>
            )}
        </div>
    )
} 
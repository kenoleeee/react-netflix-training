import { useState, useEffect } from 'react'
import { upcomingMovies, upcomingTVShows } from '../api/tmdbApi'
import TitlesCard from '../components/TitlesCard'


export default function TitleList({ media_type }) {
    const [movies, setMovies] = useState([])
    const [tvShows, setTvShows] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const loadMovies = async () => {
            try {
                setLoading(true)
                setError(null)
                const moviesData = await upcomingMovies()
                console.log(moviesData)
                const tvShowsData = await upcomingTVShows()
                console.log(tvShowsData)
                setMovies(moviesData)
                setTvShows(tvShowsData)
            } catch (err) {
                setError('Failed to load movies and TV shows')
                console.error('Error loading movies and TV shows:', err)
            } finally {
                setLoading(false)
            }
        }

        loadMovies()
    }, [media_type])

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-[400px]">
                <div className="text-white text-xl">Loading popular movies and TV shows...</div>
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
        <div className="w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 px-4">
            {media_type === 'movie' && (
                movies.length ? (
                    movies.map((movie) => (
                        <TitlesCard {...movie} media_type={media_type} key={movie.id} />
                    ))
                ) : (
                    <p className="text-white text-center text-xl col-span-full">
                        No movies found
                    </p>
                )
            )}
            {media_type === 'tv' && (
                tvShows.length ? (
                    tvShows.map((tvShow) => (
                        <TitlesCard {...tvShow} media_type={media_type} key={tvShow.id} />
                    ))
                ) : (
                    <p className="text-white text-center text-xl col-span-full">
                        No TV shows found
                    </p>
                )
            )}
            {media_type === 'all' && (
                movies.length && tvShows.length ? (
                    <>
                        {movies.map((movie) => (
                            <TitlesCard {...movie} media_type="movie" key={movie.id} />
                        ))}
                        {tvShows.map((tvShow) => (
                            <TitlesCard {...tvShow} media_type="tv" key={tvShow.id} />
                        ))}
                    </>
                ) : (
                    <p className="text-white text-center text-xl col-span-full">
                        No movies and TV shows found
                    </p>
                )
            )}



        </div >
    )
}
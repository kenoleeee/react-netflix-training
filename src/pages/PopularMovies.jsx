import { useState, useEffect } from 'react'
import { fetchPopularMovies } from '../api/tmdbApi'
import MovieCard from '../components/MovieCard'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Virtual } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

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
        <div className="w-full overflow-hidden ">
            <Swiper
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
                slidesPerView={8}
                spaceBetween={20}
                loop={true}
            >
                {movies.length ? (
                    movies.map((movie) => (
                        <SwiperSlide key={movie.id}>
                            <MovieCard {...movie} />
                        </SwiperSlide>
                    ))
                ) : (
                    <p className="text-white text-center text-xl col-span-full">
                        No popular movies found
                    </p>
                )}
            </Swiper>
        </div>
    )
} 
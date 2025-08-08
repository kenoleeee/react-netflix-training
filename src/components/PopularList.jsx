import { useState, useEffect } from 'react'
import { fetchPopularMovies, fetchPopularTVShows } from '../api/tmdbApi'
import TitlesCard from '../components/TitlesCard'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

export default function PopularList() {
    const [movies, setMovies] = useState([])
    const [tvShows, setTvShows] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const loadMovies = async () => {
            try {
                setLoading(true)
                setError(null)
                const [moviesData, tvShowsData] = await Promise.all([
                    fetchPopularMovies(),
                    fetchPopularTVShows(),
                ])
                setMovies(moviesData)
                setTvShows(tvShowsData)
            } catch (err) {
                setError('Failed to load popular movies and TV shows')
                console.error('Error loading popular movies and TV shows:', err)
            } finally {
                setLoading(false)
            }
        }

        loadMovies()
    }, [])

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
        <div className="w-full">
            <Swiper
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
                slidesPerView={2}
                spaceBetween={20}
                loop={true}
                breakpoints={{
                    640: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 20,
                    },
                    1280: {
                        slidesPerView: 6,
                        spaceBetween: 20,
                    },
                    1536: {
                        slidesPerView: 8,
                        spaceBetween: 20,
                    },
                }}
                watchOverflow={true}
                grabCursor={true}
            >
                {movies.length ? (
                    movies.map((movie) => (
                        <SwiperSlide key={movie.id}>
                            <TitlesCard {...movie} media_type="movie" />

                        </SwiperSlide>
                    ))
                ) : (
                    <p className="text-white text-center text-xl col-span-full">
                        No popular movies and TV shows found
                    </p>
                )}
                {tvShows.length ? (
                    tvShows.map((tvShow) => (
                        <SwiperSlide key={tvShow.id}>
                            <TitlesCard {...tvShow} media_type="tv" />
                        </SwiperSlide>
                    ))
                ) : (
                    <p className="text-white text-center text-xl col-span-full">
                        No popular TV shows found
                    </p>
                )}
            </Swiper>
        </div>
    )
} 
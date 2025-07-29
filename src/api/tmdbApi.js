import axios from 'axios'

const API_KEY = import.meta.env.VITE_API_KEY
const BASE_URL = import.meta.env.VITE_BASE_URL

export const fetchPopularMovies = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/movie/popular`, {
            params: {
                api_key: API_KEY,
                language: 'en-US',
                page: 1,

            }
        })
        return response.data.results
    } catch (error) {
        console.error('Error fetching movies:', error)
        return []
    }
}

export const fetchMovieVideos = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}/movie/${id}/videos`, {
            params: {
                api_key: API_KEY,
                language: 'en-US',
            }
        })
        return response.data.results
    } catch (error) {
        console.error('Error fetching movie videos:', error)
        return []
    }
}

export const fetchMovieDetails = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}/movie/${id}`, {
            params: {
                api_key: API_KEY,
                language: 'en-US',
            }
        })
        return response.data
    } catch (error) {
        console.error('Error fetching movie details:', error)
        return null
    }
}

export const fetchSearchMovies = async (query) => {
    try {
        const response = await axios.get(`${BASE_URL}/search/movie`, {
            params: {
                api_key: API_KEY,
                language: 'en-US',
                query,
            }
        })
        return response.data.results
    } catch (error) {
        console.error('Error fetching search movies:', error)
        return []
    }
}

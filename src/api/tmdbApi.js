import axios from 'axios'

const API_KEY = import.meta.env.VITE_API_KEY
const BASE_URL = import.meta.env.VITE_BASE_URL

if (!API_KEY || !BASE_URL) {
    console.error('Missing required environment variables: VITE_API_KEY or VITE_BASE_URL')
}


export const fetchPopularMovies = async () => {
    if (!API_KEY || !BASE_URL) {
        throw new Error('Missing API configuration')
    }

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
        throw error
    }
}

export const fetchMovieVideos = async (id) => {
    if (!API_KEY || !BASE_URL) {
        throw new Error('Missing API configuration')
    }

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
    if (!API_KEY || !BASE_URL) {
        throw new Error('Missing API configuration')
    }

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
    if (!API_KEY || !BASE_URL) {
        throw new Error('Missing API configuration')
    }

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
        throw error
    }
}

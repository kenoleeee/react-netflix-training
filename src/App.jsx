import MovieCard from './components/MovieCard'
import { useState, useEffect } from 'react'
import { useDebounce } from './hooks/useDebounce'
import { useTheme } from './hooks/useTheme'
import { fetchPopularMovies, fetchSearchMovies } from './api/tmdbApi'
import { Link } from 'react-router-dom'

function App() {
  const { theme, toggleTheme } = useTheme()
  const [search, setSearch] = useState("")
  const debouncedSearch = useDebounce(search, 500)
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const loadMovies = async () => {
      const moviesData = await fetchPopularMovies()
      setMovies(moviesData)
    }
    loadMovies()
  }, [])

  useEffect(() => {
    const loadSearchMovies = async () => {
      const searchMovies = await fetchSearchMovies(debouncedSearch)
      setMovies(searchMovies)
    }
    loadSearchMovies()
  }, [debouncedSearch])

  return (
    <>
      <div className="min-h-screen min-w-screen bg-white dark:bg-black text-black dark:text-white px-6 py-5">
        <header className="mb-10 flex items-center justify-between">
          <Link to="/">
            <img src="/netflix_logo.jpg"
              alt="netflix logo"
              className="h-8 w-auto" />
          </Link>
          <div className="">
            <input type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search"
              className="w-1/2 p-2 rounded-md" />
            <button
              onClick={toggleTheme}
              className="text-sm px-3 py-1 rounded border border-white/20 dark:border-white/10 hover:bg-white
              hover:text-black dark:hover:bg-white/10 transition">
              {theme === 'dark' ? '🌞' : '🌙'}
            </button>
          </div>
        </header>
        <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-8 gap-6 place-items-center">
          {
            movies.length ? movies.map((movie) => (
              <MovieCard key={movie.id} poster_path={movie.poster_path} vote_average={movie.vote_average} id={movie.id} />
            )) : <p className="text-white text-center text-xl">No movies found</p>
          }
        </main>
      </div>
    </>
  )
}

export default App

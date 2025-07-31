import PopularMovies from './pages/PopularMovies'
import SearchResults from './pages/SearchResults'
import { useSearch } from './context/SearchContext'


function App() {
  const { search } = useSearch()

  return (
    <main>
      {search.trim() ? (
        <SearchResults searchQuery={search} />
      ) : (
        <PopularMovies />
      )}
    </main>
  )
}

export default App

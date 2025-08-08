import Home from './pages/Home'
import SearchResults from './pages/SearchResults'
import { useSearch } from './context/SearchContext'


function App() {
  const { search } = useSearch()

  return (
    <main>
      {search.trim() ? (
        <SearchResults searchQuery={search} />
      ) : (
        <Home />
      )}
    </main>
  )
}

export default App

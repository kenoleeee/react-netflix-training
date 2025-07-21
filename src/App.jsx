import { MovieCard } from './MovieCard'

function App() {

  return (
    <>
      <div className="min-h-screen w-full bg-black text-white px-6 py-5">
        <header className="mb-10 flex items-center">
          <img src="/netflix_logo.jpg"
            alt="netflix logo"
            className="h-8 w-auto" />
        </header>
        <MovieCard image="/narcos.jpg" rating="8.5" />
      </div>
    </>
  )
}

export default App

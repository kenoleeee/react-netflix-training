import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from '../App'
import MovieDetails from '../MovieDetails'

export default function MainRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/movie/:id" element={<MovieDetails />} />
            </Routes>
        </Router>
    )
}
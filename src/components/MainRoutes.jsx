import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from '../App'
import MovieDetails from '../pages/MovieDetails'
import Layout from '../layout/Layout'

export default function MainRoutes() {
    return (
        <Router>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<App />} />
                    <Route path="/movie/:id" element={<MovieDetails />} />
                </Route>
            </Routes>

        </Router>
    )
}
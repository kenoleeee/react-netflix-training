import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from '../App'
import TitlesDetails from '../pages/TitlesDetails'
import Layout from '../layout/Layout'

export default function MainRoutes() {
    return (
        <Router>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<App />} />
                    <Route path="/movie/:id" element={<TitlesDetails media_type="movie" />} />
                    <Route path="/tv/:id" element={<TitlesDetails media_type="tv" />} />
                </Route>
            </Routes>

        </Router>
    )
}
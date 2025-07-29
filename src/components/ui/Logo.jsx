import { Link } from "react-router-dom";

export default function Logo() {
    return (
        <Link to="/">
            <h1 className="text-2xl sm:text-3xl font-bold text-red-600 tracking-wider font-bebas-neue">
                CATFLIX
            </h1>
        </Link>
    );
} 
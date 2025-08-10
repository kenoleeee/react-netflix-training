import FavButton from "./ui/FavButton";
import { memo } from "react";
import { Link } from 'react-router-dom';
import NoPoster from "./NoPoster";

function TitlesCard({ vote_average, poster_path, id, title, media_type }) {

    if (!poster_path) {
        return (
            <NoPoster title={title} />
        );
    }

    return (
        <Link to={`/${media_type}/${id}`}>
            <div className="relative w-full max-w-[200px] min-w-[140px] rounded-2xl overflow-hidden bg-neutral-900 shadow-lg hover:scale-105 transition-transform will-change-transform duration-300 cursor-pointer group">
                <img
                    src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                    alt={`${title} poster`}
                    className="w-full h-auto object-cover aspect-[2/3]"
                    loading="lazy"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 via-black/50 to-transparent p-3 text-sm text-white font-semibold">
                    <div className="flex items-center gap-1">
                        <span className="text-yellow-400">★</span>
                        <span>{vote_average?.toFixed(1) || 'N/A'}</span>
                    </div>
                </div>
                <div className="absolute top-2 right-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <FavButton />
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
            </div>
        </Link>
    )
}

export default memo(TitlesCard);
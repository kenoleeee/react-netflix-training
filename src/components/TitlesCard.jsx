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
            <div className="relative w-[200px] rounded-2xl overflow-hidden bg-neutral-900 shadow-lg hover:scale-105 transition-transform will-change-transform duration-300 cursor-pointer ">
                <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                    alt="movie poster"
                    className="w-full h-auto object-cover "
                />
                <div className="absolute bottom-0 left-0
                w-full bg-gradient-to-t from-black/80 to-transparent
                p-2 text-sm text-white font-semibold">
                    IMDb: {vote_average?.toFixed(1) || 'N/A'}
                </div>
                <div className="absolute top-2 right-2 z-10">
                    <FavButton />
                </div>
            </div>
        </Link>
    )
}

export default memo(TitlesCard);
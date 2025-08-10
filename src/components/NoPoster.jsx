import { memo } from "react";
import FavButton from "./ui/FavButton";

function NoPoster({ title, vote_average }) {
    return (
        <div className="flex justify-center items-center relative w-full max-w-[200px] min-w-[140px] h-auto aspect-[2/3] rounded-2xl overflow-hidden bg-neutral-900 shadow-lg hover:scale-105 transition-transform will-change-transform duration-300 cursor-pointer group">
            <div className="text-white text-center p-4">
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 via-black/50 to-transparent p-3 text-sm text-white font-semibold">
                    <div className="flex items-center gap-1">
                        <span className="text-yellow-400">★</span>
                        <span>{vote_average?.toFixed(1) || 'N/A'}</span>
                    </div>
                </div>
                <div className="absolute top-2 right-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <FavButton />
                </div>
                <div className="text-sm font-medium mb-1">No poster available</div>
                <div className="text-xs text-gray-400">{title || 'Movie'}</div>
            </div>
        </div>
    );
}

export default memo(NoPoster);
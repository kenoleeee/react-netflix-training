import { memo } from "react";
import FavButton from "./ui/FavButton";


function NoPoster({ title, vote_average }) {
    return (
        <div className=" flex justify-center items-center relative w-[200px] h-[300px] rounded-2xl overflow-hidden
                 bg-neutral-900 shadow-lg hover:scale-105 transition-transform will-change-transform duration-300 cursor-pointer">
            <div className="text-white text-center">
                <div className="absolute bottom-0 left-0
                w-full bg-gradient-to-t from-black/80 to-transparent
                p-2 text-sm text-white font-semibold">
                    IMDb: {vote_average?.toFixed(1) || 'N/A'}
                </div>
                <div className="absolute top-2 right-2 z-10">
                    <FavButton />
                </div>
                <div className="text-sm font-medium mb-1">No poster available</div>
                <div className="text-xs text-gray-400">{title || 'Movie'}</div>
            </div>
        </div>
    );
}

export default memo(NoPoster);
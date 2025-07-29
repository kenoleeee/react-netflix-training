import { useState, memo } from "react";

function FavButton() {
    const [isFav, setIsFav] = useState(false);

    return (
        <button onClick={() => setIsFav(!isFav)} className="btn bg-black text-white">
            {isFav ? "Favorited" : "Favorite"}
        </button>
    )
}

export default memo(FavButton);
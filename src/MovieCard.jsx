

export function MovieCard({ image, rating }) {
    return (
        <div className="relative w-[200px] rounded-2xl overflow-hidden
        bg-neutral-900 shadow-lg hover:scale-106
        transition-transform will-change-transform duration-300">
            <img src={image}
                alt="movie poster"
                className="w-full h-auto object-cover"
            />
            <div className="absolute bottom-0 left-0
            w-full bg-gradient-to-t from-black/80 to-transparent
            p-2 text-sm text-white font-semibold">
                IMDb: {rating}
            </div>
        </div>
    )
}

export default MovieCard;
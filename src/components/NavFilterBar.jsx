
export default function NavFilterBar({ media_type, setMedia_type }) {
    const handleMedia_type = (type) => {
        setMedia_type(type)
    }

    return (
        <div className="flex justify-center items-center gap-2 md:gap-4 py-4 md:py-6 font-bebas-neue px-4 md:px-6 lg:px-8">
            <button
                className={`text-white px-3 py-2 md:px-4 md:py-2 rounded-md text-sm md:text-base transition-all duration-300 hover:bg-red-600 ${media_type === 'movie'
                    ? 'bg-red-500 shadow-lg scale-105'
                    : 'bg-gray-800 hover:bg-gray-700'
                    }`}
                onClick={() => handleMedia_type('movie')}
            >
                Movies
            </button>
            <button
                className={`text-white px-3 py-2 md:px-4 md:py-2 rounded-md text-sm md:text-base transition-all duration-300 hover:bg-red-600 ${media_type === 'tv'
                    ? 'bg-red-500 shadow-lg scale-105'
                    : 'bg-gray-800 hover:bg-gray-700'
                    }`}
                onClick={() => handleMedia_type('tv')}
            >
                TV Shows
            </button>
            <button
                className={`text-white px-3 py-2 md:px-4 md:py-2 rounded-md text-sm md:text-base transition-all duration-300 hover:bg-red-600 ${media_type === 'all'
                    ? 'bg-red-500 shadow-lg scale-105'
                    : 'bg-gray-800 hover:bg-gray-700'
                    }`}
                onClick={() => handleMedia_type('all')}
            >
                All
            </button>
        </div>
    )
}
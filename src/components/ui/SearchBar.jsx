import { useSearch } from "../../context/SearchContext";

export default function SearchBar() {
    const { search, setSearch } = useSearch();

    return (
        <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search movies..."
            aria-label="Search movies"
            className="w-full p-2  rounded-lg text-sm sm:text-base
             bg-white/90 dark:bg-black/90 border border-gray-300 dark:border-gray-600
              focus:outline-none focus:ring-2 focus:ring-blue-500
              placeholder:text-gray-500 dark:placeholder:text-gray-400"
        />
    );
} 
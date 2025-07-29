import Logo from "./ui/Logo";
import SearchBar from "./ui/SearchBar";
import ThemeToggle from "./ui/ThemeToggle";
import { useSearch } from "../context/SearchContext";

export default function Header() {
    const { search, setSearch } = useSearch();
    return (
        <header className="mb-6 sm:mb-10 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-2">
            <Logo />
            <div className="flex items-center gap-2 w-full sm:w-auto">
                <SearchBar search={search} setSearch={setSearch} />
                <ThemeToggle />
            </div>
        </header>
    );
}
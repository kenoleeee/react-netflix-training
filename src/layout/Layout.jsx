import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { SearchProvider, useSearch } from "../context/SearchContext";

function LayoutContent() {
    const { search, setSearch } = useSearch();

    return (
        <div className="min-h-screen min-w-screen bg-white dark:bg-black text-black dark:text-white px-2 sm:px-4 py-3 sm:py-5 overflow-x-hidden ">
            <Header search={search} setSearch={setSearch} />
            <Outlet />
        </div>
    );
}

export default function Layout() {
    return (
        <SearchProvider>
            <LayoutContent />
        </SearchProvider>
    );
}
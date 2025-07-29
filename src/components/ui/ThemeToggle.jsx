import { useTheme } from "../../hooks/useTheme";

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className="text-sm px-2 py-2 rounded border-white/20 dark:border-white/10 hover:bg-white hover:text-black dark:hover:bg-white/10 transition"
        >
            {theme === 'dark' ? '🌞' : '🌙'}
        </button>
    );
} 
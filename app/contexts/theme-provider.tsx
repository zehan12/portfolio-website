import React, {
    createContext,
    useEffect,
    useState,
    ReactNode,
    use,
} from "react"
import { isBrowser } from "~/utils/app.utils"

// Define the possible theme types
type Theme = "dark" | "light" | "system"

// Define the props for ThemeProvider
type ThemeProviderProps = {
    children: ReactNode
    defaultTheme?: Theme
    storageKey?: string
}

// Define the context state structure
type ThemeProviderState = {
    theme: Theme
    setTheme: (theme: Theme) => void
}

// Initial state for the context
const initialState: ThemeProviderState = {
    theme: "system",
    setTheme: () => null,
}

// Create the ThemeContext
const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

// ThemeProvider component
export function ThemeProvider({
    children,
    defaultTheme = "system",
    storageKey = "vite-ui-theme",
    ...props
}: ThemeProviderProps) {
    // Initialize theme state with defaultTheme
    const [theme, setThemeState] = useState<Theme>(defaultTheme)

    // Effect to load theme from localStorage on mount
    useEffect(() => {
        if (isBrowser()) {
            const storedTheme = window.localStorage.getItem(storageKey) as Theme | null
            if (storedTheme) {
                setThemeState(storedTheme)
            }
        }
    }, [storageKey])

    // Effect to apply the theme to the document
    useEffect(() => {
        if (!isBrowser()) return

        const root = window.document.documentElement

        // Remove existing theme classes
        root.classList.remove("light", "dark")

        // Determine the theme to apply
        let appliedTheme = theme
        if (theme === "system") {
            const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
            appliedTheme = systemPrefersDark ? "dark" : "light"
        }

        // Add the appropriate theme class
        root.classList.add(appliedTheme)
    }, [theme])

    // Function to update the theme
    const setTheme = (newTheme: Theme) => {
        setThemeState(newTheme)
        if (isBrowser()) {
            window.localStorage.setItem(storageKey, newTheme)
        }
    }

    // Context value
    const value: ThemeProviderState = {
        theme,
        setTheme,
    }

    return (
        <ThemeProviderContext.Provider {...props} value={value}>
            {children}
        </ThemeProviderContext.Provider>
    )
}

// Custom hook to use the ThemeContext
export const useTheme = (): ThemeProviderState => {
    const context = use(ThemeProviderContext)

    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider")
    }

    return context
}

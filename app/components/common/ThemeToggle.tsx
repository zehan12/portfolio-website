import { Button } from "~/components/ui/button"
import { useTheme } from "~/contexts/theme-provider"

export const ThemeToggle = () => {
    const { setTheme } = useTheme()

    return (
        <>
            <Button variant={"secondary"} className="h-8 text-xs" onClick={() => setTheme("light")}>
                Light
            </Button>
            <Button variant={"secondary"} className="h-8 text-xs" onClick={() => setTheme("dark")}>
                Dark
            </Button>
            <Button variant={"secondary"} className="h-8 text-xs" onClick={() => setTheme("system")}>
                System
            </Button>
        </>
    )
}

import { Film } from "lucide-react"
import { Button } from "./ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "~/components/ui/dialog"

export const BrainRotsResume = () => {
    return (<>
        <Dialog>
            <DialogTrigger asChild>
                <Button variant={"outline"} className="flex gap-2">
                    <Film className="size-4" />
                    Resume for BrainRots
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-screen-md max-h-full bg-neutral-900 border-none">
                <DialogHeader>
                    <DialogTitle>Edit profile</DialogTitle>
                    <DialogDescription>
                        content
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        content to show
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit">Save changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    </>)
}
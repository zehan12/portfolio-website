"use client";
import { Route } from "../+types";
import { Button } from "~/components/ui/button";

export function meta({ data }: Route.MetaArgs) {
    console.log(data, "data");
    return [
        { title: "New React Router App" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

export async function loader() {
    return { message: "Hello, world!" };
}

export default function NotesPage({ loaderData }: Route.ComponentProps) {

    return (
        <section className="flex justify-center h-screen w-full">
            <div className="flex flex-col w-4/12 mt-20">
                <h1 className="font-bold">Note</h1>
                <p className="font-extralight">Space for fragments of thoughts</p>
                <p className="font-extralight">
                    by{" "}
                    <Button
                        variant="outline"
                        className="font-extralight text-xs h-6 w-14 hover:cursor-pointer"
                    >
                        Zehan
                    </Button>
                </p>
            </div>
        </section>
    );
}

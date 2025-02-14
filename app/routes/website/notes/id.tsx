import { Suspense } from "react";
import { Route } from "../+types";

export function meta({ data }: Route.MetaArgs) {
    console.log(data, "data")
    return [
        { title: "New React Router App" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

export async function loader() {
    return { message: "Hello, world!" };
}

export default function NotesPage({ loaderData, params }: Route.ComponentProps) {
    console.log(loaderData, params)
    return (<>
        <section className="border">
            <p>
                Notes ID : <Suspense fallback={<h1>loading...</h1>}>
                    <>{params?.id}</>
                </Suspense>
            </p>
        </section>
    </>)
}
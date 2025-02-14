import { Route } from "./+types";

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

export default function Index({ loaderData }: Route.ComponentProps) {
    console.log(loaderData)
    return (<>
        <section>
            scrolling page
        </section>
    </>)
}
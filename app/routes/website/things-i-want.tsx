import { Route } from "./+types";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Zehan Khan" },
        { name: "home", content: "Zehan Khan Home" },
    ];
}

export default function ThingsIWantPage() {
    return (<>
        <section className="border">
            <p>Welcome to my carefully curated list of coveted items. As a developer, taiko player, and curious human being, I have compiled a collection of objects that I aspire to have in my life. From high-quality monitors and AR/VR gears to mechanical and ergonomic keyboards and authentic taiko drums. This collection embodies a diverse range of coveted objects that fuel my passions and aspirations.
            </p>
        </section>
    </>);
}

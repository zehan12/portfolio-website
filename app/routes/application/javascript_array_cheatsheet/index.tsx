import { Route } from ".react-router/types/app/+types/root";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "New React Router App" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

export default function Index() {
    return (<>
        <section className="border w-full flex justify-center items-center">
            rocket-typing
        </section>
    </>);
}

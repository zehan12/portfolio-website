import { Route } from "./+types";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Zehan Khan" },
        { name: "home", content: "Zehan Khan Home" },
    ];
}

export default function BookMarkPage() {
    return (<>
        <section className="border w-full flex flex-col items-center gap-7">
            <section className="flex items-start w-5/12">
                <h1 className="font-bold text-[#818CF8] border-b border-[#818CF8]">What I'm up to at the moment</h1>
            </section>
            <section className="flex items-start w-5/12 border">
                <p>I am currently back in Udaipur, Rajasthan, working as a Freelance Full Stack Software Engineer. I prefer to identify myself as a T-Shaped Software Engineer. </p>
            </section>
            <section className="flex items-start w-5/12">
                <h3 className="font-bold">What I'm doing now</h3>
                <ul>
                    <li>Currently </li>
                    <li></li>
                    <li></li>
                </ul>
            </section>
        </section>
    </>);
}

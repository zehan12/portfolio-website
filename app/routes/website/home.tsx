import { Route } from "./+types";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Zehan Khan" },
    { name: "home", content: "Zehan Khan Home" },
  ];
}

export default function Home() {
  return (<>
    <section className="border">
      
    </section>
  </>);
}

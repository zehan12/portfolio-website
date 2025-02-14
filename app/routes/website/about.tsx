import { Route } from "./+types";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Zehan Khan" },
        { name: "home", content: "Zehan Khan Home" },
    ];
}

export default function AboutMePage() {
    return (<>
        <section className="border">
            <section>
                <h4>
                    Principles
                </h4>
                Below you’ll find the key engineering principles in which I believe:
                Not over engineering: Always try to “do the simple thing”, embrace the philosophy of don’t reinvent the wheel but when is required also do the groundwork.
                Self management: Don’t need a manager which does daily check-ins.
                Automation is key: when something has to be done always consider the trade-off of automating the process.
                One big part of automation is testing: use TDD development when is fit and test the full stack of the application following the test pyramid principle.
                Write code for humans: write code to be read by humans, debugged by humans and maintained by humans.
            </section>
            <section>
                <h4>
                    Motivations
                </h4>
                Over the years I’ve figured out what motivates me and the conditions under which I like to work:
                Culture: From my experience, autonomous people and cross-functional teams working through consensus and helping each other bring the best results. Micro-management is not acceptable.
                Role: I’m mostly knowledged in back-end development using Ruby on Rails, can work on the frontend too but it’s not my strongest skill. I do embrace the DevOps movement and have hands on infrastucture management with Kubernetes.
                Transparency: I work more effectively when the company shares as much of the long-term intentions as possible.
                Work-life balance: While I am ok with putting in a few extra hours on rare occasions, regular over-time is not something I do.
            </section>
        </section>
    </>);
}


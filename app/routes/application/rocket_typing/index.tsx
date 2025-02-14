import { Route } from ".react-router/types/app/+types/root";
import { ChartScatter, Rocket, RotateCcw } from "lucide-react";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "New React Router App" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

export default function Index() {
    return (<>
        <>
            <section className="mx-auto max-w-[768px] sm:max-w-[786px];">
                <div className="relative flex justify-between items-center h-full rounded-xl p-6 my-4 border transition-all duration-300">
                    <div className="flex items-center gap-7 text-muted-foreground">
                        <Rocket size={30} />
                        <h3 className="text-xl font-semibold">Rocket Typing</h3>
                    </div>
                    <button variant="outline" className="">
                        <ChartScatter size={34} />
                        <h4 className="text-xl font-semibold">Stats</h4>
                    </button>
                </div>
                <div className="w-9/12 border flex items-center justify-center gap-5  mx-auto h-40 my-8 rounded-lg">
                    <div className="w-60 text-center text-7xl font-semibold">
                        0 / 100
                    </div>
                    <div className="h-20 w-1 rounded-xl bg-zinc-800" />

                    <div className="w-64 h-full flex flex-col justify-center items-center gap-4">
                        <div className="flex gap-8">
                            <h5>A words</h5>
                            <h5>time</h5>
                            <h5>quote</h5>
                        </div>
                        <div className="flex gap-4">
                            <h5>10</h5>
                            <h5>25</h5>
                            <h5>50</h5>
                            <h5>100</h5>
                        </div>
                    </div>
                </div>
                <div className="h-40 w-full border rounded-2xl p-4 text-wrap text-xl leading-10" style={{ wordSpacing: "3px" }}>
                    seem few not the present year line up if again we and that
                    against high become can because move she no call go I over
                    plan down show get course than late for back be ask part
                    school also head from person{" "}
                </div>
                <div className="w-full flex justify-center items-center my-10">
                    <button variant={"secondary"} className="font-bold">
                        <RotateCcw className="font-bold" />
                        Start Over
                    </button>
                </div>
            </section>
        </>
    </>);
}

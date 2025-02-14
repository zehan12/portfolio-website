import { Route } from "./+types";

export function loader(_: Route.LoaderArgs) {
    return Response.json({ message: "I handle GET" });
}

export function action(_: Route.ActionArgs) {
    return Response.json({
        message: "I handle everything else",
    });
}

import { Route } from "../+types";

export async function loader({request}: Route.LoaderArgs) {

    const host =
        request.headers.get("X-Forwarded-Host") ?? request.headers.get("host");

    try {
        const url = new URL("/", `http://${host}`);
        await Promise.all([
            fetch(url.toString(), { method: "HEAD" }).then((r) => {
                if (!r.ok) return Promise.reject(r);
            }),
        ]);
        return new Response("OK");
    } catch (error: unknown) {
        console.log("healthcheck ❌", { error });
        return new Response("ERROR", { status: 500 });
    }
};

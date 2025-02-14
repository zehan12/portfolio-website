import {
    type RouteConfig,
    index,
    layout,
    route,
} from "@react-router/dev/routes";

export default [
    // *|> #PAGE_Routes <|*
    layout("routes/layout.tsx", [
        layout("routes/website/layout.tsx", [
            route("", "routes/website/index.tsx"),
            route("/home", "routes/website/home.tsx"),
            route("/me", "routes/website/me.tsx"),
            route("/notes", "routes/website/notes/notes.tsx"),
            route("/notes/:id", "routes/website/notes/id.tsx"),
            route("/things-i-want", "routes/website/things-i-want.tsx"),
            route("/now", "routes/website/now.tsx"),
            route("/projects", "routes/website/projects.tsx"),
        ]),

        layout("routes/application/layout.tsx", [
            route(
                "/rocket-typing",
                "routes/application/rocket_typing/index.tsx"
            ),
        ]),
    ]),

    // *|> #API_Routes <|*
    route("/api", "api/index.ts"),
    route("/api/health-check", "api/health-check/index.ts"),
] satisfies RouteConfig;

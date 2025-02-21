import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [route("/:slug", "routes/product.tsx")] satisfies RouteConfig;

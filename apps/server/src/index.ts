import { cors } from "@elysiajs/cors";
import { swagger } from "@elysiajs/swagger";
import { Elysia } from "elysia";
import { OpenAPI, auth } from "./lib/auth";
import CONFIG from "./config";

const { CORS_ORIGIN, PORT, NODE_ENV } = CONFIG;

const app = new Elysia()
	.use(
		cors({
			origin: CORS_ORIGIN,
			methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
			allowedHeaders: ["Content-Type", "Authorization"],
			credentials: true,
		}),
	)
	.mount("/auth", auth.handler)
	.use(
		swagger({
			documentation: {
				components: await OpenAPI.components,
				paths: await OpenAPI.getPaths(),
			},
		}),
	)
	.get("/", () => "OK")
	.listen(PORT);

console.log(
	`Listening at ${app.server?.hostname}:${app.server?.port} with env: -- ${NODE_ENV} --`,
);

export type App = typeof app;

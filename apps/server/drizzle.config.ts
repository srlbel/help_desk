import { defineConfig } from "drizzle-kit";
import CONFIG from "@/config";

const { DATABASE_URL, TEST_DATABASE_URL, NODE_ENV } = CONFIG;
const databaseUrl =
	NODE_ENV === "test" || NODE_ENV === "dev"
		? TEST_DATABASE_URL
		: DATABASE_URL;

export default defineConfig({
	schema: "./src/db/schema",
	out: "./src/db/migrations",
	dialect: "sqlite",
	dbCredentials: {
		url: databaseUrl,
	},
});

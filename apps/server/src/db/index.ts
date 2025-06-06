import { Database } from "bun:sqlite";
import { drizzle } from "drizzle-orm/bun-sqlite";
import CONFIG from "@/config";

const { DATABASE_URL, TEST_DATABASE_URL, NODE_ENV } = CONFIG;
const databaseUrl =
	NODE_ENV === "test" || NODE_ENV === "dev"
		? TEST_DATABASE_URL
		: DATABASE_URL;

export const db = drizzle(databaseUrl);

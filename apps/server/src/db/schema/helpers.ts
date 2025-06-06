import { integer } from "drizzle-orm/sqlite-core";

export const timestamps = {
	createdAt: integer("created_at", { mode: "timestamp" }).$default(
		() => new Date(),
	),
	updatedAt: integer("created_at", { mode: "timestamp" }).$default(
		() => new Date(),
	),
};

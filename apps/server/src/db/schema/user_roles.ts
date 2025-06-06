import { sqliteTable, integer, text, unique } from "drizzle-orm/sqlite-core";
import { user } from "./auth";
import { timestamps } from "./helpers";

export const userRoles = sqliteTable(
	"user_roles",
	{
		id: integer("id", { mode: "number" }).primaryKey({
			autoIncrement: true,
		}),
		userId: text("user_id")
			.notNull()
			.references(() => user.id),
		roleName: text("role_name", {
			enum: ["user", "agent", "admin"],
		}).notNull(),
		...timestamps,
	},
	(table) => [unique("user_role_unique").on(table.userId, table.roleName)],
);

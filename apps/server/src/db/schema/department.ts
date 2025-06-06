import {
	sqliteTable,
	integer,
	text,
	uniqueIndex,
} from "drizzle-orm/sqlite-core";
import { timestamps } from "./helpers";

export const departments = sqliteTable(
	"departments",
	{
		id: integer("id", { mode: "number" }).primaryKey({
			autoIncrement: true,
		}),
		departmentName: text("department_name").notNull().unique(),
		description: text("description"),
		...timestamps,
	},
	(table) => [uniqueIndex("department_name_idx").on(table.departmentName)],
);

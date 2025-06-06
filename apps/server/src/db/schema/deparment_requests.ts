import { sqliteTable, integer, unique } from "drizzle-orm/sqlite-core";
import { timestamps } from "./helpers";

export const departmentAllowedRequests = sqliteTable(
	"department_allowed_requests",
	{
		id: integer("id", { mode: "number" }).primaryKey({
			autoIncrement: true,
		}),
		requestingDepartmentId: integer("requesting_department_id").notNull(),
		receivingDepartmentId: integer("receiving_department_id").notNull(),
		...timestamps,
	},
	(table) => [
		unique("allowed_request_unique").on(
			table.requestingDepartmentId,
			table.receivingDepartmentId,
		),
	],
);

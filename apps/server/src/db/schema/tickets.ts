import {
	sqliteTable,
	integer,
	text,
	uniqueIndex,
} from "drizzle-orm/sqlite-core";
import { user } from "./auth";
import { departments } from "./department";
import { timestamps } from "./helpers";

export const tickets = sqliteTable(
	"tickets",
	{
		id: integer("id", { mode: "number" }).primaryKey({
			autoIncrement: true,
		}),
		title: text("title").notNull(),
		description: text("description").notNull(),
		requesterUserId: text("requester_user_id")
			.notNull()
			.references(() => user.id),
		requestingDepartmentId: integer("requesting_department_id")
			.notNull()
			.references(() => departments.id),
		receivingDepartmentId: integer("receiving_department_id")
			.notNull()
			.references(() => departments.id),
		status: text("status", {
			enum: ["created", "pending", "solved", "cancelled", "outdo"],
		}).notNull(),
		priority: text("priority", {
			enum: ["very low", "low", "medium", "high", "critical"],
		}).notNull(),
		solvedAt: integer("solved_at", { mode: "timestamp" }),
		cancelledAt: integer("cancelled_at", { mode: "timestamp" }),
		dueDate: integer("due_date", { mode: "timestamp" }),
		...timestamps,
	},
	(table) => [
		uniqueIndex("tickets_requester_id").on(table.requesterUserId),
		uniqueIndex("ticket_status_idx").on(table.status),
		uniqueIndex("tickets_priority_idx").on(table.priority),
	],
);

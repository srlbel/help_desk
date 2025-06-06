import {
	integer,
	sqliteTable,
	text,
	unique,
	uniqueIndex,
} from "drizzle-orm/sqlite-core";
import { user } from "./auth";
import { tickets } from "./tickets";

export const ticketAssignments = sqliteTable(
	"ticket_assignments",
	{
		id: integer("id", { mode: "number" }).primaryKey({
			autoIncrement: true,
		}),
		ticketId: integer("ticket_id")
			.notNull()
			.references(() => tickets.id),
		assignedToUserId: text("assigned_to_user_id")
			.notNull()
			.references(() => user.id),
		assignedAt: integer("assigned_at", { mode: "timestamp" }).default(
			new Date(),
		),
		unassignedAt: integer("unassigned_at", { mode: "timestamp" }),
		isCurrent: integer("is_current", { mode: "boolean" }).default(true),
	},
	(table) => [
		unique("current_assignment_unique").on(table.ticketId, table.isCurrent),
		uniqueIndex("ticket_assignment_ticket_id_idx").on(table.ticketId),
	],
);


import { pgTable, uuid, text, timestamp } from "drizzle-orm/pg-core";

export const rooms = pgTable("rooms", {
    id: uuid().primaryKey().defaultRandom(), /* Gera o id de forma aleatória */
    name: text().notNull(),
    description: text(),
    createdAt: timestamp().defaultNow().notNull()
});
import { relations } from 'drizzle-orm'
import {
  pgTable,
  varchar,
  timestamp,
  boolean,
  uuid,
  text,
} from 'drizzle-orm/pg-core'

export const profiles = pgTable('profiles', {
  id: uuid().primaryKey().notNull().defaultRandom().unique(),
  fullName: text('full_name'),
  userId: uuid('user_id').notNull().unique(),
})

export const profilesRelations = relations(profiles, ({ many }) => ({
  accounts: many(accounts),
}))

export const accounts = pgTable('accounts', {
  number: varchar({ length: 10 }).primaryKey().unique().notNull(),
  userId: uuid('user_id')
    .notNull()
    .references(() => profiles.id),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  isBlocked: boolean('is_blocked').notNull().default(false),
  type: text().notNull().default('checking'),
})

export const accountsRelations = relations(accounts, ({ one }) => ({
  profile: one(profiles, {
    fields: [accounts.userId],
    references: [profiles.id],
  }),
}))

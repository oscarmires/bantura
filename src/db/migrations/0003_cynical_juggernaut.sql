ALTER TABLE "profiles" RENAME COLUMN "name" TO "full_name";--> statement-breakpoint
ALTER TABLE "profiles" ADD COLUMN "user_id" uuid NOT NULL;--> statement-breakpoint
ALTER TABLE "profiles" ADD CONSTRAINT "profiles_user_id_unique" UNIQUE("user_id");
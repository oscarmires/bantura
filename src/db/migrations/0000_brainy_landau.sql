CREATE TABLE "accounts" (
	"number" varchar(10) PRIMARY KEY NOT NULL,
	"user_id" uuid NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"is_blocked" boolean DEFAULT false NOT NULL,
	"type" text DEFAULT 'checking' NOT NULL,
	CONSTRAINT "accounts_number_unique" UNIQUE("number")
);
--> statement-breakpoint
CREATE TABLE "profiles" (
	"id" uuid PRIMARY KEY NOT NULL,
	"name" text,
	"email" text
);
--> statement-breakpoint
ALTER TABLE "accounts" ADD CONSTRAINT "accounts_user_id_profiles_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."profiles"("id") ON DELETE no action ON UPDATE no action;
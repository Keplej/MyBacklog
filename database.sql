
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "status" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(80) NOT NULL
);

INSERT INTO "game_status" ("name") 
VALUES
    ('Currently Playing'),
    ('Backlog'),
    ('Completed');

CREATE TABLE "game" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR (120) NOT NULL,
	"description" TEXT NOT NULL,
    "status" INT REFERENCES "game_status",
	"image_url" VARCHAR (2083),
	"user_id" INT REFERENCES "user"
);



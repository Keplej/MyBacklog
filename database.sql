
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


INSERT INTO 
	"game" ("name", "description", "image_url", "status", "user_id")
VALUES
	('Dark Souls', 'Dark Souls is a third-person action role-playing game. A core mechanic of the game is exploration. Players are encouraged by the game to proceed with caution, learn from past mistakes, or find alternative areas to explore.', null, 2, 2),
	('Umineko', 'Umineko no Naku Koro ni (うみねこのなく頃に, lit. When the Seagulls Cry) is a Japanese murder mystery dōjin soft visual novel series produced by 07th Expansion (Ryukishi07). The story is divided into eight main arcs, which are referred to as episodes.', null, 1, 2),
	('Path of Exile', 'Path of Exile is an online Action RPG set in the dark fantasy world of Wraeclast. It is designed around a strong online item economy, deep character customisation, competitive PvP and ladder races. The game is completely free and will never be "pay to win".', null, 3, 2),
	('Leauge of Legends', 'League of Legends (LoL), commonly referred to as League, is a 2009 multiplayer online battle arena video game developed and published by Riot Games. Inspired by Defense of the Ancients, a custom map for Warcraft III', null, 1, 1),
    ('Higurashi When They Cry', 'A mature show steeped in mystery, Higurashi tells the story of a group of friends living in Hinamizawa, a rural village held captive by a cruel, bloody legacy. ... Once an arc has ended, everything resets to a happier point in life and we watch as a new tale of tragedy and paranoia unfolds.', null, 1, 2),
	('Gothic II', 'Gothic II is a role-playing video game and the sequel to Gothic, by the German developer Piranha Bytes. It was released on November 29, 2002 in Germany, and in North America on October 28, 2003. The game was published by JoWooD Productions and Atari, Inc.', null, 1, 2),
	('Portal', 'Portal consists primarily of a series of puzzles that must be solved by teleporting the players character and simple objects using the Aperture Science Handheld Portal Device, a device that can create inter-spatial portals between two flat planes.', null, 2, 2),
	('Persona 5', 'Persona 5 is a role-playing video game where the player takes on the role of a male high school student, codenamed Joker, who lives out a single year while attending school in modern-day Tokyo. The game is governed by a day-night cycle and weather systems that determine general behavior similar to a social simulation game.', null, 3, 2),
	('Mass Effect', 'Mass Effect is a single-player action role-playing game in which the player takes the role of Commander Shepard from a third-person perspective. Shepard\s gender, appearance, military background, combat-training and first name are determined by the player before the game begins.', null, 1, 2),
    ('Hollow Knight', 'Hollow Knight is a challenging, beautiful action adventure game set in the vast, inter-connected underground kingdom of Hallownest. A 2D action game with an emphasis on skill and exploration, Hollow Knight has you fighting a fearsome host of deadly creatures, avoiding intricate traps and solving ancient mysteries as you make your own way through fungal wastes, forests of bone, and ruined underground', null, 1, 2),
	('Yakuza 0', 'The glitz, glamour, and unbridled decadence of the 80s are back in Yakuza 0. A prequel to the long-running series set in Japans criminal underworld, this entry introduces mainstay protagonist Kazuma Kiryu and series regular Goro Majima as they fight like hell through Tokyo and Osaka in their climb through the yakuza ranks. ', null, 2, 2),
	('Dark Souls III', 'As fires fade and the world falls into ruin, journey into a universe filled with more colossal enemies and environments. Players will be immersed into a world of epic atmosphere and darkness through faster gameplay and amplified combat intensity. Fans and newcomers alike will get lost in the game hallmark rewarding gameplay and immersive graphics. Now only embers remain. Prepare yourself once more and Embrace The Darkness!', null, 3, 2),
	('Undertale', 'Welcome to UNDERTALE. In this RPG, you control a human who falls underground into the world of monsters. Now you must find your way out... or stay trapped forever.', null, 1, 2),
	('Terraria', 'Dig, fight, explore, build! Nothing is impossible in this action-packed adventure game. The world is your canvas and the ground itself is your paint.Grab your tools and go! Make weapons to fight off a variety of enemies in numerous biomes. Dig deep underground to find accessories, money, and other useful things. Gather resources to create everything you need to make the world your own. Build a house, a fort, or even a castle. People will move in to live there and perhaps even sell you different wares to assist you on your journey.But beware, there are even more challenges awaiting you... Are you up to the task?', null, 3, 2);


-- INSERT INTO 
-- 	"backlog" ("name", "description", "image_url", "user_id")
-- VALUES
-- 	('Higurashi When They Cry', 'A mature show steeped in mystery, Higurashi tells the story of a group of friends living in Hinamizawa, a rural village held captive by a cruel, bloody legacy. ... Once an arc has ended, everything resets to a happier point in life and we watch as a new tale of tragedy and paranoia unfolds.', null, 2),
-- 	('Gothic II', 'Gothic II is a role-playing video game and the sequel to Gothic, by the German developer Piranha Bytes. It was released on November 29, 2002 in Germany, and in North America on October 28, 2003. The game was published by JoWooD Productions and Atari, Inc.', null, 2),
-- 	('Portal', 'Portal consists primarily of a series of puzzles that must be solved by teleporting the players character and simple objects using the Aperture Science Handheld Portal Device, a device that can create inter-spatial portals between two flat planes.', null, 2),
-- 	('Persona 5', 'Persona 5 is a role-playing video game where the player takes on the role of a male high school student, codenamed Joker, who lives out a single year while attending school in modern-day Tokyo. The game is governed by a day-night cycle and weather systems that determine general behavior similar to a social simulation game.', null, 2),
-- 	('Mass Effect', 'Mass Effect is a single-player action role-playing game in which the player takes the role of Commander Shepard from a third-person perspective. Shepard\s gender, appearance, military background, combat-training and first name are determined by the player before the game begins.', null, 2);
	
	
-- INSERT INTO 
-- 	"completed" ("name", "description", "image_url", "user_id")
-- VALUES
-- 	('Hollow Knight', 'Hollow Knight is a challenging, beautiful action adventure game set in the vast, inter-connected underground kingdom of Hallownest. A 2D action game with an emphasis on skill and exploration, Hollow Knight has you fighting a fearsome host of deadly creatures, avoiding intricate traps and solving ancient mysteries as you make your own way through fungal wastes, forests of bone, and ruined underground', null, 2),
-- 	('Yakuza 0', 'The glitz, glamour, and unbridled decadence of the 80s are back in Yakuza 0. A prequel to the long-running series set in Japans criminal underworld, this entry introduces mainstay protagonist Kazuma Kiryu and series regular Goro Majima as they fight like hell through Tokyo and Osaka in their climb through the yakuza ranks. ', null, 2),
-- 	('Dark Souls III', 'As fires fade and the world falls into ruin, journey into a universe filled with more colossal enemies and environments. Players will be immersed into a world of epic atmosphere and darkness through faster gameplay and amplified combat intensity. Fans and newcomers alike will get lost in the game hallmark rewarding gameplay and immersive graphics. Now only embers remain. Prepare yourself once more and Embrace The Darkness!', null, 2),
-- 	('Undertale', 'Welcome to UNDERTALE. In this RPG, you control a human who falls underground into the world of monsters. Now you must find your way out... or stay trapped forever.', null, 2),
-- 	('Terraria', 'Dig, fight, explore, build! Nothing is impossible in this action-packed adventure game. The world is your canvas and the ground itself is your paint.Grab your tools and go! Make weapons to fight off a variety of enemies in numerous biomes. Dig deep underground to find accessories, money, and other useful things. Gather resources to create everything you need to make the world your own. Build a house, a fort, or even a castle. People will move in to live there and perhaps even sell you different wares to assist you on your journey.But beware, there are even more challenges awaiting you... Are you up to the task?', null, 2);
	
	
BEGIN;

-- Drop existing tables if they exist
DROP TABLE IF EXISTS "heroes_quests", "heroes_stuff", "quests", "heroes", "stuff", "dungeon_masters";

-- Create the heroes table
CREATE TABLE "heroes" (
    id SERIAL PRIMARY KEY UNIQUE,
    email TEXT UNIQUE,
    password TEXT,
    pseudo TEXT UNIQUE,
    level INTEGER DEFAULT 1
);

-- Create the quests table
CREATE TABLE "quests" (
    id SERIAL PRIMARY KEY UNIQUE,
    name TEXT,
    latitude DECIMAL,
    longitude DECIMAL,
    description TEXT NULL,
    id_creator_hero INTEGER NULL REFERENCES heroes(id),
    id_creator_master INTEGER NULL REFERENCES dungeon_masters(id)
);

-- Create the heroes_quests table
CREATE TABLE "heroes_quests" (
    id SERIAL PRIMARY KEY UNIQUE,
    id_hero INTEGER REFERENCES heroes(id),heroes
quests
heroes_quests
stuff
heroes_stuff
dungeon_masters
    id_quest INTEGER REFERENCES quests(id)
);

-- Create the stuff table
CREATE TABLE "stuff" (
    id SERIAL PRIMARY KEY UNIQUE,
    name TEXT UNIQUE,
    type INTEGER,
    level INTEGER,
    points DECIMAL
);

-- Create the heroes_stuff table
CREATE TABLE "heroes_stuff" (
    id SERIAL PRIMARY KEY UNIQUE,
    id_hero INTEGER REFERENCES heroes(id),
    id_stuff INTEGER REFERENCES stuff(id)
);

-- Create the dungeon_masters table
CREATE TABLE "dungeon_masters" (
    id SERIAL PRIMARY KEY UNIQUE,
    email TEXT,
    password TEXT
);

COMMIT;

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

-- Create the dungeon_masters table
CREATE TABLE "dungeon_masters" (
    id SERIAL PRIMARY KEY UNIQUE,
    email TEXT,
    password TEXT
);

-- Create the quests table
CREATE TABLE "quests" (
    id SERIAL PRIMARY KEY UNIQUE,
    name TEXT,
    latitude DECIMAL,
    longitude DECIMAL,
    description TEXT NULL,
    id_creator_hero INTEGER NULL,
    id_creator_master INTEGER NULL
);

-- Create the stuff table
CREATE TABLE "stuff" (
    id SERIAL PRIMARY KEY UNIQUE,
    name TEXT UNIQUE,
    type INTEGER,
    level INTEGER,
    points DECIMAL
);

-- Create the heroes_quests table
CREATE TABLE "heroes_quests" (
    id SERIAL PRIMARY KEY UNIQUE,
    id_hero INTEGER,
    id_quest INTEGER
);

-- Create the heroes_stuff table
CREATE TABLE "heroes_stuff" (
    id SERIAL PRIMARY KEY UNIQUE,
    id_hero INTEGER,
    id_stuff INTEGER
);

-- Add foreign key constraints
ALTER TABLE "quests" ADD CONSTRAINT fk_quests_hero FOREIGN KEY (id_creator_hero) REFERENCES heroes(id);
ALTER TABLE "quests" ADD CONSTRAINT fk_quests_master FOREIGN KEY (id_creator_master) REFERENCES dungeon_masters(id);

ALTER TABLE "heroes_quests" ADD CONSTRAINT fk_heroes_quests_hero FOREIGN KEY (id_hero) REFERENCES heroes(id);
ALTER TABLE "heroes_quests" ADD CONSTRAINT fk_heroes_quests_quest FOREIGN KEY (id_quest) REFERENCES quests(id);

ALTER TABLE "heroes_stuff" ADD CONSTRAINT fk_heroes_stuff_hero FOREIGN KEY (id_hero) REFERENCES heroes(id);
ALTER TABLE "heroes_stuff" ADD CONSTRAINT fk_heroes_stuff_stuff FOREIGN KEY (id_stuff) REFERENCES stuff(id);

COMMIT;

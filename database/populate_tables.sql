BEGIN;

-- Insert 20 heroes
INSERT INTO "heroes" ("email", "password", "pseudo", "level")
VALUES 
    ('fakemail1@fake.net', '12345678', 'Fake Hero 1', 1),
    ('fakemail2@fake.net', '12345678', 'Fake Hero 2', 1),
    ('fakemail3@fake.net', '12345678', 'Fake Hero 3', 1),
    ('fakemail4@fake.net', '12345678', 'Fake Hero 4', 1),
    ('fakemail5@fake.net', '12345678', 'Fake Hero 5', 1),
    ('fakemail6@fake.net', '12345678', 'Fake Hero 6', 1),
    ('fakemail7@fake.net', '12345678', 'Fake Hero 7', 1),
    ('fakemail8@fake.net', '12345678', 'Fake Hero 8', 1),
    ('fakemail9@fake.net', '12345678', 'Fake Hero 9', 1),
    ('fakemail10@fake.net', '12345678', 'Fake Hero 10', 1),
    ('fakemail11@fake.net', '12345678', 'Fake Hero 11', 1),
    ('fakemail12@fake.net', '12345678', 'Fake Hero 12', 1),
    ('fakemail13@fake.net', '12345678', 'Fake Hero 13', 1),
    ('fakemail14@fake.net', '12345678', 'Fake Hero 14', 1),
    ('fakemail15@fake.net', '12345678', 'Fake Hero 15', 1),
    ('fakemail16@fake.net', '12345678', 'Fake Hero 16', 1),
    ('fakemail17@fake.net', '12345678', 'Fake Hero 17', 1),
    ('fakemail18@fake.net', '12345678', 'Fake Hero 18', 1),
    ('fakemail19@fake.net', '12345678', 'Fake Hero 19', 1),
    ('fakemail20@fake.net', '12345678', 'Fake Hero 20', 1);

--     INSERT INTO "quests" (name, latitude, longitude, description, id_creator_hero, id_creator_master)
-- VALUES 
--     ('Quest 1', 45.764043, 4.835659, 'Description for Quest 1', 1, NULL),
--     ('Quest 2', 48.856613, 2.352222, 'Description for Quest 2', 2, NULL),
--     ('Quest 3', 51.507351, -0.127758, 'Description for Quest 3', 3, NULL),
--     ('Quest 4', 40.712776, -74.005974, 'Description for Quest 4', 4, NULL),
--     ('Quest 5', 34.052235, -118.243683, 'Description for Quest 5', 5, NULL),
--     ('Quest 6', 35.689487, 139.691711, 'Description for Quest 6', 6, NULL),
--     ('Quest 7', 55.755825, 37.617298, 'Description for Quest 7', 7, NULL),
--     ('Quest 8', -33.868820, 151.209290, 'Description for Quest 8', 8, NULL),
--     ('Quest 9', 52.520008, 13.404954, 'Description for Quest 9', 9, NULL),
--     ('Quest 10', -23.550520, -46.633308, 'Description for Quest 10', 10, NULL);
-- Créer 10 quêtes avec des coordonnées aléatoires autour de Saint-Sulpice-sur-Lèze
WITH random_points AS (
    SELECT
        'Quest ' || generate_series(1, 10) AS name,
        43.3466 + (random() - 0.5) * (7 / 111.32) AS latitude,  -- 111.32 km = 1 degree latitude
        1.2836 + (random() - 0.5) * (7 / (111.32 * cos(radians(43.3466)))) AS longitude,
        'Description for Quest ' || generate_series(1, 10) AS description,
        (floor(random() * 20) + 1)::INTEGER AS id_creator_hero
    FROM generate_series(1, 10)
)
INSERT INTO "quests" (name, latitude, longitude, description, id_creator_hero, id_creator_master)
SELECT name, latitude, longitude, description, id_creator_hero, NULL
FROM random_points;
-- -- Some hero_quest links
-- INSERT INTO "heroes_quests" (id_hero, id_quest)
-- VALUES 
--     (1, 1),
--      (1, 2),
--     (2, 2),
--     (3, 3),
--     (4, 4),
--     (5, 5),
--     (6, 6),
--     (7, 7),
--     (8, 8),
--     (9, 9),
--     (10, 10),
--     (11, 1),
--     (12, 2),
--     (13, 3),
--     (14, 4),
--     (15, 5),
--     (16, 6),
--     (17, 7),
--     (18, 8),
--     (19, 9),
--     (20, 10);
-- Associer entre 0 et 5 quêtes à chaque héros
DO $$
DECLARE
    hero_id INTEGER;
    quest_id INTEGER;
    num_quests INTEGER;
BEGIN
    FOR hero_id IN 1..20 LOOP
        num_quests := floor(random() * 6); -- Nombre aléatoire de quêtes entre 0 et 5
        FOR quest_id IN (SELECT id FROM quests ORDER BY random() LIMIT num_quests) LOOP
            INSERT INTO "heroes_quests" (id_hero, id_quest)
            VALUES (hero_id, quest_id);
        END LOOP;
    END LOOP;
END $$;

COMMIT;

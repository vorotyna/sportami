DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS sports CASCADE;
DROP TABLE IF EXISTS users_sports CASCADE;
DROP TABLE IF EXISTS matches CASCADE;
DROP TABLE IF EXISTS reviews CASCADE;

CREATE TABLE users (
    id SERIAL PRIMARY KEY NOT NULL,
    username VARCHAR(255) NOT NULL UNIQUE,
    first_name VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE,
    bio TEXT,
    location VARCHAR(255),
    gender VARCHAR(255),
    age INTEGER,
    profile_pic VARCHAR(100000)
);

CREATE TABLE sports (
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE users_sports (
    id SERIAL PRIMARY KEY NOT NULL,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    sport_id INTEGER REFERENCES sports(id) ON DELETE CASCADE,
    self_skill VARCHAR(255)
);

CREATE TABLE matches (
    id SERIAL PRIMARY KEY NOT NULL,
    challenger_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    opponent_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    location VARCHAR(255),
    sport_id INTEGER REFERENCES sports(id) ON DELETE CASCADE,
    accepted BOOLEAN DEFAULT FALSE,
    challenger_reviewed BOOLEAN DEFAULT FALSE,
    opponent_reviewed BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE reviews (
    id SERIAL PRIMARY KEY NOT NULL,
    user_sport_id INTEGER REFERENCES users_sports(id) ON DELETE CASCADE,
    winner_id INTEGER REFERENCES users_sports(id) ON DELETE CASCADE,
    sportsmanship_rating INTEGER
);


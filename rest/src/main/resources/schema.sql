
DROP TABLE IF EXISTS tool;
DROP TABLE IF EXISTS material;
DROP TABLE IF EXISTS announcement_splash;
DROP TABLE IF EXISTS announcement;
DROP TABLE IF EXISTS user_roles;
DROP TABLE IF EXISTS users;

--CREATE EXTENSION pgcrypto;


CREATE TABLE IF NOT EXISTS tool(
  id SERIAL PRIMARY KEY,
  name VARCHAR(75)
);

 CREATE TABLE IF NOT EXISTS material(
   id SERIAL PRIMARY KEY,
   name VARCHAR(75)
 );

 CREATE TABLE IF NOT EXISTS announcement(
   announcement_id SERIAL PRIMARY KEY,
   text VARCHAR(400),
   announcement_level VARCHAR(15),
   created_date DATE,
   expiration_date DATE
 );

 CREATE TABLE IF NOT EXISTS announcement_splash(
   id SERIAL PRIMARY KEY,
   fk_announcement_id INT REFERENCES announcement(announcement_id) ON DELETE CASCADE ON UPDATE CASCADE
 );

CREATE TABLE IF NOT EXISTS users(
   --id SERIAL PRIMARY KEY,
   username VARCHAR(32) PRIMARY KEY,
   password VARCHAR(82) NOT NULL,
   enabled BOOLEAN
 );

 CREATE TABLE IF NOT EXISTS user_roles(
  -- user_role_id SERIAL PRIMARY KEY,
   username VARCHAR(32) NOT NULL,
   role VARCHAR(32) NOT NULL,
   --CONSTRAINT uni_username_role UNIQUE(role, username),
   CONSTRAINT fk_user_role FOREIGN KEY (username) REFERENCES users(username)
 );

 CREATE INDEX user_role_idx ON user_roles(username, role);



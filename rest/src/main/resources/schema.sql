
DROP TABLE IF EXISTS tool;
DROP TABLE IF EXISTS material;
DROP TABLE IF EXISTS announcement_splash;
DROP TABLE IF EXISTS announcement;

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




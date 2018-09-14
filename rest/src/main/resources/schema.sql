
DROP TABLE IF EXISTS tool;
DROP TABLE IF EXISTS material;
DROP TABLE IF EXISTS announcement_splash;
DROP TABLE IF EXISTS announcement;


CREATE TABLE IF NOT EXISTS tool(
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(75)
);

CREATE TABLE IF NOT EXISTS material(
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(75)
);

CREATE TABLE IF NOT EXISTS announcement(
  announcement_id INT AUTO_INCREMENT PRIMARY KEY,
  text VARCHAR(400),
  announcement_level VARCHAR(15),
  created_date DATE,
  expiration_date DATE
);

CREATE TABLE IF NOT EXISTS announcement_splash(
  id INT AUTO_INCREMENT PRIMARY KEY,
  fk_announcement_id INT,
  CONSTRAINT FOREIGN KEY(fk_announcement_id)
  REFERENCES announcement (announcement_id)
  ON DELETE CASCADE
  ON UPDATE CASCADE
);


-- SELECT announcement.text, announcement.announcement_level FROM announcement_splash INNER JOIN announcement ON announcement_splash.announcement_id=announcement.id;
--
-- SELECT a.text, a.announcement_level FROM announcement_splash b INNER JOIN announcement a ON b.announcement_id=a.id;




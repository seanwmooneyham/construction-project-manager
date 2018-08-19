CREATE TABLE IF NOT EXISTS tool(
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(75)
);


CREATE TABLE IF NOT EXISTS materiel(
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(75)
);


INSERT INTO tool VALUES(null, 'Hammer Drill');
INSERT INTO tool VALUES(null, 'Battery Drill');
INSERT INTO tool VALUES(null, 'Pipe Bender');
INSERT INTO tool VALUES(null, 'Portable Band Saw');
INSERT INTO tool VALUES(null, 'Tool Cart');

INSERT INTO materiel VALUES(null, '1/4" EMT');
INSERT INTO materiel VALUES(null, '1/4" EMT Couplings');
INSERT INTO materiel VALUES(null, '1/4 - 20 Screws');
INSERT INTO materiel VALUES(null, '1/2" Rigid');
INSERT INTO materiel VALUES(null, '4" Square Electrical Box');




INSERT INTO tool VALUES(null, 'Hammer Drill');
INSERT INTO tool VALUES(null, 'Battery Drill');
INSERT INTO tool VALUES(null, 'Pipe Bender');
INSERT INTO tool VALUES(null, 'Portable Band Saw');
INSERT INTO tool VALUES(null, 'Tool Cart');

INSERT INTO material VALUES(null, '1/4" EMT');
INSERT INTO material VALUES(null, '1/4" EMT Couplings');
INSERT INTO material VALUES(null, '1/4 - 20 Screws');
INSERT INTO material VALUES(null, '1/2" Rigid');
INSERT INTO material VALUES(null, '4" Square Electrical Box');

INSERT INTO announcement VALUES(NULL, 'Work smart and work safe, wear your PPE!', 'danger', CURDATE(), CURDATE() + INTERVAL 7 DAY);
INSERT INTO announcement VALUES(NULL, 'Inspection today!  Tighten your nuts and bolts!', 'success', CURDATE(), CURDATE() + INTERVAL 7 DAY);
INSERT INTO announcement VALUES(NULL, 'Bigwigs are on site today, no smoke breaks!', 'warning', CURDATE(), CURDATE() + INTERVAL 7 DAY);
INSERT INTO announcement VALUES(NULL, 'Stop using 2nd floor bathroom', 'danger', CURDATE(), CURDATE() + INTERVAL 7 DAY);
INSERT INTO announcement VALUES(NULL, 'Break time has been changed to 11 am', 'primary', CURDATE(), CURDATE() + INTERVAL 7 DAY);
INSERT INTO announcement VALUES(NULL, 'Elevator is out of service all week, eat your Wheaties', 'info', CURDATE(), CURDATE() + INTERVAL 7 DAY);

INSERT INTO announcement_splash VALUES(NULL, 1);

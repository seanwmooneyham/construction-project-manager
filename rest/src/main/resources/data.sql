--================= MySQL ===============

-- INSERT INTO tool VALUES(null, 'Hammer Drill');
-- INSERT INTO tool VALUES(null, 'Battery Drill');
-- INSERT INTO tool VALUES(null, 'Pipe Bender');
-- INSERT INTO tool VALUES(null, 'Portable Band Saw');
-- INSERT INTO tool VALUES(null, 'Tool Cart');
--
-- INSERT INTO material VALUES(null, '1/4" EMT');
-- INSERT INTO material VALUES(null, '1/4" EMT Couplings');
-- INSERT INTO material VALUES(null, '1/4 - 20 Screws');
-- INSERT INTO material VALUES(null, '1/2" Rigid');
-- INSERT INTO material VALUES(null, '4" Square Electrical Box');
--
-- INSERT INTO announcement VALUES(NULL, 'Work smart and work safe, wear your PPE!', 'danger', CURDATE(), CURDATE() + INTERVAL 7 DAY);
-- INSERT INTO announcement VALUES(NULL, 'Inspection today!  Tighten your nuts and bolts!', 'success', CURDATE(), CURDATE() + INTERVAL 7 DAY);
-- INSERT INTO announcement VALUES(NULL, 'Bigwigs are on site today, no smoke breaks!', 'warning', CURDATE(), CURDATE() + INTERVAL 7 DAY);
-- INSERT INTO announcement VALUES(NULL, 'Stop using 2nd floor bathroom', 'danger', CURDATE(), CURDATE() + INTERVAL 7 DAY);
-- INSERT INTO announcement VALUES(NULL, 'Break time has been changed to 11 am', 'primary', CURDATE(), CURDATE() + INTERVAL 7 DAY);
-- INSERT INTO announcement VALUES(NULL, 'Elevator is out of service all week, eat your Wheaties', 'info', CURDATE(), CURDATE() + INTERVAL 7 DAY);
--
-- INSERT INTO announcement_splash VALUES(NULL, 1);



-- ================ PostgreSQL =====================

INSERT INTO tool VALUES(DEFAULT, 'Hammer Drill');
INSERT INTO tool VALUES(DEFAULT, 'Battery Drill');
INSERT INTO tool VALUES(DEFAULT, 'Pipe Bender');
INSERT INTO tool VALUES(DEFAULT, 'Portable Band Saw');
INSERT INTO tool VALUES(DEFAULT, 'Tool Cart');

INSERT INTO material VALUES(DEFAULT, '1/4" EMT');
INSERT INTO material VALUES(DEFAULT, '1/4" EMT Couplings');
INSERT INTO material VALUES(DEFAULT, '1/4 - 20 Screws');
INSERT INTO material VALUES(DEFAULT, '1/2" Rigid');
INSERT INTO material VALUES(DEFAULT, '4" Square Electrical Box');

INSERT INTO announcement VALUES(DEFAULT, 'Work smart and work safe, wear your PPE!', 'danger', CURRENT_DATE, CURRENT_DATE + INTERVAL '7d');
INSERT INTO announcement VALUES(DEFAULT, 'Inspection today!  Tighten your nuts and bolts!', 'success', CURRENT_DATE, CURRENT_DATE + INTERVAL '7d');
INSERT INTO announcement VALUES(DEFAULT, 'Bigwigs are on site today, no smoke breaks!', 'warning', CURRENT_DATE, CURRENT_DATE + INTERVAL '7d');
INSERT INTO announcement VALUES(DEFAULT, 'Stop using 2nd floor bathroom', 'danger', CURRENT_DATE, CURRENT_DATE + INTERVAL '7d');
INSERT INTO announcement VALUES(DEFAULT, 'Break time has been changed to 11 am', 'primary', CURRENT_DATE, CURRENT_DATE + INTERVAL '7d');
INSERT INTO announcement VALUES(DEFAULT, 'Elevator is out of service all week, eat your Wheaties', 'info', CURRENT_DATE, CURRENT_DATE + INTERVAL '7d');

INSERT INTO announcement_splash VALUES(DEFAULT, 1);

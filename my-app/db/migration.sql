DROP DATABASE IF EXISTS target_db;

CREATE DATABASE target_db;

\c target_db;


DROP TABLE product_items;


CREATE TABLE product_items (ID SERIAL PRIMARY KEY, NAME TEXT,list NUMERIC);

INSERT INTO product_items (name,list) VALUES ('Lamp',10);
INSERT INTO product_items (name,list) VALUES ('White shirt',11);
INSERT INTO product_items (name,list) VALUES ('Toothbrush',12);
INSERT INTO product_items (name,list) VALUES ('Xbox',13);
INSERT INTO product_items (name,list) VALUES ('PS5',14);
INSERT INTO product_items (name,list) VALUES ('Brush',15);
INSERT INTO product_items (name,list) VALUES ('Cantu',16);
INSERT INTO product_items (name,list) VALUES ('Zippo Lighter',17);
INSERT INTO product_items (name,list) VALUES ('Apple Keyboard',18);
INSERT INTO product_items (name,list) VALUES ('AA Batteries',19);

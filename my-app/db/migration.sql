DROP DATABASE IF EXISTS target_dbs;

CREATE DATABASE target_dbs;


\c target_dbs;




CREATE TABLE product_items1(id serial, name text,list int);

INSERT INTO product_items1 (name,list) VALUES ('Hammacher Schlemmer Lamp',10);
INSERT INTO product_items1 (name,list) VALUES ('Valentino White Shirt',11);
INSERT INTO product_items1 (name,list) VALUES ('Reinast Luxury Toothbrush',12);
INSERT INTO product_items1 (name,list) VALUES ('Halo Edition Xbox',13);
INSERT INTO product_items1 (name,list) VALUES ('24k Gold PS5',14);
INSERT INTO product_items1 (name,list) VALUES ('King Scorpion 360 XXX 720 Wave Brush',15);
INSERT INTO product_items1 (name,list) VALUES ('Cantu Curling Cream',16);
INSERT INTO product_items1 (name,list) VALUES ('Luffy Zippo Lighter',17);
INSERT INTO product_items1 (name,list) VALUES ('Wooden Apple Keyboard',18);
INSERT INTO product_items1 (name,list) VALUES ('AA Energizer Batteries',19);


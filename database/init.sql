-- CREATE DATABASE IF NOT EXISTS drug_store_db;

-- USE drug_store_db;

CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(30) NOT NULL UNIQUE, --то же самое, что и логин
    password VARCHAR(80) NOT NULL
);

CREATE TABLE IF NOT EXISTS roles (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS users_roles (
    user_id INT NOT NULL,
    role_id INT NOT NULL,
    PRIMARY KEY (user_id, role_id),
    FOREIGN KEY (user_id) REFERENCES users (id),
    FOREIGN KEY (role_id) REFERENCES roles (id)
);

--OLD TABLES

--\c drug_store_db

CREATE TABLE IF NOT EXISTS positions (
	id SERIAL PRIMARY KEY,
	name VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS employees (
    id SERIAL PRIMARY KEY,
    login VARCHAR(255) NULL UNIQUE,
    name VARCHAR(255) NOT NULL,
    surname VARCHAR(255) NOT NULL,
    patronymic VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone_number VARCHAR(255) NOT NULL,
    birth_date DATE NOT NULL,
    salary NUMERIC(10, 2) NOT NULL,
    hire_date DATE NOT NULL,
    image_path VARCHAR(255) NULL,
    position_id INTEGER NOT NULL
);

ALTER TABLE employees
    ADD FOREIGN KEY (position_id)
        REFERENCES positions(id)
        ON DELETE RESTRICT
        ON UPDATE RESTRICT;

-----------------------
CREATE OR REPLACE FUNCTION random_between(low BIGINT ,high BIGINT)
   RETURNS INT AS
$$
	BEGIN
	   RETURN floor(random()* (high-low + 1) + low);
	END;
$$ language 'plpgsql' STRICT;


CREATE OR REPLACE FUNCTION random_date()
   RETURNS DATE AS
$$
	BEGIN
	   RETURN DATE(CAST(random_between(1950, 2010) AS varchar) || '-' ||
			  	   CAST(random_between(1, 12) AS varchar) || '-' ||
			       CAST(random_between(1, 28) AS varchar));
	END;
$$ language 'plpgsql' STRICT;


CREATE OR REPLACE FUNCTION random_email()
   RETURNS VARCHAR AS
$$
	BEGIN
	   RETURN
	       LEFT(md5(random()::text), random_between(4,128)) ||
	       '@' ||
	       LEFT(md5(random()::text), random_between(2,32)) ||
	       '.' ||
	       LEFT(md5(random()::text), random_between(2,8));
	END;
$$ language 'plpgsql' STRICT;


CREATE OR REPLACE FUNCTION random_name()
   RETURNS VARCHAR AS
$$
	BEGIN
	   RETURN REPLACE(TRANSLATE(
				  UPPER(LEFT(md5(random()::text), random_between(1, 2))) ||
				  LOWER(LEFT(md5(random()::text), random_between(4, 32)))
			  , '1234567890', '##########'),'#','');
	END;
$$ language 'plpgsql' STRICT;
-----------------------

INSERT INTO roles (id, name) VALUES
    (1, 'ROLE_USER'), 
    (2, 'ROLE_ADMIN');

INSERT INTO users (id, username, password)
VALUES
(1, 'admin1', '$2b$12$I1j5h6Q6gcrJspGStmkpkehRokJcq2IX6qgl/u/fTav0WH.HQaG3a'), --admin1:adminadmin
(2, 'admin2', '$2b$12$I1j5h6Q6gcrJspGStmkpkehRokJcq2IX6qgl/u/fTav0WH.HQaG3a'), --admin2:adminadmin
(3, 'admin3', '$2b$12$I1j5h6Q6gcrJspGStmkpkehRokJcq2IX6qgl/u/fTav0WH.HQaG3a'), --admin3:adminadmin
(4, 'admin4', '$2b$12$I1j5h6Q6gcrJspGStmkpkehRokJcq2IX6qgl/u/fTav0WH.HQaG3a'), --admin4:adminadmin
(5, 'admin5', '$2b$12$I1j5h6Q6gcrJspGStmkpkehRokJcq2IX6qgl/u/fTav0WH.HQaG3a'), --admin5:useruser
(6, 'user1', '$2b$12$YYG6HCxe7bebaICcV319NOTFFAV/gb1u5rDDkF8nGIv2SRx.64rq2'), --user1:useruser
(7, 'user2', '$2b$12$YYG6HCxe7bebaICcV319NOTFFAV/gb1u5rDDkF8nGIv2SRx.64rq2'), --user2:useruser
(8, 'user3', '$2b$12$YYG6HCxe7bebaICcV319NOTFFAV/gb1u5rDDkF8nGIv2SRx.64rq2'); --user3:useruser


INSERT INTO users_roles (user_id, role_id)
VALUES
    (1, 2),
    (2, 2),
    (3, 2),
    (4, 2),
    (5, 2),
    (6, 1),
    (7, 1),
    (8, 1);

INSERT INTO positions (id, name) VALUES 
    (1, 'Фармацевт'), 
    (2, 'Администратор'), 
    (3, 'Менеджер');

INSERT INTO employees(id, login, name, surname, patronymic, email, phone_number, birth_date, salary, hire_date, image_path, position_id)
VALUES
	(1, 'admin1', 'Сергей', 'Механиков', 'Дроидович', 'ceduy_ixaha73@ya.ru', '70968597357',
	random_date(), random_between(100000, 300000), DATE('2031-05-12'), 'https://storage.yandexcloud.net/pharmacy/staff/1.JPG', random_between(1,3)),
	(2, 'admin2', 'Алексей', 'Технов', 'Андроидович', 'fiwi-hakipo31@ya.ru', '72836128547',
	random_date(), random_between(100000, 300000), DATE('2028-07-19'), 'https://storage.yandexcloud.net/pharmacy/staff/2.JPG', random_between(1,3)),
	(3, 'admin3', 'Илья', 'Электроников', 'Кибернетичевич', 'haw_azeyama93@ya.ru', '74823029215',
	random_date(), random_between(100000, 300000), DATE('2034-09-26'), 'https://storage.yandexcloud.net/pharmacy/staff/3.JPG', random_between(1,3)),
	(4, 'admin4','Анна', 'Киберова', 'Сеченовна', 'velini_kofe41@ya.ru', '79951089415',
	random_date(), random_between(100000, 300000), DATE('2023-11-03'), 'https://storage.yandexcloud.net/pharmacy/staff/4.JPG', random_between(1,3)),
	(5, 'admin5', 'Валерия', 'Ботникова', 'Роботна', 'nadez_odope16@ya.ru', '72588531303',
	random_date(), random_between(100000, 300000), DATE('2029-02-10'), 'https://storage.yandexcloud.net/pharmacy/staff/5.JPG', random_between(1,3));

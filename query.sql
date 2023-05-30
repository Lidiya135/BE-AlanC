-- Active: 1678680489796@@149.129.241.190@5432@lidiya03@public

CREATE TABLE
    category(
        id SERIAL PRIMARY KEY,
        name VARCHAR (64),
        photo VARCHAR (255)
    );

CREATE TABLE
    products (
        id SERIAL PRIMARY KEY,
        name VARCHAR (64),
        price INT,
        photo VARCHAR (255),
        category_id INT REFERENCES category(id)
    );

CREATE TABLE
    transactions(
        id SERIAL PRIMARY KEY,
        name VARCHAR(64),
        product_id INT REFERENCES products(id),
        amount INT,
        total INT
    );

    CREATE TABLE
    pay(
        id SERIAL PRIMARY KEY,
        charge INT,
        pay INT,
        change INT,
        transaction_id INT REFERENCES transactions(id)
    );

INSERT INTO category(name,photo)VALUES('${name}','${photo}');

SELECT * FROM category;

select * from category where id = 1;

UPDATE category SET name='cumi',photo='cumi.png' WHERE id=1;

DELETE FROM category where id=1;

INSERT INTO products(name,price,photo,category_id)VALUES('cumi bakar',15000,'${photo}',2);
UPDATE products SET name='cumi goreng',price='10000',photo='cb.png',category_id=2 WHERE id=1;
SELECT * FROM products;
Select products.name,products.price,products.photo,category.name as category FROM products INNER JOIN category ON products.category_id = category.id WHERE products.id=3;
Select products.id,products.name,products.price,category.name as category,products.photo FROM products INNER JOIN category ON products.category_id = category.id;

INSERT INTO transactions(name,product_id, amount, total, pay, change)VALUES('eko',3,1, 10000,20000,10000);
SELECT * FROM transactions;
UPDATE transactions SET name='eko wahyudin',product_id=3,amount=2,total=20,pay=50,change=30 WHERE id=1;
select * from transactions where id = 1;

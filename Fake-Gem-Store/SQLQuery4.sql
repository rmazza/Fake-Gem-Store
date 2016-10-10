select * from review

DELETE FROM Product
WHERE Id = 13


select * from product
select * from Image
DELETE FROM Product 
WHERE
	Id = 9

	(SELECT ID FROM Product WHERE name = 'Dodecahedron')

INSERT INTO Product(name,canPurchase, soldOut, description, price, quantity)
VALUES
('Gold',0,1,'Gold is a chemical element with the symbol Au and the atomic number 79.',49.99,54),
('Iron',1,0,'Silver is the metallic element with the atomic number 47.', 39.99, 49)

INSERT INTO Image(ProductId,[full],thumb)
VALUES
((SELECT Id from Product WHERE name = 'Gold'),'Gold Full','http://www.zerohedge.com/sites/default/files/images/user230519/imageroot/Gold.jpg'),
((SELECT Id from Product WHERE name = 'Iron'),'Iron Full','http://www.meteorite-iron.narod.ru/photo/09.jpg')

INSERT INTO Review(ProductId, body, author, stars)
VALUES
((SELECT Id from Product WHERE name = 'Deodecahedron'),'I Love this Product!', 'robertmazza1@gmail.com', 5),
((SELECT Id from Product WHERE name = 'Deodecahedron'), 'This was ok.','bobbo029@gmail.com',3),
((SELECT Id from Product WHERE name = 'Pyrite'), 'Had better.','jabroni@yourmom.com',4),
((SELECT Id from Product WHERE name = 'Silver'), 'Best Product Ever!','abc@yahoo.com',5),
((SELECT Id from Product WHERE name = 'Silver'), 'I prefer Gold!','xyz@hotmail.com',2),
((SELECT Id from Product WHERE name = 'Gold'), 'I like the shine!','kdien@aol.com',3),
((SELECT Id from Product WHERE name = 'Gold'), 'Terrible','kdicmemm@myspace.com',1),
((SELECT Id from Product WHERE name = 'Iron'), 'Pretty Good','hello@gmail.com',4),
((SELECT Id from Product WHERE name = 'Iron'), 'Love it!','myadjdieidid@aol.com',5)

INSERT INTO Review(ProductId, body, author, stars)
VALUES
((SELECT Id from Product WHERE name = 'Deodecahedron'), 'This was ok.','bobbo029@gmail.com',3)

INSERT INTO Image(ProductId, [full], thumb)
VALUES
((SELECT Id from Product WHERE name = 'Deodecahedron'), 'link2full','link2thumb')

SELECT [full], thumb FROM Image WHERE ProductId = 7

SELECT stars, author, body FROM Review WHERE ProductId = 2

SELECT * FROM PRODUCT

SELECT * FROM REVIEW


INSERT INTO Review(ProductId, body, author, stars)
VALUES
((SELECT Id from Product WHERE name = 'Gold'), 'aaaaa','bobbo029@gmail.com',3)
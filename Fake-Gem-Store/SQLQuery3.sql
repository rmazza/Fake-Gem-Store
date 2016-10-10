INSERT INTO Product(name, price, description, canPurchase, soldOut, quantity)
VALUES 
('Deodecahedron', 12.95,'Some gems have hidden qualitites beyond their lustre, beyond their shine...', 1, 1, 0),
('Pyrite', 9.95,'The mineral pyrite, or iron pyrite, also known as fools gold', 1, 1, 0),
('Silver', 11.95,'Silver is the metallic element with the atomic number 47. ', 1, 1, 0)

INSERT INTO Image(ProductId, [full], thumb)
VALUES
((SELECT Id FROM Product WHERE name = 'Deodecahedron'), 'full path 1', 'http://virtualmathmuseum.org/Polyhedra/Dodecahedron/Dodecahedron.png'),
((SELECT Id FROM Product WHERE name = 'Pyrite'), 'full path 2', 'http://www.gemstonebuzz.com/files/gemstone/pyrite-cube.jpg'),
((SELECT Id FROM Product WHERE name = 'Silver'), 'full path 3', 'http://www.gemstonebuzz.com/files/gemstone/pyrite-cube.jpg')


INSERT INTO Review(ProductId, body, author, stars)
VALUES
((SELECT Id FROM Product WHERE name = 'Deodecahedron'),'i love this product!','rmazza1@gmail.com' ,5),
((SELECT Id FROM Product WHERE name = 'Pyrite'),'i love this product!','rmazza1@gmail.com',4),
((SELECT Id FROM Product WHERE name = 'Silver'),'i love this product!','rmazza1@gmail.com',3)

Select * from image

DELETE FROM Image
WHERE Id = 11


SELECT * FROM product
INSERT INTO Image(ProductId, [full], thumb)
VALUES
((SELECT Id FROM Product WHERE name = 'Gold'), 'full path 3', 'http://kingofwallpapers.com/gold/gold-026.jpg') 

INSERT INTO Review(ProductId, stars, author,body)
VALUES
({0},{1},'{2}','{3}')
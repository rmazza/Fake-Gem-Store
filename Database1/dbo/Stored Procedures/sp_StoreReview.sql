CREATE PROCEDURE sp_StoreReview
(
	@productId INT,
	@reviewStars INT,
	@reviewAuthor NVARCHAR(500),
	@reviewBody NTEXT
)
AS

INSERT INTO 
	Review(ProductId, stars, author, body) 
VALUES 
	(@productId, @reviewStars, @reviewAuthor, @reviewBody)
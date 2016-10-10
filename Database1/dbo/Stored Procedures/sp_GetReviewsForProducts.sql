CREATE PROCEDURE sp_GetReviewsForProducts
(
	@productId int
)
AS

SELECT 
	id, 
	stars, 
	author, 
	body 
FROM 
	Review
WHERE 
	ProductId = @productId
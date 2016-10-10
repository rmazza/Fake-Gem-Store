CREATE PROCEDURE sp_GetImagesForProducts
(
	@productId int
)
AS

SELECT
	[full], 
	thumb 
FROM 
	[Image]
WHERE 
	ProductId = @productId
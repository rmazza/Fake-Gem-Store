CREATE PROCEDURE sp_GetImagesForProduct
(
	@productId int
)
AS

SELECT
	[full], 
	thumb 
FROM 
	Image 
WHERE ProductId = @productId
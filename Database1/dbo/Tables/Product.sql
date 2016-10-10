CREATE TABLE [dbo].[Product] (
    [Id]          INT           IDENTITY (1, 1) NOT NULL,
    [name]        NVARCHAR (40) NOT NULL,
    [canPurchase] BIT           NOT NULL,
    [soldOut]     BIT           NOT NULL,
    [description] NTEXT         NULL,
    [price]       MONEY         NOT NULL,
    [quantity]    INT           NOT NULL,
    PRIMARY KEY CLUSTERED ([Id] ASC)
);


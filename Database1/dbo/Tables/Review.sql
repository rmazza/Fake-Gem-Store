CREATE TABLE [dbo].[Review] (
    [Id]        INT            IDENTITY (1, 1) NOT NULL,
    [stars]     INT            NULL,
    [author]    NVARCHAR (500) NULL,
    [body]      NTEXT          NULL,
    [ProductId] INT            NOT NULL,
    CONSTRAINT [pk_Review] PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [fk_ReviewProduct] FOREIGN KEY ([ProductId]) REFERENCES [dbo].[Product] ([Id]) ON DELETE CASCADE
);


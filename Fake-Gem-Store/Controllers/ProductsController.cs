using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Web.Http;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    public class ProductsController : ApiController
    {

        public IEnumerable<ProductModel> Get()
        {
            List<ProductModel> model = new List<ProductModel>();

            using (SqlConnection connection = new SqlConnection(ConfigurationManager.ConnectionStrings["GemStore"].ConnectionString))
            {
                using (SqlConnection cn2 = new SqlConnection(ConfigurationManager.ConnectionStrings["GemStore"].ConnectionString))
                {
                    using(SqlConnection cn3 = new SqlConnection(ConfigurationManager.ConnectionStrings["GemStore"].ConnectionString))
                    { 

                        SqlCommand command = connection.CreateCommand();

                        command.CommandText = "sp_GetProducts";
                        command.CommandType = CommandType.StoredProcedure;

                        connection.Open();
                        cn2.Open();
                        cn3.Open();

                        using (SqlDataReader reader = command.ExecuteReader())
                        {
                            while (reader.Read())
                            {
                                ProductModel product = new ProductModel();
                                List<ImageModel> imageList = new List<ImageModel>();
                                List<ReviewModel> reviewList = new List<ReviewModel>();

                                //Id column of first record in database
                                product.id = reader.GetInt32(0);
                                product.name = reader.GetString(1);
                                product.canPurchase = reader.GetBoolean(2);
                                product.soldOut = reader.GetBoolean(3);
                                product.description = reader.GetString(4);
                                product.price = reader.GetDecimal(5);
                                product.quantity = reader.GetInt32(6);

                                SqlCommand imgCommand = cn2.CreateCommand();

                                imgCommand.CommandText = "sp_GetImagesForProducts";
                                imgCommand.CommandType = CommandType.StoredProcedure;
                                imgCommand.Parameters.AddWithValue("@productId", product.id);

                                using (SqlDataReader imgReader = imgCommand.ExecuteReader())
                                {
                                    while (imgReader.Read())
                                    {
                                        imageList.Add(new ImageModel { full = imgReader.GetString(0), thumb = imgReader.GetString(1) });
                                    }
                                    product.images = imageList;

                                }

                                SqlCommand reviewCommand = cn3.CreateCommand();

                                reviewCommand.CommandText = "sp_GetReviewsForProducts";
                                reviewCommand.CommandType = CommandType.StoredProcedure;
                                reviewCommand.Parameters.AddWithValue("@productId", product.id);

                                using (SqlDataReader reviewReader = reviewCommand.ExecuteReader())
                                {
                                    while (reviewReader.Read())
                                    {
                                        reviewList.Add(new ReviewModel { id = reviewReader.GetInt32(0), stars = reviewReader.GetInt32(1), author = reviewReader.GetString(2), body = reviewReader.GetString(3) });
                                    }

                                    product.reviews = reviewList;
                                }

                                model.Add(product);

                            }
                        }
                        cn3.Close();
                    }
                    cn2.Close();
                }
                connection.Close();
            }

            return model;
        }
    }
}

 


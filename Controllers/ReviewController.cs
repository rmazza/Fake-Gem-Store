using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    public class ReviewController : ApiController
    {
        public void Post([FromBody]ProductModel value)
        {
            using (SqlConnection connection = new SqlConnection(ConfigurationManager.ConnectionStrings["GemStore"].ConnectionString))
            {

                //imgCommand.CommandText = "sp_GetImagesForProducts";
                //imgCommand.CommandType = CommandType.StoredProcedure;
                //imgCommand.Parameters.AddWithValue("@productId", product.id);

                SqlCommand cmd = connection.CreateCommand();
                connection.Open();

                var newReview = value.reviews.First(x => x.id == 0);

                cmd.CommandText = "sp_StoreReview";
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@productId",value.id);
                cmd.Parameters.AddWithValue("@reviewStars", newReview.stars);
                cmd.Parameters.AddWithValue("@reviewAuthor", newReview.author);
                cmd.Parameters.AddWithValue("@reviewBody", newReview.body);

                cmd.ExecuteNonQuery();

                connection.Close();
            }
        }
    }
}

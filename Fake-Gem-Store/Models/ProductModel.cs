using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    public class ProductModel
    {
        public int id { get; set; }
        public string name { get; set; }
        public decimal price { get; set; }
        public string description { get;  set; }
        public bool canPurchase { get; set; }
        public bool soldOut { get; set; }
        public int? quantity { get; set; }
        public List<ImageModel> images { get; set; }
        public List<ReviewModel> reviews { get; set; }
    }
}
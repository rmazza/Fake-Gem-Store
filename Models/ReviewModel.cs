using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    public class ReviewModel
    {
        public int? id { get; set; }
        public int? stars { get; set; }
        public string body { get; set; }
        public string author { get; set; }
    }
}
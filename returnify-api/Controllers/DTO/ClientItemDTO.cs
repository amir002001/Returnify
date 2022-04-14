using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using returnify_api.Models.Entities;

namespace returnify_api.Controllers.DTO
{
    public class ClientItemDTO
    {

        public Retailer? Retailer {get; set;}
        public double? Total { get; set; }

        public DateTime? PurchaseDate { get; set; }

        public List<Item>? Items { get; set; }

    }
}
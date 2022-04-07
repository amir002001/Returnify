using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace returnify_api.Models.Entities
{
    public class Order
    {
        public Guid Id { get; set; }
        public Client Client { get; set; }
        public double Total { get; set; }
        public List<Item> Items { get; set; }
        public DateTime PurchaseDate { get; set; }
        public Retailer Retailer { get; set; }
    }
}
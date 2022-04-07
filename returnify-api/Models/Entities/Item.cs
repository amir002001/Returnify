using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace returnify_api.Models.Entities
{
    public class Item
    {
        public Guid Id { get; set; }
        public String Name { get; set; }

        public String SKU { get; set; }

        public int StyleNumber { get; set; }

        public DateTime ManufacturedDate { get; set; }

        public List<String> Images { get; set; }

        public double Price { get; set; }
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace returnify_api.Models.Entities
{
    public class Retailer
    {
        public Guid Id { get; set; }
        public String? Name { get; set; }
        public String? Location { get; set; }
        public String? RetailerType { get; set; }
        public List<Return>? Returns { get; set; }
        public String? RetailerLogo { get; set; }
    }
}
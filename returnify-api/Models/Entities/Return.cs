using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace returnify_api.Models.Entities
{
    public class Return
    {
        public Guid Id { get; set; }
        public Client Client { get; set; }
        public string Status { get; set; }
        public List<Item> Items { get; set; }
        public DateTime ReturnDate { get; set; }
        public DateTime ExpectedArrivalTime { get; set; }

        public String? DisputeReason { get; set; }
        public Driver Driver { get; set; }
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using returnify_api.Models.Entities;

namespace returnify_api.Controllers.DTO
{
    public class ReturnItemDTO
    {

        public Guid RetailerId { get; set; }
        public Guid ReturnId { get; set; }
        public string? Status { get; set; }
        public string? DisputeReason { get; set; }
        public DateTime? ReturnDate { get; set; }
        public DateTime? EstimatedTime { get; set; }
        public string? ClientName { get; set; }

        public List<Item>? Items { get; set; }
    }
}
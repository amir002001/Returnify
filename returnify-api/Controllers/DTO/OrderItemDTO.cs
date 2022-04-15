/**
* @author  Michael Wright
* @since   2022-04-14
*/

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using returnify_api.Models.Entities;

namespace returnify_api.Controllers.DTO
{
    /// <summary>
    /// This file is to create a DTO for a Client Order so that it can avoid cyclic dependencies
    /// </summary>
    public class OrderItemDTO
    {

        public Retailer? Retailer {get; set;}
        /// <param name="Retailer">
        /// property for the the retailer
        /// </param>

        public double? Total { get; set; }
        /// <param name="Total">
        /// property for the total of the order
        /// </param>

        public DateTime? PurchaseDate { get; set; }
        /// <param name="PurchaseDate">
        /// property for the purchase date of the order
        /// </param>

        public List<Item>? Items { get; set; }
        /// <param name="Items">
        /// property for the items list of the order
        /// </param>
    }
}
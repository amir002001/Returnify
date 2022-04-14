/**
* @author  Burhan Faquiri
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
    /// This file is to create a DTO for a return item/transaction so that it can avoid cyclic dependencies
    /// </summary>
    public class ReturnItemDTO
    {
        public Guid RetailerId { get; set; }
        /// <param name="RetailerId">
        /// property for the id of the retailer
        /// </param>

        public Guid ReturnId { get; set; }
        /// <param name="ReturnId">
        /// property for the id of the return transaction/item
        /// </param>
        public string? Status { get; set; }
        /// <param name="Status">
        /// property for the status of the return
        /// </param>
        public string? DisputeReason { get; set; }
        /// <param name="DisputeReason">
        /// property for the reason of a dispute for a return from the retailer, if it is entered that is sent to Returnify
        /// </param>
        public DateTime? ReturnDate { get; set; }
        /// <param name="ReturnDate">
        /// property for the date of the return
        /// </param>
        public DateTime? EstimatedTime { get; set; }
        /// <param name="EstimatedTime">
        /// property for the estimated time arrival of the return to the retailer
        /// </param>
        public string? ClientName { get; set; }
        /// <param name="ClientName">
        /// property for the id of the id of the client
        /// </param>
        public List<Item>? Items { get; set; }
        /// <param name="Items">
        /// property for the list of items in the return 
        /// </param>
    }
}
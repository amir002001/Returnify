/**
* @author  Burhan Faquiri
* @since   2022-04-1
*/
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace returnify_api.Models.Entities
{
    /// <summary>
    /// This file is to create a Return class that has its associated properties
    /// </summary>
    public class Return
    {
        public Guid Id { get; set; }
        /// <param name="Id">
        /// property for the id of the return
        /// </param>
        public Client? Client { get; set; }
        /// <param name="Client">
        /// property for the client that intiated the return
        /// </param>
        public string? Status { get; set; }
        /// <param name="Status">
        /// property for the status of the return
        /// </param>
        public List<Item>? Items { get; set; }
        /// <param name="Items">
        /// property for the items included in the return
        /// </param>
        public DateTime? ReturnDate { get; set; }
        /// <param name="ReturnDate">
        /// property for the date the return was made
        /// </param>
        public DateTime? ExpectedArrivalTime { get; set; }
        /// <param name="ExpectedArrivalTime">
        /// property for the date and time the return is expected to arrive at the retailer
        /// </param>

        public String? DisputeReason { get; set; }
        /// <param name="DisputeReason">
        /// property for the reason of a dispute for a return from the retailer, if it is entered that is sent to Returnify
        /// </param>
        public Driver? Driver { get; set; }
        /// <param name="Driver">
        /// property for the driver transporting the return to the retailer
        /// </param>
        public Retailer? Retailer { get; set; }
        /// <param name="Retailer">
        /// property for the retailer associated to the return
        /// </param>
    }
}
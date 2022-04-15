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
    /// This file is to create a class for Retailer and contains its field variables/properties
    /// </summary>
    public class Retailer
    {
        public Guid Id { get; set; }
        /// <param name="Id">
        /// property for the id of the retailer
        /// </param>
        public String? Name { get; set; }
        /// <param name="Name">
        /// property for the name of the retailer
        /// </param>
        public String? Location { get; set; }
        /// <param name="Location">
        /// property for the location of the retailer
        /// </param>
        public String? RetailerType { get; set; }
        /// <param name="RetailerType">
        /// property for the type of the retailer
        /// </param>
        public List<Return>? Returns { get; set; }
        /// <param name="Returns">
        /// property for a list of returns from the retailer
        /// </param>
        public String? RetailerLogo { get; set; }
        /// <param name="RetailerLogo">
        /// property for the logo of the retailer
        /// </param>
    }
}
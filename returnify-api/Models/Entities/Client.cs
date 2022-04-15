/**
* @author  Michael Wright
* @since   2022-04-1 
*/

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace returnify_api.Models.Entities
{
    /// <summary>
    /// This file is to create a Client class and properties
    /// </summary>
    public class Client
    {
        public Guid Id { get; set; }
        public List<Order>? Orders { get; set; }
        public List<Return>? Returns { get; set; }
        public string? Name { get; set; }
        public int? Age { get; set; }
        public string? Email { get; set; }
    }
}
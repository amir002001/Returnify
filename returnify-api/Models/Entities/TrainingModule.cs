/**
* @author  Amir Afshari
* @since   2022-04-1 
*/

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace returnify_api.Models.Entities
{
    /// <summary>
    /// An entity used for ORM
    /// </summary>
    public class TrainingModule
    {
        public Guid Id { get; set; }
        public Assessment? Assessment { get; set; }
        public string? ContentLink { get; set; }
        public Driver? Driver { get; set; }
        public bool IsComplete { get; set; }
    }
}
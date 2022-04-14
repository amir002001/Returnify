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
    public class Prompt
    {
        public Guid Id { get; set; }
        public string Text { get; set; }
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace returnify_api.Models.Entities
{
    public class Prompt
    {
        public Guid Id { get; set; }
        public string Text { get; set; }
    }
}
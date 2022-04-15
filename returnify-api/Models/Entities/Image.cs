using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace returnify_api.Models.Entities
{
    public class Image
    {
        public Guid Id { get; set; }
        public String? Path { get; set; }
    }
}
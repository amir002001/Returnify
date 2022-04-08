using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace returnify_api.Models.Entities
{
    public class Assessment
    {
        public Guid Id { get; set; }
        public List<Question>? Questions { get; set; }
        public double Score { get; set; }
    }
}   
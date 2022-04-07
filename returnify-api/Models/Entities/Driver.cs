using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace returnify_api.Models.Entities
{
    public class Driver
    {
        public Guid Id { get; set; }
        public String? Name { get; set; }
        public bool isVerified { get; set; }
        public List<Return>? Returns { get; set; }
        public List<TrainingModule>? TrainingModules { get; set; }
    }
}
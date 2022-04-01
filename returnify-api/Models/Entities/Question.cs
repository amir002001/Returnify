using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using returnify_api.Models.Entities.Enums;

namespace returnify_api.Models.Entities
{
    public class Question
    {
        public Guid Id { get; set; }
        public List<String>? Prompts { get; set; }
        public String? ImagePath { get; set; }
        public AnswerIndex answerIndex { get; set; }

    }
}
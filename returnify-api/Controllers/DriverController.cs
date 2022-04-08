using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using returnify_api.Models.Persistence;
using returnify_api.Models.Entities;
using Microsoft.EntityFrameworkCore;

namespace returnify_api.Controllers
{
    [Route("api/[controller]")]
    public class DriverController : Controller
    {
        private readonly DataContext _context;

        public DriverController(DataContext context)
        {
            _context = context;
        }


        [HttpGet("Assessment")]
        public IActionResult GetAllAssessments()
        {
            //TODO: Implement Realistic Implementation
            return Ok(_context.Assessments);
        }

        [HttpGet("Assessment/{id}")]
        public IActionResult GetAssessment(string id)
        {
            var assessment = _context.Assessments.Where(assessment => assessment.Id.Equals(new Guid(id))).Include(assessment => assessment.Questions);

            return Ok(assessment.First());
        }


        [HttpPost]
        async public Task<IActionResult> PostAssessmentResultsAsync([FromBody] Assessment _assessment)
        {
            _context.Assessments.Update(_assessment);
            await _context.SaveChangesAsync();
            return Created("", null);
        }


        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View("Error!");
        }


    }
}



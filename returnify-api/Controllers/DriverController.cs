using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using returnify_api.Models.Persistence;
using returnify_api.Models.Entities;
using returnify_api.Services;
using Microsoft.EntityFrameworkCore;

namespace returnify_api.Controllers
{
    [Route("api/[controller]")]
    public class DriverController : Controller
    {
        private readonly DriverService _driverService;

        public DriverController(DriverService driverService)
        {
            _driverService = driverService;
        }


        [HttpGet("Module")]
        public async Task<IActionResult> GetAllModulesAsync()
        {
            //TODO: Implement Realistic Implementation
            try
            {
                return Ok(await _driverService.RetrieveAllModulesFromDatabaseAsync());
            }
            catch (Exception e)
            {
                return BadReq
            }

        }

        [HttpGet("Module/{id}")]
        public async Task<IActionResult> GetModuleByIdAsync(string id)
        {
            TrainingModule trainingModule = await _driverService.RetrieveModuleByIdFromDatabaseAsync(id); // TODO null check ...
            return Ok(trainingModule);
        }

        [HttpGet("Assessment/{id}")]
        public async Task<IActionResult> GetAssessmentByIdAsync(string id)
        {
            Assessment assessment = await _driverService.RetrieveAssessmentByIdFromDatabaseAsync(id); // TODO null check ...
            return Ok(assessment);
        }

        [HttpPut("Assessment")]
        async public Task<IActionResult> PutAssessmentResultsAsync([FromBody] Assessment assessment)
        {
            await _driverService.UpdateAsessmentInDatabaseAsync(assessment);
            return Ok();
        }


        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View("Error!");
        }


    }
}



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
                return BadRequest(new
                {
                    Message = e.Message
                });
            }

        }

        [HttpGet("Module/{id}")]
        public async Task<IActionResult> GetModuleByIdAsync(string id)
        {

            try
            {
                TrainingModule trainingModule = await _driverService.RetrieveModuleByIdFromDatabaseAsync(id); // TODO null check better way? ...
                if (trainingModule is null)
                    return NotFound(new
                    {
                        Message = "Module was not found"
                    });
                return Ok(trainingModule);
            }
            catch (Exception e)
            {
                return BadRequest(new
                {
                    Message = e.Message
                });
            }
        }

        [HttpGet("Assessment/{id}")]
        public async Task<IActionResult> GetAssessmentByIdAsync(string id)
        {

            try
            {
                Assessment assessment = await _driverService.RetrieveAssessmentByIdFromDatabaseAsync(id); // TODO null check better? ...
                if (assessment is null)
                    return NotFound(new
                    {
                        Message = "Module was not found"
                    });
                return Ok(assessment);
            }
            catch (Exception e)
            {
                return BadRequest(new
                {
                    Message = e.Message
                });
            }
        }

        [HttpPut("Assessment/{id}")]
        async public Task<IActionResult> PutAssessmentResultsAsync(string id, [FromBody] Assessment assessment)
        {
            try
            {
                assessment.Id = new Guid(id);
                await _driverService.UpdateAsessmentInDatabaseAsync(assessment);
                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest(new
                {
                    Message = e.Message
                });
            }
        }


        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View("Error!");
        }


    }
}



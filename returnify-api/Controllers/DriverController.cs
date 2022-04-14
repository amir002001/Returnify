/**
* @author  Amir Afshari
* @since   2022-04-1 
*/

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
    /// <summary>
    /// This controller is responsible for all the API endpoints for the driver functional area.
    /// </summary>
    [Route("api/[controller]")]
    public class DriverController : Controller
    {
        private readonly DriverService _driverService;

        /// <param name="driverService">
        /// parameter for the service responsible for database access.
        /// </param>
        public DriverController(DriverService driverService)
        {
            _driverService = driverService;
        }

        /// <summary>
        /// gets all modules in an asynchronous fashion
        /// </summary>
        /// <returns>
        /// a list of TrainingModules
        /// </returns>
        [HttpGet("Module")]
        public async Task<IActionResult> GetAllModulesAsync()
        {
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
        /// <summary>
        /// gets a module by ID in an asynchronous fashion
        /// </summary>
        /// <returns>
        /// a TrainingModule based on passed ID
        /// </returns>
        /// <param name="id">Module ID parameter passed through the URL</param>

        [HttpGet("Module/{id}")]
        public async Task<IActionResult> GetModuleByIdAsync(string id)
        {

            try
            {
                TrainingModule? trainingModule = await _driverService.RetrieveModuleByIdFromDatabaseAsync(id); // TODO null check better way? ...
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
        /// <summary>
        /// gets an assessment by ID in an asynchronous fashion
        /// </summary>
        /// <returns>
        /// an ok status with an Assessment based on passed ID or a failed status code
        /// </returns>
        /// <param name="id">Assessment ID parameter passed through the URL</param>
        [HttpGet("Assessment/{id}")]
        public async Task<IActionResult> GetAssessmentByIdAsync(string id)
        {

            try
            {
                Assessment? assessment = await _driverService.RetrieveAssessmentByIdFromDatabaseAsync(id); // TODO null check better? ...
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

        /// <summary>
        /// updates an assessment by ID and score in an asynchronous fashion
        /// </summary>
        /// <returns>
        /// a status code
        /// </returns>
        /// <param name="id">Assessment ID parameter passed through the URL</param>
        /// <param name="assessment">parameter passed from request's JSON body</param>
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



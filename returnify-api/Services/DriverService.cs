/**
* @author  Amir Afshari
* @since   2022-04-1 
*/

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using returnify_api.Models.Persistence;
using returnify_api.Models.Entities;
using Microsoft.EntityFrameworkCore;

namespace returnify_api.Services
{
    /// <summary>
    /// This service is responsible for all database accesses for the driver functional area.
    /// </summary>
    public class DriverService
    {
        private readonly DataContext _context;
        /// <param name="context">
        /// object of type DataContext to be passed in order to let service communicate with DB.
        /// </param>
        public DriverService(DataContext context)
        {
            _context = context;
        }
        /// <summary>
        /// retrieves all modules in an asynchronous fashion
        /// </summary>
        /// <returns>
        /// a list of TrainingModule s
        /// </returns>
        public async Task<List<TrainingModule>> RetrieveAllModulesFromDatabaseAsync()
        {
            return await _context.TrainingModules.ToListAsync();
        }
        /// <summary>
        /// retrieves a module by ID in an asynchronous fashion
        /// </summary>
        /// <returns>
        /// a TrainingModule based on passed ID or null reference
        /// </returns>
        /// <param name="id">Module ID</param>
        public async Task<TrainingModule?> RetrieveModuleByIdFromDatabaseAsync(string id)
        {
            TrainingModule? trainingModule = await _context.TrainingModules.Where(module => module.Id.Equals(new Guid(id))).Include(module => module.Assessment).FirstOrDefaultAsync();

            return trainingModule;
        }
        /// <summary>
        /// gets an assessment by ID in an asynchronous fashion
        /// </summary>
        /// <returns>
        /// an assessment based on the ID, or a null reference.
        /// </returns>
        /// <param name="id">Assessment ID parameter</param>
        public async Task<Assessment?> RetrieveAssessmentByIdFromDatabaseAsync(string id)
        {
            Assessment? assessment = await _context.Assessments.Where(assessment => assessment.Id.Equals(new Guid(id))).Include(assessment => assessment.Questions!).ThenInclude(question => question.Prompts).FirstOrDefaultAsync();
            return assessment;
        }
        /// <summary>
        /// updates an assessment by entity in an asynchronous fashion
        /// </summary>
        /// <returns>
        /// a status integer
        /// </returns>
        /// <param name="assessment">an Assessment entity passed to be used for update</param>
        public async Task<int> UpdateAsessmentInDatabaseAsync(Assessment assessment)
        {
            _context.Assessments.Update(assessment);
            return await _context.SaveChangesAsync();
        }
    }
}
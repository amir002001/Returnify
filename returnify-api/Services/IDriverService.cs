using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using returnify_api.Models.Entities;
using returnify_api.Models.Persistence;

namespace returnify_api.Services
{
    public interface IDriverService
    {
        public Task<List<TrainingModule>> RetrieveAllModulesFromDatabaseAsync();
        /// <summary>
        /// retrieves a module by ID in an asynchronous fashion
        /// </summary>
        /// <returns>
        /// a TrainingModule based on passed ID or null reference
        /// </returns>
        /// <param name="id">Module ID</param>
        public Task<TrainingModule?> RetrieveModuleByIdFromDatabaseAsync(string id);
        /// <summary>
        /// gets an assessment by ID in an asynchronous fashion
        /// </summary>
        /// <returns>
        /// an assessment based on the ID, or a null reference.
        /// </returns>
        /// <param name="id">Assessment ID parameter</param>
        public Task<Assessment?> RetrieveAssessmentByIdFromDatabaseAsync(string id);
        /// <summary>
        /// updates an assessment by entity in an asynchronous fashion
        /// </summary>
        /// <returns>
        /// a status integer
        /// </returns>
        /// <param name="assessment">an Assessment entity passed to be used for update</param>
        public Task<int> UpdateAsessmentInDatabaseAsync(Assessment assessment);
    }
}
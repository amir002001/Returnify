using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using returnify_api.Models.Persistence;
using returnify_api.Models.Entities;
using Microsoft.EntityFrameworkCore;

namespace returnify_api.Services
{
    public class DriverService
    {
        private readonly DataContext _context;
        public DriverService(DataContext context)
        {
            _context = context;
        }

        public async Task<List<TrainingModule>> RetrieveAllModulesFromDatabaseAsync()
        {
            return await _context.TrainingModules.ToListAsync();
        }

        public async Task<TrainingModule?> RetrieveModuleByIdFromDatabaseAsync(string id)
        {
            TrainingModule? trainingModule = await _context.TrainingModules.Where(module => module.Id.Equals(new Guid(id))).Include(module => module.Assessment).FirstOrDefaultAsync();

            return trainingModule;
        }
        public async Task<Assessment?> RetrieveAssessmentByIdFromDatabaseAsync(string id)
        {
            Assessment? assessment = await _context.Assessments.Where(assessment => assessment.Id.Equals(new Guid(id))).FirstOrDefaultAsync();
            return assessment;
        }
        public async Task<int> UpdateAsessmentInDatabaseAsync(Assessment assessment)
        {
            _context.Assessments.Update(assessment);
            return await _context.SaveChangesAsync();
        }
    }
}
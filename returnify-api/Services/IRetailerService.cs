using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using returnify_api.Models.Entities;

namespace returnify_api.Services
{
    public interface IRetailerService
    {
         public Task<List<Return>> GetAllReturnsFromDb(string retailerId);

        public Task<Return> GetReturnsByReturnIdFromDb(string returnId);

        public Task<Return> UpdateReturnStatusFromDb(string returnId, string returnStatus);
        public Task<Item> GetItemByIdFromDb(string itemId);
        public Task<Return> UpdateDisputeReasonFromDb(string returnId, string userDisputeReason);

    }
}
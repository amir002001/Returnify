/**
* @author  Burhan Faquiri
* @since   2022-04-14
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
    /// This file is to create a RetailerService which inherits from the interface and defines the implementation of database operations
    /// </summary>
    public class RetailerService : IRetailerService
    {
        private readonly DataContext _context;
        /// <param name="context">
        /// object of type DataContext to be passed in order to let service communicate with DB.
        /// </param>
        public RetailerService(DataContext context)
        {
            _context = context;
        }

        /// <summary>
        /// gets all users that have a return from a retailer's id from the database asynchronously
        /// </summary>
        /// <returns>
        /// a a list of returns
        /// </returns>
        /// <param name="retailerId">Retailer ID parameter passed through the URL</param>
        public async Task<List<Return>> GetAllReturnsFromDb(string retailerId)
        {
            var retailer = await _context.Retailers.Include(r => r.Returns).ThenInclude(c => c.Client).ThenInclude(o => o.Orders).ThenInclude(i => i.Items).Where(r => r.Id.Equals(new Guid(retailerId))).FirstAsync();
            var allReturns = retailer.Returns;

            return allReturns;
        }

        /// <summary>
        /// get a specfic return item/transaction by id of the return from the database asynchronously
        /// </summary>
        /// <returns>
        /// an object of Return
        /// </returns>
        /// <param name="returnId">Return ID parameter passed through the URL</param>
        public async Task<Return> GetReturnsByReturnIdFromDb(string returnId)
        {
            var returnDetail = await _context.Returns.Include(c => c.Client).ThenInclude(o => o.Orders)
            .Include(c => c.Client).ThenInclude(c => c.Returns).ThenInclude(i => i.Items).ThenInclude(i => i.Images).Where(r => r.Id.Equals(new Guid(returnId))).FirstAsync();

            return returnDetail;
        }

        /// <summary>
        /// update a return status by making confirming the return by setting it to "Arrived" into the database asynchronously
        /// </summary>
        /// <returns>
        /// an integer which is 1 signifying the database update was a success
        /// </returns>
        /// <param name="returnId">Return ID parameter passed through the URL</param>
        /// <param name="returnStatus">Status of new return parameter passed through the URL</param>
        public async Task<int> UpdateReturnStatusFromDb(string returnId, string returnStatus)
        {
            var returnObject = await _context.Returns.Include(c => c.Client).ThenInclude(o => o.Orders).ThenInclude(i => i.Items).ThenInclude(i => i.Images).Where(r => r.Id.Equals(new Guid(returnId))).FirstAsync();
            returnObject.Status = returnStatus;

            return await _context.SaveChangesAsync();
        }

        /// <summary>
        /// get details of a specfic product items from the database asynchronously
        /// </summary>
        /// <returns>
        /// an object of the item
        /// </returns>
        /// <param name="itemId">Item ID parameter passed through the URL</param>
        public async Task<Item> GetItemByIdFromDb(string itemId)
        {
            var item = await _context.Items.Include(i => i.Images).FirstOrDefaultAsync(i => i.Id.Equals(new Guid(itemId)));

            return item;
        }

        /// <summary>
        /// make a dispute of a return by providing a value to the dispute property of a return into the database asynchronously
        /// </summary>
        /// <returns>
        /// an integer which is 1 signifying the database update was a success
        /// </returns>
        /// <param name="returnId">Return ID parameter passed through the URL</param>
        /// <param name="userDisputeReason">dispute reason from the retailer parameter passed through the URL</param>
        public async Task<int> UpdateDisputeReasonFromDb(string returnId, string userDisputeReason)
        {
            var returnObject = await _context.Returns.Include(c => c.Client).ThenInclude(o => o.Orders).ThenInclude(i => i.Items).ThenInclude(i => i.Images).Include(i => i.Items).Where(r => r.Id.Equals(new Guid(returnId))).FirstAsync();
            returnObject.DisputeReason = userDisputeReason;

            return await _context.SaveChangesAsync();
        }


    }
}
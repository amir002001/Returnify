using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using returnify_api.Models.Persistence;
using returnify_api.Models.Entities;
using Microsoft.EntityFrameworkCore;

namespace returnify_api.Services
{
    //Authored by Burhan
    public class RetailerService
    {
        private readonly DataContext _context;
        public RetailerService(DataContext context)
        {
            _context = context;
        }

        //GET all users that have a return from a retailer by calling the RETURN getAllReturns
        public async Task<List<Return>> GetAllReturnsFromDb(string retailerId)
        {
            var retailer = await _context.Retailers.Include(r => r.Returns).ThenInclude(c => c.Client).ThenInclude(o => o.Orders).ThenInclude(i => i.Items).Where(r => r.Id.Equals(new Guid(retailerId))).FirstAsync();
            var allReturns = retailer.Returns;

            return allReturns;
        }

        //GET a specfic user that has a return by calling the RETURN getReturnById
        public async Task<Return> GetReturnsByReturnIdFromDb(string returnId)
        {
            var returnDetail = await _context.Returns.Include(c => c.Client).ThenInclude(o => o.Orders)
            .Include(c => c.Client).ThenInclude(c => c.Returns).ThenInclude(i => i.Items).ThenInclude(i => i.Images).Where(r => r.Id.Equals(new Guid(returnId))).FirstAsync();

            return returnDetail;
        }

        //UPDATE a RETURN by making confirm return  = true updateReturnConfirmation
        public async Task<Return> UpdateReturnStatusFromDb(string returnId, string returnStatus)
        {
            var returnObject = await _context.Returns.Include(c => c.Client).ThenInclude(o => o.Orders).ThenInclude(i => i.Items).ThenInclude(i => i.Images).Where(r => r.Id.Equals(new Guid(returnId))).FirstAsync();
            returnObject.Status = returnStatus;

            await _context.SaveChangesAsync();

            return returnObject;
        }

        //GET details of an ITEM getItemById
        public async Task<Item> GetItemByIdFromDb(string itemId)
        {
            var item = await _context.Items.Include(i => i.Images).FirstOrDefaultAsync(i => i.Id.Equals(new Guid(itemId)));

            return item;
        }

        //POST/UPDATE a dispute of a return
        public async Task<Return> UpdateDisputeReasonFromDb(string returnId, string userDisputeReason)
        {
            var returnObject = await _context.Returns.Include(c => c.Client).ThenInclude(o => o.Orders).ThenInclude(i => i.Items).ThenInclude(i => i.Images).Include(i => i.Items).Where(r => r.Id.Equals(new Guid(returnId))).FirstAsync();
            returnObject.DisputeReason = userDisputeReason;

            await _context.SaveChangesAsync();

            return returnObject;
        }


    }
}
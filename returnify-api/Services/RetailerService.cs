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
        public List<Return> GetAllReturnsFromDb(string retailerId)
        {
            var retailer = _context.Retailers.Include(r => r.Returns).ThenInclude(c => c.Client).ThenInclude(o => o.Orders).ThenInclude(i => i.Items).Where(r => r.Id.Equals(new Guid(retailerId))).First();
            var allReturns = retailer.Returns;

            return allReturns;
        }

        //GET a specfic user that has a return by calling the RETURN getReturnById
        public Return GetReturnsByReturnIdFromDb(string returnId)
        {
            var returnDetail = _context.Returns.Include(c => c.Client).ThenInclude(o => o.Orders).ThenInclude(i => i.Items).Where(r => r.Id.Equals(new Guid(returnId))).First();

            return returnDetail;
        }

        //UPDATE a RETURN by making confirm return  = true updateReturnConfirmation
        public Return UpdateReturnStatusFromDb(string returnId, string returnStatus)
        {
            var returnObject = _context.Returns.Include(c => c.Client).ThenInclude(o => o.Orders).ThenInclude(i => i.Items).Where(r => r.Id.Equals(new Guid(returnId))).First();
            returnObject.Status = returnStatus;

            _context.SaveChanges();

            return returnObject;
        }

        //GET details of an ITEM getItemById
        public Item GetItemByIdFromDb(string itemId)
        {
            var item = _context.Items.Include(i => i.Images).FirstOrDefault(i => i.Id.Equals(new Guid(itemId)));

            return item;
        }

        //POST/UPDATE a dispute of a return
        public Return UpdateDisputeReasonFromDb(string returnId, string userDisputeReason)
        {
            var returnObject = _context.Returns.Include(c => c.Client).ThenInclude(o => o.Orders).ThenInclude(i => i.Items).Where(r => r.Id.Equals(new Guid(returnId))).First();
            returnObject.DisputeReason = userDisputeReason;

            _context.SaveChanges();

            return returnObject;
        }


    }
}
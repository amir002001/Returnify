using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using returnify_api.Models.Persistence;
using returnify_api.Models.Entities;
using Microsoft.EntityFrameworkCore;


namespace returnify_api.Services
{
    public class ClientService:IClientService
    {

        private readonly DataContext _context;
        public ClientService(DataContext context)
        {
            _context = context;
        }

        public async Task<List<Order>> GetAllClientOrdersFromDb(string clientId)
        {
            var loggedInUser = await _context.Clients.Where(u => u.Id.Equals(new Guid(clientId)))
                    .Include(u => u.Orders).ThenInclude(o => o.Items).ThenInclude(i => i.Images)
                    .Include(u => u.Orders).ThenInclude(o => o.Retailer).FirstAsync();
            var orders = loggedInUser.Orders.Where(o => o.Client.Id.Equals(new Guid(clientId))).ToList();
            return orders;
            
            //return await _context.TrainingModules.ToListAsync();

        }

        public async Task<Order> GetOrderByIdFromDb(string orderId)
        {
            return await _context.Orders
                .Include(i => i.Items)
                .Include(o => o.Client)
                .Include(o => o.Retailer)
                .FirstOrDefaultAsync(i => i.Id.Equals(new Guid(orderId)));
        }

        public async Task<List<Order>> GetOrdersByFilterFromDb(DateTime date, string userId, double startRange = 0, double endRange = 10000000, string storeName = "HM")
        {
            var loggedInUser = await _context.Clients.Where(u => u.Id.Equals(new Guid(userId)))
                    .Include(u => u.Orders).ThenInclude(o => o.Items).ThenInclude(i => i.Images)
                    .Include(u => u.Orders).ThenInclude(o => o.Retailer).FirstAsync();
            var priceFilter = loggedInUser.Orders.Where(o => o.Total > startRange && o.Total < endRange).ToList();
            var storeFilter = priceFilter.Where(o => o.Retailer.Name.Equals(storeName)).ToList();
            var dateFilter = storeFilter.Where(o => o.PurchaseDate.Equals(date)).ToList();
            return dateFilter;
        }
    }
}
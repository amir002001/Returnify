using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using returnify_api.Models.Persistence;
using returnify_api.Models.Entities;
using Microsoft.EntityFrameworkCore;
namespace returnify_api.Services
{
    public class ClientService
    {

        private readonly DataContext _context;
        public ClientService(DataContext context)
        {
            _context = context;
        }

        public List<Order> GetAllClientOrdersFromDb(string userId){

            var loggedInUser = _context.Clients.FirstOrDefault(u => u.Id.Equals(new Guid(userId)));
            var orders = loggedInUser.Orders.Where(o => o.Client.Id.Equals(new Guid(userId))).ToList();
            return orders;
        }
        

        public Order GetOrderByIdFromDb(string orderId){

            return _context.Orders.Include(i => i.Items).FirstOrDefault(i => i.Id.Equals(new Guid(orderId)));
        }


        public List<Order> GetOrdersByFilterFromDb(double startRange, double endRange, string storeName, DateTime date, string userId){

            var loggedInUser = _context.Clients.Where(u => u.Id.Equals(new Guid(userId))).Include(u => u.Orders).ThenInclude(o => o.Items).First();
            var priceFilter = loggedInUser.Orders.Where(o => o.Total > startRange && o.Total > endRange);
            var storeFilter = priceFilter.Where(o => o.Retailer.Name.Equals(storeName));
            var dateFilter = storeFilter.Where(o => o.PurchaseDate.Equals(date)).ToList();
            return dateFilter;
        }

    }
}
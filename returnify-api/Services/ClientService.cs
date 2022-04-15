/**
* @author  Michael Wright
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
    /// This file is to create a ClientService which inherits from the interface and defines the implementation of database operations
    /// </summary>
    public class ClientService:IClientService
    {

        private readonly DataContext _context;
        /// <param name="context">
        /// object of type DataContext to be passed in order to let service communicate with DB.
        /// </param>
        public ClientService(DataContext context)
        {
            _context = context;
        }

        /// <summary>
        /// gets all orders that are associated with a particular client id from the database asynchronously
        /// </summary>
        /// <returns>
        /// a list of orders
        /// </returns>
        /// <param name="clientId">Client ID parameter passed through the URL</param>
        public async Task<List<Order>> GetAllClientOrdersFromDb(string clientId)
        {
            var loggedInUser = await _context.Clients.Where(u => u.Id.Equals(new Guid(clientId)))
                    .Include(u => u.Orders).ThenInclude(o => o.Items).ThenInclude(i => i.Images)
                    .Include(u => u.Orders).ThenInclude(o => o.Retailer).FirstAsync();
            var orders = loggedInUser.Orders.Where(o => o.Client.Id.Equals(new Guid(clientId))).ToList();
            return orders;
        }

        /// <summary>
        /// gets an order with a particular order id from the database asynchronously
        /// </summary>
        /// <returns>
        /// an order
        /// </returns>
        /// <param name="orderId">order ID parameter passed through the URL</param>
        public async Task<Order> GetOrderByIdFromDb(string orderId)
        {
            return await _context.Orders
                .Include(i => i.Items)
                .Include(o => o.Client)
                .Include(o => o.Retailer)
                .FirstOrDefaultAsync(i => i.Id.Equals(new Guid(orderId)));
        }

        /// <summary>
        /// gets all orders that are associated with a particular client id that match the specified criteria from the database asynchronously
        /// </summary>
        /// <returns>
        /// a list of orders
        /// </returns>
        /// <param name="startRange">min range of the price filter passed through the URL</param>
        /// <param name="endRange">max range of the price filter passed through the URL</param>
        /// <param name="storeName">name of the store for filter passed through the URL</param>
        /// <param name="date">the date of the order for filter passed through the URL</param>
        /// <param name="userId">User ID parameter passed through the URL</param>
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
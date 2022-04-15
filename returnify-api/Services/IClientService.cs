/**
* @author  Michael Wright
* @since   2022-04-14
*/

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using returnify_api.Models.Entities;

namespace returnify_api.Services
{
     /// <summary>
    /// This file is to create an interface for the Client Service to perform operations with the database
    /// </summary>
    public interface IClientService
    {

        /// <summary>
        /// gets all orders that are associated with a particular client id from the database asynchronously
        /// </summary>
        /// <returns>
        /// a list of orders
        /// </returns>
        /// <param name="clientId">Client ID parameter passed through the URL</param>
        public Task<List<Order>> GetAllClientOrdersFromDb(string clientId);
        
        /// <summary>
        /// gets an order with a particular order id from the database asynchronously
        /// </summary>
        /// <returns>
        /// an order
        /// </returns>
        /// <param name="orderId">order ID parameter passed through the URL</param>
        public Task<Order> GetOrderByIdFromDb(string orderId);
        
        
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
        public Task<List<Order>> GetOrdersByFilterFromDb(DateTime date, string userId, double startRange = 0, double endRange = 10000000, string storeName = "HM");
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using returnify_api.Models.Entities;

namespace returnify_api.Services
{
    public interface IClientService
    {
        public Task<List<Order>> GetAllClientOrdersFromDb(string clientId);
        public Task<Order> GetOrderByIdFromDb(string orderId);
        public Task<List<Order>> GetOrdersByFilterFromDb(DateTime date, string userId, double startRange = 0, double endRange = 10000000, string storeName = "HM");
    }
}
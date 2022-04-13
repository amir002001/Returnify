using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using returnify_api.Models.Persistence;
using returnify_api.Services;
using returnify_api.Models.Entities;
using Microsoft.EntityFrameworkCore;

namespace returnify_api.Controllers
{
    [Route("api/[controller]")]
    public class ClientController : Controller
    {
        // private readonly DataContext _context;

        // public ClientController(DataContext context)
        // {
        //     _context = context;
        // }

        private readonly ClientService _clientService;

        public ClientController(ClientService clientService)
        {
            _clientService = clientService;
        }

        

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View("Error!");
        }
        

        //Get ALL orders of a specific user
        [HttpGet("getAllClientOrders")]
        public IActionResult GetAllClientOrders(string clientId)
        {

            try{
                return Ok(_clientService.GetAllClientOrdersFromDb(clientId));
            }
            catch (System.Exception)
            {
                return BadRequest($"An error has occured retrieving all returns for the client {clientId}");
            }

            // var loggedInUser = _context.Clients.FirstOrDefault(u => u.Id.Equals(new Guid(userId)));
            // var orders = loggedInUser.Orders.Where(o => o.Client.Id.Equals(new Guid(userId)));
            // return Ok(orders);   
        }

        //get order by id
        [HttpGet("getClientOrderById/{id}")]
        public async Task<IActionResult> GetOrderById(string id)
        {
            //TODO: try catch
            try{
                return Ok(_clientService.GetOrderByIdFromDb(id));
            }
            catch (System.Exception)
            {
                return BadRequest($"An error has occured retrieving the return with the id {id}");
            }
        }


        [HttpGet("getOrdersByFilter")]
        public async Task<IActionResult> GetOrderByFilter(double startRange, double endRange, string storeName, DateTime date, string userId)
        {
            try{
                return Ok(_clientService.GetOrdersByFilterFromDb(startRange, endRange, storeName, date, userId));
            }
            catch (System.Exception)
            {
                return BadRequest($"An error has occured filtering orders for user with the id {userId}");
            }

            //TODO: try catch
            // var loggedInUser = _context.Clients.Where(u => u.Id.Equals(new Guid(userId))).Include(u => u.Orders).ThenInclude(o => o.Items).First();
            // var orders = loggedInUser.Orders.Where(o => o.Total > startRange && o.Total > endRange);
            // return Ok(orders);
        }


        // //Get order within a price range
        // [HttpGet("getOrderByPriceRange")]
        // public async Task<IActionResult> GetOrderByPriceRange(double startRange, double endRange, string userId)
        // {
        //     //TODO: try catch
        //     var loggedInUser = _context.Clients.Where(u => u.Id.Equals(new Guid(userId))).Include(u => u.Orders).ThenInclude(o => o.Items).First();
        //     var orders = loggedInUser.Orders.Where(o => o.Total > startRange && o.Total > endRange);
        //     return Ok(orders);
        // }

        // //Get order based on store
        // [HttpGet("getOrderByStoreName")]
        // public async Task<IActionResult> GetOrderByStoreName(string store, string userId)
        // {
        //     //TODO: try catch
        //     var loggedInUser = _context.Clients.Where(u => u.Id.Equals(new Guid(userId))).Include(u => u.Orders).ThenInclude(o => o.Items).First();
        //     var order = loggedInUser.Orders.Where(o => o.Retailer.Name.Equals(store));
        //     return Ok(order);
        // }


        // //get order based on date
        // [HttpGet("getOrderByDate")]
        // public async Task<IActionResult> GetOrderByDate(DateTime date, string userId)
        // {
        //     //TODO: try catch
        //     var loggedInUser = _context.Clients.Where(u => u.Id.Equals(new Guid(userId))).Include(u => u.Orders).ThenInclude(o => o.Items).First();
        //     var order = _context.Orders.Include(i => i.Items).Where(o => o.PurchaseDate.Equals(date));
        //     return Ok(order);
        // }

    }
}
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

        private readonly ClientService _clientService;

        public ClientController(ClientService clientService)
        {
            _clientService = clientService;
        }

        


        //Get ALL orders of a specific user
        [HttpGet("getAllClientOrders/{clientId}")]
        public async Task<IActionResult> GetAllClientOrders(string clientId)
        {
            // try
            // {
            var serviceResult = await _clientService.GetAllClientOrdersFromDb(clientId);
            return Ok(serviceResult.Select(c => new { Retailer = c.Retailer, Total = c.Total, PurchaseDate = c.PurchaseDate, Items = c.Items}));
            // }
            // catch (System.Exception)
            // {
            //     return BadRequest($"An error has occured retrieving all returns for the client {clientId}");
            // }
        }

        //get order by id
        // [HttpGet("getClientOrderById/{id}")]
        // public async Task<IActionResult> GetOrderById(string id)
        // {
        //     //TODO: try catch
        //     // try
        //     // {
        //     var serviceResult = await _clientService.GetOrderByIdFromDb(id);
        //     return Ok(return new { Retailer = serviceResult.Retailer.Name, Total = serviceResult.Total, PurchaseDate = serviceResult.PurchaseDate, Items = serviceResult.Items});
        //     // }
        //     // catch (System.Exception)
        //     // {
        //     //     return BadRequest($"An error has occured retrieving the return with the id {id}");
        //     // }
        // }


        [HttpGet("getOrdersByFilter/{userId}")]
        public async Task<IActionResult> GetOrderByFilter([FromQuery] double startRange,[FromQuery] double endRange,[FromQuery] string storeName,[FromQuery] string date, string userId)
        {
            try
            {
                DateTime oDate = Convert.ToDateTime(date);
                var serviceResult = await _clientService.GetOrdersByFilterFromDb(oDate, userId, startRange, endRange, storeName);
                return Ok(serviceResult.Select(c => new { Retailer = c.Retailer, Total = c.Total, PurchaseDate = c.PurchaseDate, Items = c.Items}));
                //return Ok(await _clientService.GetOrdersByFilterFromDb(startRange, endRange, storeName, oDate, userId));
            }
            catch (System.Exception)
            {
                return BadRequest($"An error has occured filtering orders for user with the id {userId}");
            }


        }

    }
}
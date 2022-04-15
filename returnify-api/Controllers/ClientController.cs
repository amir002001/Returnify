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
using returnify_api.Controllers.DTO;

namespace returnify_api.Controllers
{
    [Route("api/[controller]")]
    public class ClientController : Controller
    {

        private readonly IClientService _clientService;

        public ClientController(IClientService clientService)
        {
            _clientService = clientService;
        }

        //Get ALL orders of a specific user
        [HttpGet("getAllClientOrders/{clientId}")]
        public async Task<IActionResult> GetAllClientOrders(string clientId)
        {
            try
            {
            var serviceResult = await _clientService.GetAllClientOrdersFromDb(clientId);
            return Ok(serviceResult.Select(c => new ClientItemDTO { Retailer = c.Retailer, Total = c.Total, PurchaseDate = c.PurchaseDate, Items = c.Items}).ToList());
            }
            catch (System.Exception)
            {
                return BadRequest($"An error has occured retrieving all returns for the client {clientId}");
            }
        }

        //get order by id
        [HttpGet("getClientOrderById/{id}")]
        public async Task<IActionResult> GetClientOrderById(string id)
        {
            try
            {
            var serviceResult = await _clientService.GetOrderByIdFromDb(id);
            return Ok(new ClientItemDTO { Retailer = serviceResult.Retailer, Total = serviceResult.Total, PurchaseDate = serviceResult.PurchaseDate, Items = serviceResult.Items});
            }
            catch (System.Exception)
            {
                return BadRequest($"An error has occured retrieving the return with the id {id}");
            }
        }


        [HttpGet("getOrdersByFilter/{userId}")]
        public async Task<IActionResult> GetOrderByFilter([FromQuery] double startRange,[FromQuery] double endRange,[FromQuery] string storeName,[FromQuery] string date, string userId)
        {
            // try
            // {
                DateTime oDate = Convert.ToDateTime(date);
                var serviceResult = await _clientService.GetOrdersByFilterFromDb(oDate, userId, startRange, endRange, storeName);
                return Ok(serviceResult.Select(c => new ClientItemDTO { Retailer = c.Retailer, Total = c.Total, PurchaseDate = c.PurchaseDate, Items = c.Items}).ToList());
                //return Ok(await _clientService.GetOrdersByFilterFromDb(startRange, endRange, storeName, oDate, userId));
            // }
            // catch (System.Exception)
            // {
            //     return BadRequest($"An error has occured filtering orders for user with the id {userId}");
            // }
        }
    }
}
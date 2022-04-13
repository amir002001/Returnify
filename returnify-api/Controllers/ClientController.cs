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
        public async Task<IActionResult> GetAllClientOrders(string clientId)
        {
            try
            {
                return Ok(await _clientService.GetAllClientOrdersFromDb(clientId));
            }
            catch (System.Exception)
            {
                return BadRequest($"An error has occured retrieving all returns for the client {clientId}");
            }
        }

        //get order by id
        [HttpGet("getClientOrderById/{id}")]
        public async Task<IActionResult> GetOrderById(string id)
        {
            //TODO: try catch
            try
            {
                return Ok(await _clientService.GetOrderByIdFromDb(id));
            }
            catch (System.Exception)
            {
                return BadRequest($"An error has occured retrieving the return with the id {id}");
            }
        }


        [HttpGet("getOrdersByFilter")]
        public async Task<IActionResult> GetOrderByFilter(double startRange, double endRange, string storeName, DateTime date, string userId)
        {
            try
            {
                return Ok(await _clientService.GetOrdersByFilterFromDb(startRange, endRange, storeName, date, userId));
            }
            catch (System.Exception)
            {
                return BadRequest($"An error has occured filtering orders for user with the id {userId}");
            }


        }

    }
}
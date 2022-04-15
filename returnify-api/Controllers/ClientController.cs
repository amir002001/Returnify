/**
* @author  Michael Wright
* @since   2022-04-1
*/


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
    /// <summary>
    /// This controller is responsible for all the API endpoints for the client functional area.
    /// </summary>
    [Route("api/[controller]")]
    public class ClientController : Controller
    {

        private readonly IClientService _clientService;
        /// <param name="clientService">
        /// parameter for the service responsible for database access.
        /// </param>

        public ClientController(IClientService clientService)
        {
            _clientService = clientService;
        }

        //Get ALL orders of a specific user


        /// <summary>
        /// gets all orders of a client based on the client's id
        /// </summary>
        /// <returns>
        /// an ok status with a list of OrderItemDTOs
        /// </returns>
        /// <param name="clientId">Client ID parameter passed through the URL</param>
        [HttpGet("getAllClientOrders/{clientId}")]
        public async Task<IActionResult> GetAllClientOrders(string clientId)
        {
            try
            {
            var serviceResult = await _clientService.GetAllClientOrdersFromDb(clientId);
            return Ok(serviceResult.Select(c => new OrderItemDTO { Retailer = c.Retailer, Total = c.Total, PurchaseDate = c.PurchaseDate, Items = c.Items}).ToList());
            }
            catch (System.Exception)
            {
                return BadRequest($"An error has occured retrieving all returns for the client {clientId}");
            }
        }

        //get order by id

        /// <summary>
        /// get a specfic order by id of the order
        /// </summary>
        /// <returns>
        /// an ok status with a an object of OrderItemDTO
        /// </returns>
        /// <param name="id">Order ID parameter passed through the URL</param>
        [HttpGet("getClientOrderById/{id}")]
        public async Task<IActionResult> GetClientOrderById(string id)
        {
            try
            {
            var serviceResult = await _clientService.GetOrderByIdFromDb(id);
            return Ok(new OrderItemDTO { Retailer = serviceResult.Retailer, Total = serviceResult.Total, PurchaseDate = serviceResult.PurchaseDate, Items = serviceResult.Items});
            }
            catch (System.Exception)
            {
                return BadRequest($"An error has occured retrieving the return with the id {id}");
            }
        }


        /// <summary>
        /// get all orders from a user based on the user id that match filtering criteria
        /// </summary>
        /// <returns>
        /// an ok status with a list of OrderItemDTOs
        /// </returns>
        /// <param name="startRange">min range of the price filter passed through the URL</param>
        /// <param name="endRange">max range of the price filter passed through the URL</param>
        /// <param name="storeName">name of the store for filter passed through the URL</param>
        /// <param name="date">the date of the order for filter passed through the URL</param>
        /// <param name="userId">User ID parameter passed through the URL</param>
        [HttpGet("getOrdersByFilter/{userId}")]
        public async Task<IActionResult> GetOrderByFilter([FromQuery] double startRange,[FromQuery] double endRange,[FromQuery] string storeName,[FromQuery] string date, string userId)
        {
            try
            {
                DateTime oDate = Convert.ToDateTime(date);
                var serviceResult = await _clientService.GetOrdersByFilterFromDb(oDate, userId, startRange, endRange, storeName);
                return Ok(serviceResult.Select(c => new OrderItemDTO { Retailer = c.Retailer, Total = c.Total, PurchaseDate = c.PurchaseDate, Items = c.Items}).ToList());
            }
            catch (System.Exception)
            {
                return BadRequest($"An error has occured filtering orders for user with the id {userId}");
            }
        }
    }
}
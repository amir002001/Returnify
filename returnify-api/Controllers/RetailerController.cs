/**
* @author  Burhan Faquiri
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
using Microsoft.EntityFrameworkCore;
using returnify_api.Controllers.DTO;

namespace returnify_api.Controllers
{
    /// <summary>
    /// This file is to create a controller for managing the routes and data for the retailer pages
    /// </summary>
    [Route("api/[controller]")]
    public class RetailerController : Controller
    {

        private readonly IRetailerService _retailerService;
        /// <param name="retailerService">
        /// parameter for the service responsible for database access.
        /// </param>

        public RetailerController(IRetailerService retailerService)
        {
            _retailerService = retailerService;
        }



        /// <summary>
        /// gets all users that have a return from a retailer's id
        /// </summary>
        /// <returns>
        /// an ok status with a list of ReturnItemDTOs
        /// </returns>
        /// <param name="retailerId">Retailer ID parameter passed through the URL</param>
        [HttpGet("getAllReturns/{retailerId}")]
        public async Task<IActionResult> GetAllReturns(string retailerId)
        {
            try
            {
                var serviceResult = await _retailerService.GetAllReturnsFromDb(retailerId);

                //convert the return list to a DTO
                var returnList = serviceResult.Select(r => new ReturnItemDTO { Items = r.Items, ClientName = r.Client.Name, Status = r.Status, ReturnDate = r.ReturnDate, DisputeReason = r.DisputeReason, RetailerId = r.Retailer.Id, ReturnId = r.Id }).ToList();

                return Ok(returnList);
            }
            catch (System.Exception)
            {
                return BadRequest($"An error has occured retrieving all returns for the retailer ID {retailerId}");
            }

        }


        /// <summary>
        /// get a specfic return item/transaction by id of the return
        /// </summary>
        /// <returns>
        /// an ok status with a an object of ReturnItemDTO
        /// </returns>
        /// <param name="returnId">Return ID parameter passed through the URL</param>
        [HttpGet("getReturnsByReturnId/{returnId}")]
        public async Task<IActionResult> GetReturnsByReturnId(string returnId)
        {
            try
            {
                var returnObject = await _retailerService.GetReturnsByReturnIdFromDb(returnId);

                //convert the return item to a DTO
                return Ok(new ReturnItemDTO { ReturnId = returnObject.Id, Items = returnObject.Items, Status = returnObject.Status, ReturnDate = returnObject.ReturnDate, EstimatedTime = returnObject.ExpectedArrivalTime, ClientName = returnObject.Client.Name });
            }
            catch (System.Exception)
            {

                return BadRequest($"An error has occured retrieving all the return detail for the return ID {returnId}");
            }
        }

        /// <summary>
        /// update a return status by making confirming the return by setting it to "Arrived"
        /// </summary>
        /// <returns>
        /// an ok status
        /// </returns>
        /// <param name="returnId">Return ID parameter passed through the URL</param>
        /// <param name="returnStatus">Status of new return parameter passed through the URL</param>
        [HttpPut("updateReturnStatus/{returnId}")]
        public async Task<IActionResult> UpdateReturnStatus(string returnId, [FromQuery] string returnStatus)
        {
            try
            {
                await _retailerService.UpdateReturnStatusFromDb(returnId, returnStatus);
                return Ok();
            }
            catch (System.Exception)
            {

                return BadRequest($"An error has occured updating the return status for the return ID {returnId}");
            }

        }

        /// <summary>
        /// get details of a specfic product items
        /// </summary>
        /// <returns>
        /// an ok status with a an object of the item
        /// </returns>
        /// <param name="itemId">Item ID parameter passed through the URL</param>
        [HttpGet("getItemById/{itemId}")]
        public async Task<IActionResult> GetItemById(string itemId)
        {
            try
            {
                return Ok(await _retailerService.GetItemByIdFromDb(itemId));
            }
            catch (System.Exception)
            {

                return BadRequest($"An error has occured retrieving the item details for the item ID {itemId}");
            }

        }


        /// <summary>
        /// make a dispute of a return by providing a value to the dispute property of a return
        /// </summary>
        /// <returns>
        /// an ok status
        /// </returns>
        /// <param name="returnId">Return ID parameter passed through the URL</param>
        /// <param name="userDisputeReason">dispute reason from the retailer parameter passed through the URL</param>
        [HttpPut("updateDisputeReason/{returnId}")]
        public async Task<IActionResult> UpdateDisputeReason(string returnId, [FromQuery] string userDisputeReason)
        {
            try
            {
                await _retailerService.UpdateDisputeReasonFromDb(returnId, userDisputeReason);
                return Ok();
            }
            catch (System.Exception)
            {

                return BadRequest($"An error has occured updating the dispute reason for the return ID {returnId}");
            }

        }
    }
}
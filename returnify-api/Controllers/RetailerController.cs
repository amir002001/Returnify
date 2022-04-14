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
    [Route("api/[controller]")]
    public class RetailerController : Controller
    {
        private readonly IRetailerService _retailerService;

        public RetailerController(IRetailerService retailerService)
        {
            _retailerService = retailerService;
        }
        //TODO FIX COMMENTS
        //API endpoints

        //GET all users that have a return from a retailer by calling the RETURN getAllReturns
        [HttpGet("getAllReturns/{retailerId}")]
        public async Task<IActionResult> GetAllReturns(string retailerId)
        {
            try
            {
                var serviceResult = await _retailerService.GetAllReturnsFromDb(retailerId);
                var returnList = serviceResult.Select(r => new ReturnItemDTO { Items = r.Items, ClientName = r.Client.Name, Status = r.Status, ReturnDate = r.ReturnDate, DisputeReason = r.DisputeReason, RetailerId = r.Retailer.Id, ReturnId = r.Id }).ToList();

                return Ok(returnList);
            }
            catch (System.Exception)
            {
                return BadRequest($"An error has occured retrieving all returns for the retailer ID {retailerId}");
            }

        }

        //GET a specfic user that has a return by calling the RETURN getReturnById
        [HttpGet("getReturnsByReturnId/{returnId}")]
        public async Task<IActionResult> GetReturnsByReturnId(string returnId)
        {
            try
            {
                var returnObject = await _retailerService.GetReturnsByReturnIdFromDb(returnId);

                return Ok(new ReturnItemDTO { ReturnId = returnObject.Id, Items = returnObject.Items, Status = returnObject.Status, ReturnDate = returnObject.ReturnDate, EstimatedTime = returnObject.ExpectedArrivalTime, ClientName = returnObject.Client.Name });
            }
            catch (System.Exception)
            {

                return BadRequest($"An error has occured retrieving all the return detail for the return ID {returnId}");
            }
        }

        //UPDATE a RETURN by making confirm return  = true updateReturnConfirmation
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

        //GET details of an ITEM getItemById
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

        //POST/UPDATE a dispute of a return updateDisputeOfReturnById?
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
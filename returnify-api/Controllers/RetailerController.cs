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

namespace returnify_api.Controllers
{
    [Route("api/[controller]")]
    public class RetailerController : Controller
    {
        private readonly RetailerService _retailerService;

        public RetailerController(RetailerService retailerService)
        {
            _retailerService = retailerService;
        }
        //TODO FIX COMMENTS
        public IActionResult Index()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View("Error!");
        }

        //API endpoints

        //GET all users that have a return from a retailer by calling the RETURN getAllReturns
        [HttpGet("getAllReturns")]
        public IActionResult GetAllReturns(string retailerId)
        {
            try
            {
                var serviceResult = _retailerService.GetAllReturnsFromDb(retailerId);
                return Ok(serviceResult.Select(r => new { Items = r.Items, ClientId = r.Client.Id, Status = r.Status, ReturnDate = r.ReturnDate, DisputeReason = r.DisputeReason, RetailerId = r.Retailer.Id }));
            }
            catch (System.Exception)
            {
                return BadRequest($"An error has occured retrieving all returns for the retailer ID {retailerId}");
            }

        }

        //GET a specfic user that has a return by calling the RETURN getReturnById
        [HttpGet("getReturnsByReturnId/{id}")]
        public IActionResult GetReturnsByReturnId(string returnId)
        {
            try
            {
                return Ok(_retailerService.GetReturnsByReturnIdFromDb(returnId));
            }
            catch (System.Exception)
            {

                return BadRequest($"An error has occured retrieving all the return detail for the return ID {returnId}");
            }
        }

        //UPDATE a RETURN by making confirm return  = true updateReturnConfirmation
        [HttpPut("updateReturnStatus")]
        public IActionResult UpdateReturnStatus(string returnId, [FromBody] string returnStatus)
        {
            try
            {
                return Ok(_retailerService.UpdateReturnStatusFromDb(returnId, returnStatus));
            }
            catch (System.Exception)
            {

                return BadRequest($"An error has occured updating the return status for the return ID {returnId}");
            }

        }

        //GET details of an ITEM getItemById
        [HttpGet("getItemById/{id}")]
        public IActionResult GetItemById(string itemId)
        {
            try
            {
                return Ok(_retailerService.GetItemByIdFromDb(itemId));
            }
            catch (System.Exception)
            {

                return BadRequest($"An error has occured retrieving the item details for the item ID {itemId}");
            }

        }

        //POST/UPDATE a dispute of a return updateDisputeOfReturnById?
        [HttpPut("updateDisputeReason")]
        public IActionResult UpdateDisputeReason(string returnId, [FromBody] string userDisputeReason)
        {
            try
            {
                return Ok(_retailerService.UpdateDisputeReasonFromDb(returnId, userDisputeReason));
            }
            catch (System.Exception)
            {

                return BadRequest($"An error has occured updating the dispute reason for the return ID {returnId}");
            }

        }
    }
}
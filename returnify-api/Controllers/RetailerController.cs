using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using returnify_api.Models.Persistence;
using Microsoft.EntityFrameworkCore;

namespace returnify_api.Controllers
{
    [Route("api/[controller]")]
    public class RetailerController : Controller
    {
        private readonly DataContext _context;

        public RetailerController(DataContext context)
        {
            _context = context;
        }

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
        //TODO add sorting endpoints
        [HttpGet("getAllReturns")]
        public async Task<IActionResult> GetAllReturns(string retailerId)
        {
            //TODO: try catch
            var retailer = _context.Retailers.Include(r => r.Returns).ThenInclude(c => c.Client).ThenInclude(o => o.Orders).ThenInclude(i => i.Items).Where(r => r.Id.Equals(new Guid(retailerId))).First();
            var allReturns = retailer.Returns;
            return Ok(allReturns.Select(r => new { Items = r.Items, ClientId = r.Client.Id, Status=r.Status, ReturnDate = r.ReturnDate, DisputeReason = r.DisputeReason, RetailerId = r.Retailer.Id}));
        }
        
        //GET a specfic user that has a return by calling the RETURN getReturnById
        [HttpGet("getReturnsByReturnId/{id}")]
        public async Task<IActionResult> GetReturnsByReturnId(string returnId)
        {
            //TODO: try catch
            var returnDetail = _context.Returns.Include(c => c.Client).ThenInclude(o => o.Orders).ThenInclude(i => i.Items).Where(r => r.Id.Equals(new Guid(returnId))).First();
            //TODO: make a DTO for return
            return Ok(returnDetail);
        }

        //UPDATE a RETURN by making confirm return  = true updateReturnConfirmation
        [HttpPut("updateReturnStatus")]
        public async Task<IActionResult> UpdateReturnStatus(string returnId, [FromBody] string returnStatus)
        {
            //TODO: try catch
            var returnObject = _context.Returns.Include(c => c.Client).ThenInclude(o => o.Orders).ThenInclude(i => i.Items).Where(r => r.Id.Equals(new Guid(returnId))).First();
            returnObject.Status = returnStatus;

            await _context.SaveChangesAsync();
//TODO: make a DTO for return
            return Ok(returnObject);
        }

        //GET details of an ITEM getItemById
        [HttpGet("getItemById/{id}")]
        public IActionResult GetItemById(string itemId)
        {
            //TODO: try catch
            var item = _context.Items.Include(i => i.Images).FirstOrDefault(i => i.Id.Equals(new Guid(itemId)));
            return Ok(item);
        }

        //POST/UPDATE a dispute of a return updateDisputeOfReturnById?
        [HttpPut("updateDisputeReason")]
        public async Task<IActionResult> UpdateDisputeReason(string returnId, [FromBody] string userDisputeReason)
        {
            //TODO: try catch
            var returnObject = _context.Returns.Include(c => c.Client).ThenInclude(o => o.Orders).ThenInclude(i => i.Items).Where(r => r.Id.Equals(new Guid(returnId))).First();
            returnObject.DisputeReason = userDisputeReason;

            await _context.SaveChangesAsync();
//TODO: make a DTO for return
            return Ok(returnObject);
        }
    }
}
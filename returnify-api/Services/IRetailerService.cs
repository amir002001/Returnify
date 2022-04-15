/**
* @author  Burhan Faquiri
* @since   2022-04-14
*/
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using returnify_api.Models.Entities;

namespace returnify_api.Services
{
    /// <summary>
    /// This file is to create an interface for the Retailer Service to perform operations with the database
    /// </summary>
    public interface IRetailerService
    {
        /// <summary>
        /// gets all users that have a return from a retailer's id from the database asynchronously
        /// </summary>
        /// <returns>
        /// a a list of returns
        /// </returns>
        /// <param name="retailerId">Retailer ID parameter passed through the URL</param>
        public Task<List<Return>> GetAllReturnsFromDb(string retailerId);

        /// <summary>
        /// get a specfic return item/transaction by id of the return from the database asynchronously
        /// </summary>
        /// <returns>
        /// an object of Return
        /// </returns>
        /// <param name="returnId">Return ID parameter passed through the URL</param>
        public Task<Return> GetReturnsByReturnIdFromDb(string returnId);

        /// <summary>
        /// update a return status by making confirming the return by setting it to "Arrived" into the database asynchronously
        /// </summary>
        /// <returns>
        /// an integer which is 1 signifying the database update was a success
        /// </returns>
        /// <param name="returnId">Return ID parameter passed through the URL</param>
        /// <param name="returnStatus">Status of new return parameter passed through the URL</param>
        public Task<int> UpdateReturnStatusFromDb(string returnId, string returnStatus);

        /// <summary>
        /// get details of a specfic product items from the database asynchronously
        /// </summary>
        /// <returns>
        /// an object of the item
        /// </returns>
        /// <param name="itemId">Item ID parameter passed through the URL</param>
        public Task<Item> GetItemByIdFromDb(string itemId);

        /// <summary>
        /// make a dispute of a return by providing a value to the dispute property of a return into the database asynchronously
        /// </summary>
        /// <returns>
        /// an integer which is 1 signifying the database update was a success
        /// </returns>
        /// <param name="returnId">Return ID parameter passed through the URL</param>
        /// <param name="userDisputeReason">dispute reason from the retailer parameter passed through the URL</param>
        public Task<int> UpdateDisputeReasonFromDb(string returnId, string userDisputeReason);

    }
}
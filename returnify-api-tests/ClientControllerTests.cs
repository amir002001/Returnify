/**
* @author  Michael Wright
* @since   2022-04-14
*/

using Xunit;
using Moq;
using returnify_api.Services;
using returnify_api.Controllers;
using System.Collections.Generic;
using returnify_api.Models.Entities;
using Microsoft.AspNetCore.Mvc;
using System;
using returnify_api.Controllers.DTO;

namespace returnify_api_tests
{
    /// <summary>
    /// This file is to perform unit tests against the controller
    /// </summary>
    public class ClientControllerTest
    {

        /// <summary>
        /// This test checks if the list of orders for a client is correct from what is added in the database
        /// </summary>
        [Fact]
        public async void GetAllOrdersByClientId_ListIsFull_OrdersList()
        {

            var retailer = new Retailer { Id = new Guid("94F8D01E-AE62-4CE3-B213-0E4F6B6E5759") };
            var clientId = "2C09F1AA-6A0A-4B66-A40B-ED7F45FC67B1";

            var mockService = new Mock<IClientService>();
            mockService.Setup(x => x.GetAllClientOrdersFromDb(clientId)).ReturnsAsync(new List<Order> {
            new Order{
                Client = new Client(),
                Total = 0.00,
                Items = new List<Item>{new Item()},
                PurchaseDate = DateTime.Now,
                Retailer = retailer
            },
            new Order{
                Client = new Client(),
                Total = 0.00,
                Items = new List<Item>{new Item()},
                PurchaseDate = DateTime.Now,
                Retailer = retailer
            }
        });
            var controller = new ClientController(mockService.Object);

            // Act
            var okResult = await controller.GetAllClientOrders(clientId) as OkObjectResult;

            // Assert
            var items = Assert.IsType<List<OrderItemDTO>>(okResult!.Value);
            Assert.Equal(2, items.Count);
        }


        /// <summary>
        /// This test checks if the correct order is returned by id
        /// </summary>
        [Fact]
        public async void GetOrdersByOrderId_OrderExists_OrderItem()
        {
            var orderId = "94F8D01E-AE62-4CE3-B213-0E4F6B6E5759";

            var mockService = new Mock<IClientService>();
            mockService.Setup(x => x.GetOrderByIdFromDb(orderId)).ReturnsAsync(
                new Order
                {
                    Id = new Guid(orderId),
                    Client = new Client(),
                    Total = 10.00,
                    Items = new List<Item> { new Item() },
                    PurchaseDate = DateTime.Now,
                    Retailer = new Retailer()
                });
            var controller = new ClientController(mockService.Object);

            // Act
            var okResult = await controller.GetClientOrderById(orderId) as OkObjectResult;

            // Assert
            var items = Assert.IsType<OrderItemDTO>(okResult!.Value);
            Assert.Equal(10.00, items.Total);
        }


        /// <summary>
        /// This test checks if the list of orders for a client is correct from what is added in the database with the filter criteria
        /// </summary>
        [Fact]
        public async void GetOrdersByFilter_CorrectItemsReturned()
        {

            double startRange = 0.00;
            double endRange = 7.00;
            string storeName = "HM";
            DateTime date = DateTime.Now;
            string userId = "94F8D01E-AE62-4CE3-B213-0E4F6B6E5759";

            var mockService = new Mock<IClientService>();
            mockService.Setup(x => x.GetOrdersByFilterFromDb(date, userId, startRange, endRange, storeName)).ReturnsAsync(
                new List<Order>{
                    new Order{
                    Id = new Guid(userId),
                    Client = new Client(),
                    Total = 10.00,
                    Items = new List<Item>{new Item()},
                    PurchaseDate = DateTime.Now,
                    Retailer = new Retailer()
             }});
            var controller = new ClientController(mockService.Object);

                // Act
                var okResult = await controller.GetOrderByFilter( startRange, endRange, storeName, "04/07/2022", userId) as OkObjectResult;

                // Assert
                var items = Assert.IsType<List<OrderItemDTO>>(okResult!.Value);
                Assert.Equal(1, items.Count);
            }
        }
    }
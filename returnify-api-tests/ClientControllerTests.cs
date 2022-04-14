// using Xunit;
// using Moq;
// using returnify_api.Services;
// using returnify_api.Controllers;
// using System.Collections.Generic;
// using returnify_api.Models.Entities;
// using Microsoft.AspNetCore.Mvc;
// using System;
// using returnify_api.Controllers.DTO;

// namespace returnify_api_tests
// {
//     public class ClientControllerTest
//     {
//         [Fact]
//         public async void GetAllOrders_ListIsFull_OrdersList()
//         {
//             var retailerId = "94F8D01E-AE62-4CE3-B213-0E4F6B6E5759";
//             var retailer = new Retailer { Id = new Guid("94F8D01E-AE62-4CE3-B213-0E4F6B6E5759") };
//             var clientId = "2C09F1AA-6A0A-4B66-A40B-ED7F45FC67B1";
//             // var client = new Client { Id = new Guid("2C09F1AA-6A0A-4B66-A40B-ED7F45FC67B1") };

//             var mockService = new Mock<IRetailerService>();
//             mockService.Setup(x => x.GetAllOrdersFromDb(clientId)).ReturnsAsync(new List<Order> {
//             new Order{`
//                 Client = new Client(),
//                 Total = 0.00,
//                 Items = new List<Item>{new Item()},
//                 PurchaseDate = DateTime.Now,
//                 Retailer = retailer
//             },
//             new Order{
//                 Client = new Client(),
//                 Total = 0.00,
//                 Items = new List<Item>{new Item()},
//                 PurchaseDate = DateTime.Now,
//                 Retailer = retailer
//             }
//         });
//             var controller = new ClientController(mockService.Object);

//             // Act
//             var okResult = await controller.GetAllClientOrders(clientId) as OkObjectResult;

//             // Assert
//             var items = Assert.IsType<List<OrderItemDTO>>(okResult!.Value);
//             Assert.Equal(3, items.Count);
//         }
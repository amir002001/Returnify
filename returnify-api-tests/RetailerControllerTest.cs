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
    public class RetailerControllerTest
    {
        [Fact]
        public async void GetAllReturns_ListIsFull_ReturnsList()
        {
            var retailerId = "94F8D01E-AE62-4CE3-B213-0E4F6B6E5759";
            var retailer = new Retailer { Id = new Guid("94F8D01E-AE62-4CE3-B213-0E4F6B6E5759") };

            var mockService = new Mock<IRetailerService>();
            mockService.Setup(x => x.GetAllReturnsFromDb(retailerId)).ReturnsAsync(new List<Return> {
            new Return{
                Retailer = retailer,
                Items = new List<Item>{new Item()},
                Client = new Client(),
                Status = "Picked Up",
                ReturnDate = DateTime.Now,
                DisputeReason = ""
            },
            new Return{
                Retailer = retailer,
                Items = new List<Item>{new Item()},
                Client = new Client(),
                Status = "Picked Up",
                ReturnDate = DateTime.Now,
                DisputeReason = ""
            },
            new Return{
                Retailer = retailer,
                Items = new List<Item>{new Item()},
                Client = new Client(),
                Status = "Picked Up",
                ReturnDate = DateTime.Now,
                DisputeReason = ""
            }
        });
            var controller = new RetailerController(mockService.Object);

            // Act
            var okResult = await controller.GetAllReturns(retailerId) as OkObjectResult;

            // Assert
            var items = Assert.IsType<List<ReturnItemDTO>>(okResult!.Value);
            Assert.Equal(3, items.Count);
        }
    }
}
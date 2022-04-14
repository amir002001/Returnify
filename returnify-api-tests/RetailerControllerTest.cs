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

        [Fact]
        public async void GetReturnsByReturnId_ReturnExists_ReturnItem()
        {
            var returnId = "94F8D01E-AE62-4CE3-B213-0E4F6B6E5759";
            //var retailer = new Retailer { Id = new Guid("94F8D01E-AE62-4CE3-B213-0E4F6B6E5759") };

            var mockService = new Mock<IRetailerService>();
            mockService.Setup(x => x.GetReturnsByReturnIdFromDb(returnId)).ReturnsAsync(
                new Return
                {
                    Retailer = new Retailer(),
                    Items = new List<Item> { new Item() },
                    Client = new Client(),
                    Status = "Picked Up",
                    ReturnDate = DateTime.Now,
                    DisputeReason = ""
                });
            var controller = new RetailerController(mockService.Object);

            // Act
            var okResult = await controller.GetReturnsByReturnId(returnId) as OkObjectResult;

            // Assert
            var items = Assert.IsType<ReturnItemDTO>(okResult!.Value);
            Assert.Equal("Picked Up", items.Status);
        }

        [Fact]
        public async void GetItemById_ItemExists_ItemDetails()
        {
            var itemId = "94F8D01E-AE62-4CE3-B213-0E4F6B6E5759";


            var mockService = new Mock<IRetailerService>();
            mockService.Setup(x => x.GetItemByIdFromDb(itemId)).ReturnsAsync(
                new Item
                {
                    Id = new Guid(itemId),
                    Name = "Black Pants"
                });
            var controller = new RetailerController(mockService.Object);

            // Act
            var okResult = await controller.GetItemById(itemId) as OkObjectResult;

            // Assert
            var items = Assert.IsType<Item>(okResult!.Value);
            Assert.Equal("Black Pants", items.Name);
        }

        [Fact]
        public async void UpdateReturnStatus_ReturnExists_UpdatesStatusOfReturn()
        {
            var returnId = "94F8D01E-AE62-4CE3-B213-0E4F6B6E5759";
            var newReturnStatus = "Arrived";
            var mockService = new Mock<IRetailerService>();
            var returnObject = new Return { Id = new Guid(returnId), Status = "In Transit" };

            mockService.Setup(x => x.UpdateReturnStatusFromDb(returnId, newReturnStatus)).ReturnsAsync(1).Callback(() =>
            {
                returnObject.Status = newReturnStatus;
            });
            var controller = new RetailerController(mockService.Object);

            // Act
            var okResult = await controller.UpdateReturnStatus(returnId, newReturnStatus) as OkObjectResult;
            // Assert
            Assert.Equal(newReturnStatus, returnObject.Status);
        }

        [Fact]
        public async void UpdateDisputeReason_ReturnExists_UpdatesDisputeOfReturn()
        {
            var returnId = "94F8D01E-AE62-4CE3-B213-0E4F6B6E5759";
            var newDisputeReason = "Driver did not deliver items";
            var mockService = new Mock<IRetailerService>();
            var returnObject = new Return { Id = new Guid(returnId), Status = "No dispute" };

            mockService.Setup(x => x.UpdateDisputeReasonFromDb(returnId, newDisputeReason)).ReturnsAsync(1).Callback(() =>
            {
                returnObject.DisputeReason = newDisputeReason;
            });
            var controller = new RetailerController(mockService.Object);

            // Act
            var okResult = await controller.UpdateDisputeReason(returnId, newDisputeReason) as OkObjectResult;
            // Assert
            Assert.Equal(newDisputeReason, returnObject.DisputeReason);
        }
    }
}
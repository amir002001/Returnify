using Xunit;
using Moq;
using returnify_api.Services;
using returnify_api.Controllers;
using System.Collections.Generic;
using returnify_api.Models.Entities;
using Microsoft.AspNetCore.Mvc;
using System;

namespace returnify_api_tests;

public class DriverControllerTest
{
    [Fact]
    public async void GetAllModulesAsync_ListIsFull_ReturnsList()
    {
        var mockService = new Mock<IDriverService>();
        mockService.Setup(x => x.RetrieveAllModulesFromDatabaseAsync()).ReturnsAsync(new List<TrainingModule> {
            new TrainingModule(),
            new TrainingModule(),
            new TrainingModule()
        });
        var controller = new DriverController(mockService.Object);

        // Act
        var okResult = await controller.GetAllModulesAsync() as OkObjectResult;

        // Assert
        var items = Assert.IsType<List<TrainingModule>>(okResult!.Value);
        Assert.Equal(3, items.Count);
    }

    [Fact]
    public async void GetModuleByIdAsync_ModuleExists_ReturnsModule()
    {
        var mockId = "94F8D01E-AE62-4CE3-B213-0E4F6B6E5759";
        var mockService = new Mock<IDriverService>();
        mockService.Setup(x => x.RetrieveModuleByIdFromDatabaseAsync(mockId)).ReturnsAsync(
            new TrainingModule
            {
                Id = new Guid("94F8D01E-AE62-4CE3-B213-0E4F6B6E5759"),
                ContentLink = "www.youtube.com"

            });
        var controller = new DriverController(mockService.Object);

        // Act
        var okResult = await controller.GetModuleByIdAsync(mockId) as OkObjectResult;

        // Assert
        var item = Assert.IsType<TrainingModule>(okResult!.Value);
        Assert.Equal("www.youtube.com", item.ContentLink);
    }

    [Fact]
    public async void GetAssessmentByIdAsync_AssessmentExists_ReturnsAssessment()
    {
        var mockId = "94F8D01E-AE62-4CE3-B213-0E4F6B6E5759";
        var mockService = new Mock<IDriverService>();
        mockService.Setup(x => x.RetrieveAssessmentByIdFromDatabaseAsync(mockId)).ReturnsAsync(
            new Assessment
            {
                Id = new Guid("94F8D01E-AE62-4CE3-B213-0E4F6B6E5759"),
                Score = 100

            });
        var controller = new DriverController(mockService.Object);

        // Act
        var okResult = await controller.GetAssessmentByIdAsync(mockId) as OkObjectResult;

        // Assert
        var item = Assert.IsType<Assessment>(okResult!.Value);
        Assert.Equal(100, item.Score);
    }

    [Fact]
    public async void PutAssessmentResultsAsync_AssessmentExists_UpdatesAssessment()
    {
        var id = "94F8D01E-AE62-4CE3-B213-0E4F6B6E5759";
        var mockService = new Mock<IDriverService>();
        var assessment = new Assessment { Score = 100, Id = new Guid(id) };
        mockService.Setup(x => x.UpdateAsessmentInDatabaseAsync(assessment)).ReturnsAsync(1).Callback(() => {
            assessment.Score = 20;
        });
        var controller = new DriverController(mockService.Object);

        // Act
        var okResult = await controller.PutAssessmentResultsAsync(id, assessment) as OkObjectResult;
        // Assert
        Assert.Equal(20, assessment.Score);
    }


}
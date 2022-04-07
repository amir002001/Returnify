﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using returnify_api.Models.Persistence;

#nullable disable

namespace returnify_api.Migrations
{
    [DbContext(typeof(DataContext))]
    [Migration("20220407220036_firstMigration")]
    partial class firstMigration
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder.HasAnnotation("ProductVersion", "6.0.3");

            modelBuilder.Entity("returnify_api.Models.Entities.Assessment", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<double>("Score")
                        .HasColumnType("REAL");

                    b.HasKey("Id");

                    b.ToTable("Assessments");
                });

            modelBuilder.Entity("returnify_api.Models.Entities.Client", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<int>("Age")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Clients");
                });

            modelBuilder.Entity("returnify_api.Models.Entities.Driver", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<string>("Name")
                        .HasColumnType("TEXT");

                    b.Property<bool>("isVerified")
                        .HasColumnType("INTEGER");

                    b.HasKey("Id");

                    b.ToTable("Drivers");
                });

            modelBuilder.Entity("returnify_api.Models.Entities.Image", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<Guid?>("ItemId")
                        .HasColumnType("TEXT");

                    b.Property<string>("Path")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.HasIndex("ItemId");

                    b.ToTable("Image");
                });

            modelBuilder.Entity("returnify_api.Models.Entities.Item", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("ManufacturedDate")
                        .HasColumnType("TEXT");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<Guid?>("OrderId")
                        .HasColumnType("TEXT");

                    b.Property<double>("Price")
                        .HasColumnType("REAL");

                    b.Property<Guid?>("ReturnId")
                        .HasColumnType("TEXT");

                    b.Property<string>("SKU")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<int>("StyleNumber")
                        .HasColumnType("INTEGER");

                    b.HasKey("Id");

                    b.HasIndex("OrderId");

                    b.HasIndex("ReturnId");

                    b.ToTable("Items");
                });

            modelBuilder.Entity("returnify_api.Models.Entities.Order", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<Guid?>("ClientId")
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("PurchaseDate")
                        .HasColumnType("TEXT");

                    b.Property<Guid>("RetailerId")
                        .HasColumnType("TEXT");

                    b.Property<double>("Total")
                        .HasColumnType("REAL");

                    b.HasKey("Id");

                    b.HasIndex("ClientId");

                    b.HasIndex("RetailerId");

                    b.ToTable("Orders");
                });

            modelBuilder.Entity("returnify_api.Models.Entities.Prompt", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<Guid?>("QuestionId")
                        .HasColumnType("TEXT");

                    b.Property<string>("Text")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.HasIndex("QuestionId");

                    b.ToTable("Prompt");
                });

            modelBuilder.Entity("returnify_api.Models.Entities.Question", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<Guid?>("AssessmentId")
                        .HasColumnType("TEXT");

                    b.Property<string>("ImagePath")
                        .HasColumnType("TEXT");

                    b.Property<int>("answerIndex")
                        .HasColumnType("INTEGER");

                    b.HasKey("Id");

                    b.HasIndex("AssessmentId");

                    b.ToTable("Questions");
                });

            modelBuilder.Entity("returnify_api.Models.Entities.Retailer", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<string>("Location")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("RetailerLogo")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("RetailerType")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Retailers");
                });

            modelBuilder.Entity("returnify_api.Models.Entities.Return", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<Guid>("ClientId")
                        .HasColumnType("TEXT");

                    b.Property<string>("DisputeReason")
                        .HasColumnType("TEXT");

                    b.Property<Guid>("DriverId")
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("ExpectedArrivalTime")
                        .HasColumnType("TEXT");

                    b.Property<Guid?>("RetailerId")
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("ReturnDate")
                        .HasColumnType("TEXT");

                    b.Property<string>("Status")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.HasIndex("ClientId");

                    b.HasIndex("DriverId");

                    b.HasIndex("RetailerId");

                    b.ToTable("Returns");
                });

            modelBuilder.Entity("returnify_api.Models.Entities.TrainingModule", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<Guid?>("AssessmentId")
                        .HasColumnType("TEXT");

                    b.Property<string>("ContentLink")
                        .HasColumnType("TEXT");

                    b.Property<Guid?>("DriverId")
                        .HasColumnType("TEXT");

                    b.Property<bool>("IsComplete")
                        .HasColumnType("INTEGER");

                    b.HasKey("Id");

                    b.HasIndex("AssessmentId");

                    b.HasIndex("DriverId");

                    b.ToTable("TrainingModules");
                });

            modelBuilder.Entity("returnify_api.Models.Entities.Image", b =>
                {
                    b.HasOne("returnify_api.Models.Entities.Item", null)
                        .WithMany("Images")
                        .HasForeignKey("ItemId");
                });

            modelBuilder.Entity("returnify_api.Models.Entities.Item", b =>
                {
                    b.HasOne("returnify_api.Models.Entities.Order", null)
                        .WithMany("Items")
                        .HasForeignKey("OrderId");

                    b.HasOne("returnify_api.Models.Entities.Return", null)
                        .WithMany("Items")
                        .HasForeignKey("ReturnId");
                });

            modelBuilder.Entity("returnify_api.Models.Entities.Order", b =>
                {
                    b.HasOne("returnify_api.Models.Entities.Client", null)
                        .WithMany("Orders")
                        .HasForeignKey("ClientId");

                    b.HasOne("returnify_api.Models.Entities.Retailer", "Retailer")
                        .WithMany()
                        .HasForeignKey("RetailerId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Retailer");
                });

            modelBuilder.Entity("returnify_api.Models.Entities.Prompt", b =>
                {
                    b.HasOne("returnify_api.Models.Entities.Question", null)
                        .WithMany("Prompts")
                        .HasForeignKey("QuestionId");
                });

            modelBuilder.Entity("returnify_api.Models.Entities.Question", b =>
                {
                    b.HasOne("returnify_api.Models.Entities.Assessment", null)
                        .WithMany("Questions")
                        .HasForeignKey("AssessmentId");
                });

            modelBuilder.Entity("returnify_api.Models.Entities.Return", b =>
                {
                    b.HasOne("returnify_api.Models.Entities.Client", "Client")
                        .WithMany()
                        .HasForeignKey("ClientId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("returnify_api.Models.Entities.Driver", "Driver")
                        .WithMany("Returns")
                        .HasForeignKey("DriverId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("returnify_api.Models.Entities.Retailer", null)
                        .WithMany("Returns")
                        .HasForeignKey("RetailerId");

                    b.Navigation("Client");

                    b.Navigation("Driver");
                });

            modelBuilder.Entity("returnify_api.Models.Entities.TrainingModule", b =>
                {
                    b.HasOne("returnify_api.Models.Entities.Assessment", "Assessment")
                        .WithMany()
                        .HasForeignKey("AssessmentId");

                    b.HasOne("returnify_api.Models.Entities.Driver", "Driver")
                        .WithMany("TrainingModules")
                        .HasForeignKey("DriverId");

                    b.Navigation("Assessment");

                    b.Navigation("Driver");
                });

            modelBuilder.Entity("returnify_api.Models.Entities.Assessment", b =>
                {
                    b.Navigation("Questions");
                });

            modelBuilder.Entity("returnify_api.Models.Entities.Client", b =>
                {
                    b.Navigation("Orders");
                });

            modelBuilder.Entity("returnify_api.Models.Entities.Driver", b =>
                {
                    b.Navigation("Returns");

                    b.Navigation("TrainingModules");
                });

            modelBuilder.Entity("returnify_api.Models.Entities.Item", b =>
                {
                    b.Navigation("Images");
                });

            modelBuilder.Entity("returnify_api.Models.Entities.Order", b =>
                {
                    b.Navigation("Items");
                });

            modelBuilder.Entity("returnify_api.Models.Entities.Question", b =>
                {
                    b.Navigation("Prompts");
                });

            modelBuilder.Entity("returnify_api.Models.Entities.Retailer", b =>
                {
                    b.Navigation("Returns");
                });

            modelBuilder.Entity("returnify_api.Models.Entities.Return", b =>
                {
                    b.Navigation("Items");
                });
#pragma warning restore 612, 618
        }
    }
}

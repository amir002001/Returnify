/**
* @author  Burhan Faquiri
* @since   2022-04-1
*/
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using returnify_api.Models.Entities;

namespace returnify_api.Models.Persistence
{
    /// <summary>
    /// This file is to create a class for the database which is SQLLite
    /// </summary>
    public class DataContext : DbContext
    {
        public DbSet<Assessment> Assessments { get; set; }
        /// <param name="Assessments">
        /// property for to create an Assessments table
        /// </param>
        public DbSet<Client> Clients { get; set; }
        /// <param name="Clients">
        /// property for to create a Clients table
        /// </param>
        public DbSet<Driver> Drivers { get; set; }
        /// <param name="Drivers">
        /// property for to create a Drivers table
        /// </param>
        public DbSet<Item> Items { get; set; }
        /// <param name="Items">
        /// property for to create an Items table
        /// </param>
        public DbSet<Order> Orders { get; set; }
        /// <param name="Orders">
        /// property for to create an Orders table
        /// </param>
        public DbSet<Question> Questions { get; set; }
        /// <param name="Questions">
        /// property for to create a Questions table
        /// </param>
        public DbSet<Retailer> Retailers { get; set; }
        /// <param name="Retailers">
        /// property for to create a Retailers table
        /// </param>
        public DbSet<Return> Returns { get; set; }
        /// <param name="Returns">
        /// property for to create a Returns table
        /// </param>
        public DbSet<TrainingModule> TrainingModules { get; set; }
        /// <param name="TrainingModules">
        /// property for to create a TrainingModules table
        /// </param>

        /// <summary>
        /// Required method override and implementation to create database named ReturnifyDB
        /// </summary>
        /// <returns>
        /// nothing
        /// </returns>
        /// <param name="optionsBuilder">Provides the options to build the db</param>
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            //database name will be the one that currently is existing, Data.db
            optionsBuilder.UseSqlite("FileName=ReturnifyDB.db");
        }
    }
}
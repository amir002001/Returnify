using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using returnify_api.Models.Entities;

namespace returnify_api.Models.Persistence
{
    public class DataContext : DbContext
    {
        public DbSet<Assessment> Assessments { get; set; }
        public DbSet<Client> Clients { get; set; }
        public DbSet<Driver> Drivers { get; set; }
        public DbSet<Item> Items { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<Question> Questions { get; set; }
        public DbSet<Retailer> Retailers { get; set; }
        public DbSet<Return> Returns { get; set; }
        public DbSet<TrainingModule> TrainingModules { get; set; }

//method to query the db and update status
//2 options:
//1 make props protected and use public methods in datacontext
//2 make a return service that the controller uses, leave datacontext alone
    
public void UpdateReturnStatus(string returnId, string returnStatus){

}

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            //database name will be the one that currently is existing, Data.db
            optionsBuilder.UseSqlite("FileName=ReturnifyDB.db");
        }
    }
}
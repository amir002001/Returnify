using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using returnify_api.Models.Entities;

namespace returnify_api.Models.Persistance
{
    public class DataContext: DbContext
    {
        public DbSet<Foo> Foo { get; set; }
        public DbSet<Foo> Foo2 { get; set; }
        public DbSet<Foo> Foo3 { get; set; }
        public DbSet<Foo> Foo4 { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            //database name will be the one that currently is existing, Data.db
            optionsBuilder.UseSqlite("FileName=ReturnifyDB.db");
        }
    }
}
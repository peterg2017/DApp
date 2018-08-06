using DApp.API.Models;
using Microsoft.EntityFrameworkCore;

namespace DApp.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) {}
        
        //Name der Tabelle in der DB
        public DbSet<Values> Values {get;set;}
    }
}
using NGDotNet.Model.Models;
using System.Data.Entity;

namespace NGDotNet.DAL
{
    public class EfContext : DbContext
    {
        public EfContext() : base("name=DefaultConnection")
        {
            base.Configuration.ProxyCreationEnabled = false;
        }

        public DbSet<Avenger> Avengers { get; set; }
    }
}

using Backend_api.Models;
using Microsoft.EntityFrameworkCore;

namespace Backend_api
     // är är exempel på dependency-inversion-principle tillsammans med det i Program, då jag har har gjort depency injection. 
{
    public class sqlContext : DbContext
    {
        public sqlContext(DbContextOptions options) : base(options)
        {
        }

        public virtual DbSet<Product> Products { get; set; }
    }

}

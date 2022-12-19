
using System.ComponentModel.DataAnnotations;

namespace Backend_api.Models
{
    public class Product : IProduct
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; } = null!;

        public Category Category{ get; set; } 
        public decimal Price { get; set; }

    }
}

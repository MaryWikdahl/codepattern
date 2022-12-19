using Backend_api.Models;

namespace Backend_api.Entites
{
    public class Products
    {
        public int Id { get; set; }
        public string Name { get; set; } = null!;

        public Category Category { get; set; }
        public decimal Price { get; set; }
    }
}

using Backend_api.Models;

namespace Backend_api.Entites
{
    public class ProductRequest
    {
       
  
            public string Name { get; set; } = null!;

            public Category Category { get; set; }
            public decimal Price { get; set; }

        
    }
}

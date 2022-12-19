using Backend_api.Entites;
using Backend_api.Factory;
using Backend_api.Models;

namespace Backend_api
{
    public class ProductFactory: IProductFactory
    {
        public Product Product()
        {
            return new Product();
        }

        public List<Products> ProductList()
        {
           return new List<Products>();
        }

        public Products Products(Product product)
        {

            return new Products()
            {
                Id = product.Id,
                Name = product.Name,
                Category = product.Category,
                Price = product.Price,

            };
        }

    }
}

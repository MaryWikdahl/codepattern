using Backend_api.Entites;
using Backend_api.Factory;
using Backend_api.Models;
using Microsoft.EntityFrameworkCore;

namespace Backend_api.Handlers
    // Här används The Liskov Substitution Principle genom interfaces. Det förhindrar modellhierarkier som inte överensstämmer med Open/Closed-principen.
    // Alla arvsmodeller som följer Liskov Substitutionsprincipen kommer att följa Open/Closed-principen.
    // objekt i en klass ska kunna ersättas med objekt av dess underklasser utan att applikationen bryts, vilket det gör genom interfacet.
    // Här finns det ett exempel på Single Responsibility Principle då den inte inehåller instanser. Jag har gjort mina instanser i ProductFactory istället.  
{
 
    public class ProductHandler : IProductHandler
    {
        private readonly sqlContext _sql;
        private readonly IProductFactory _Factory;

        public ProductHandler(sqlContext sql, IProductFactory Factory)
        {
            _sql = sql;
            _Factory= Factory;
        }
        public async Task CreateAsync(ProductRequest req)
        {
            var product = _Factory.Product();
            product.Name = req.Name;
            product.Price = req.Price;
            product.Category = req.Category;
            _sql.Add(product);
            await _sql.SaveChangesAsync();

        }

        
        public async Task<IEnumerable<Products>> GetAllAsync()
        {
            List<Products> products = _Factory.ProductList();

            foreach (var Product in await _sql.Products.ToListAsync())
                products.Add(_Factory.Products(Product));

            return products;
        }
        public Task<Models.Product> GetAsync(int id)
        {
            throw new NotImplementedException();
        }

     
    }
}

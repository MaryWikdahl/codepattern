using Backend_api.Entites;
using Backend_api.Models;

namespace Backend_api.Handlers
{ // Här är ett exempel på Interface Segregation Principle då man använder sig av ett interface. Detta gör man för att slippa dubbelkodning då man istället kan utgöra en grund som olika klasser kan använda sig av.

    public interface IProductHandler
    {
        Task CreateAsync(ProductRequest req);
        Task<IEnumerable<Products>> GetAllAsync();
        Task<Product> GetAsync(int id);

    }
}

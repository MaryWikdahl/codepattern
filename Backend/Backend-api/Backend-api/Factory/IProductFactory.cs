using Backend_api.Entites;
using Backend_api.Models;

namespace Backend_api.Factory
{   // Här är ett exempel på Interface Segregation Principle då man använder sig av ett interface. Detta gör man för att slippa dubbelkodning då man istället kan utgöra en grund som olika klasser kan använda sig av. Man minskar biverkningarna och frekvensen av nödvändiga ändringar genom att dela upp programvaran i flera, oberoende delar.
    public interface IProductFactory 
    {
        Product Product();
        Products Products(Product Product);

        public List<Products> ProductList();
    }
}

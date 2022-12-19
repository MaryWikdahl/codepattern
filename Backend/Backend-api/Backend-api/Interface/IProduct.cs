namespace Backend_api.Models
{
    // Här är ett exempel på Interface Segregation Principle då man använder sig av ett interface. Detta gör man för att slippa dubbelkodning då man istället kan utgöra en grund som olika klasser kan använda sig av. 
      // I detta fallet skulle man kunna anända sig av det här interfacet när man skapar en ny produkt sedan kanske man inte vill att alla produkter ska inehålla samma saker men alla ska ha samma grud och då kan man ha detta intercacet till det. .  
   
    public interface IProduct
    {
        int Id { get; set; }
        string Name { get; set; }
        decimal Price { get; set; }
        Category Category { get; set; }
    }
}
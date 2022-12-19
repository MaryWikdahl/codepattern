using Backend_api.Entites;
using Backend_api.Handlers;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Backend_api.Controllers  // Här finns det ett exempel på Single Responsibility Principle då den inte inehåller instanser. 
        // Här finns exempel på  Dependency Inversion Principle. Då jag använer mig av Högnivåmoduler som inte är beroende av lågnivåmoduler. Jag har även använt mig av  depency incjection i min Sqlcontext och Program fil. 
  
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {

        private readonly IProductHandler _producthandler;
       
        public ProductController(IProductHandler producthandler)
        {
            _producthandler = producthandler;
        }
        [HttpPost]
        public async Task <IActionResult> Create(ProductRequest req)
        {
           await _producthandler.CreateAsync(req);
            return Created("", null);
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var products = await _producthandler.GetAllAsync();
            return new OkObjectResult(products);
        }
    }
}

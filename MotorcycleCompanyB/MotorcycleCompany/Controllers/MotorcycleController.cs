using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MotorcycleCompany.IRepository;
using MotorcycleCompany.Models;
using Newtonsoft.Json;

namespace MotorcycleCompany.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MotorcycleController : ControllerBase
    {
        private readonly IMotorcycleRepository _motorcycleRepository;

        public MotorcycleController(IMotorcycleRepository motorcycleRepository)
        {
            _motorcycleRepository = motorcycleRepository;
        }

        [HttpGet]
        public Task<string> GetAll()
        {
            return this.GetMotorcycles();
        }

        private async Task<string> GetMotorcycles()
        {
            var motorcycles = await _motorcycleRepository.GetAll();
            return JsonConvert.SerializeObject(motorcycles);
        }

        [HttpGet("{id}")]
        public Task<string> Get(string id)
        {
            return this.GetMotorcycle(id);
        }

        private async Task<string> GetMotorcycle(string id)
        {
            var motorcycle = await _motorcycleRepository.Get(id);
            return JsonConvert.SerializeObject(motorcycle);
        }

        [HttpPost]
        public async Task<ActionResult<Motorcycle>> Post([FromBody] Motorcycle motorcycle)
        {
            await _motorcycleRepository.Add(motorcycle);


            return motorcycle;
           // return "";
        }

        [HttpPut("{id}")]
        public async Task<string> Put(string id, [FromBody] Motorcycle motorcycle)
        {
          
            return await _motorcycleRepository.Update(id, motorcycle);

        }

        [HttpDelete("{id}")]
        public async Task<string> Delete(string id)
        {
           
            await _motorcycleRepository.Remove(id);
            return id;

        }
    }
}
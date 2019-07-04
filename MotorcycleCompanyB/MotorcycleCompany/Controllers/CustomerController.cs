using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using MongoDB.Driver;
using MotorcycleCompany.DbModels;
using MotorcycleCompany.IRepository;
using MotorcycleCompany.Models;
using Newtonsoft.Json;

namespace MotorcycleCompany.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerController : ControllerBase
    {
        private readonly ICustomerRepository _customerRepository;


        public CustomerController(ICustomerRepository customerRepository)
        {
            _customerRepository = customerRepository;
        }

        [HttpGet]
        public Task<string> GetAll()
        {
            return this.GetCustomers();
        }

        private async Task<string> GetCustomers()
        {
            var customers = await _customerRepository.GetAll();
            return JsonConvert.SerializeObject(customers);
        }

        [HttpGet("{id}")]
        public Task<string> Get(string id)
        {
            return this.GetCustomer(id);
        }

        private async Task<string> GetCustomer(string id)
        {
            var customer = await _customerRepository.Get(id);
            return JsonConvert.SerializeObject(customer);
        }

        [HttpPost]
        public async Task<string> Post([FromBody] Customer customer)
        {
            await _customerRepository.Add(customer);
            return "";
        }

      
        [HttpPut("{id}")]
        public async Task<string> Put(string id, [FromBody] Customer customer)
        {
            
            return await _customerRepository.Update(id,customer);
            
        }

        [HttpDelete("{id}")]
        public async Task<string> Delete(string id)
        {
           
            await _customerRepository.Remove(id);
            return id;

        }
    }
}
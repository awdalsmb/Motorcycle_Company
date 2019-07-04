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
    public class EmployeeController : ControllerBase
    {
        private readonly IEmployeeRepository _employeeRepository;

        public EmployeeController(IEmployeeRepository employeeRepository)
        {
            _employeeRepository = employeeRepository;
        }

        [HttpGet]
        public Task<string> GetAll()
        {
            return this.GetEmployees();
        }

        private async Task<string> GetEmployees()
        {
            var employees = await _employeeRepository.GetAll();
            return JsonConvert.SerializeObject(employees);
        }

        [HttpGet("{id}")]
        public Task<string> Get(string id)
        {
            return this.GetEmployee(id);
        }

        private async Task<string> GetEmployee(string id)
        {
            var employee = await _employeeRepository.Get(id);
            return JsonConvert.SerializeObject(employee);
        }

        [HttpPost]
        public async Task<string> Post([FromBody] Employee employee)
        {
            await _employeeRepository.Add(employee);
            return "";
        }

        [HttpPut("{id}")]
        public async Task<string> Put(string id, [FromBody] Employee employee)
        {
          
            return await _employeeRepository.Update(id, employee);

        }

        [HttpDelete("{id}")]
        public async Task<string> Delete(string id)
        {
         
            await _employeeRepository.Remove(id);
            return id;

        }
    }
}
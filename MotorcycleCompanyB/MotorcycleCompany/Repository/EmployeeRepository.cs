using Microsoft.Extensions.Options;
using MongoDB.Driver;
using MotorcycleCompany.DbModels;
using MotorcycleCompany.IRepository;
using MotorcycleCompany.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MotorcycleCompany.Repository
{
    public class EmployeeRepository : IEmployeeRepository
    {
        private readonly ObjectContext _context = null;

        public EmployeeRepository(IOptions<Settings> settings)
        {
            _context = new ObjectContext(settings);
        }

        public async Task Add(Employee employee)
        {
            await _context.Employees.InsertOneAsync(employee);
        }

        public async Task<Employee> Get(string id)
        {
            var employee = Builders<Employee>.Filter.Eq("id", id);
            return await _context.Employees.Find(employee).FirstOrDefaultAsync();
        }

        public async Task<IEnumerable<Employee>> GetAll()
        {
            return await _context.Employees.Find(x => true).ToListAsync();
        }

        public async Task<DeleteResult> Remove(string id)
        {
            return await _context.Employees.DeleteOneAsync(Builders<Employee>.Filter.Eq("id", id));
        }

        public async Task<string> Update(string id, Employee employee)
        {
            await _context.Employees.ReplaceOneAsync(x => x.id == id, employee);
            return id;
        }
    }
}

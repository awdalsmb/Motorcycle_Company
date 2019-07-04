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
    public class CustomerRepository : ICustomerRepository
    {
        private readonly ObjectContext _context = null;

        public CustomerRepository(IOptions<Settings> settings)
        {
            _context = new ObjectContext(settings);
        }

        public async Task Add(Customer customer)
        {
            await _context.Customers.InsertOneAsync(customer);
        }

        public async Task<Customer> Get(string id)
        {
            var customer = Builders<Customer>.Filter.Eq("id", id);
            return await _context.Customers.Find(customer).FirstOrDefaultAsync();
        }

        public async Task<IEnumerable<Customer>> GetAll()
        {
            return await _context.Customers.Find(x => true).ToListAsync();
        }

        public async Task<DeleteResult> Remove(string id)
        {
            return await _context.Customers.DeleteOneAsync(Builders<Customer>.Filter.Eq("id", id));
        }

        public async Task<string> Update(string id, Customer customer)
        {
            await _context.Customers.ReplaceOneAsync(x => x.id == id, customer);
            return id;
        }
    }
}


using MongoDB.Driver;
using MotorcycleCompany.Models;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace MotorcycleCompany.IRepository
{
    public interface ICustomerRepository
    {
        Task<IEnumerable<Customer>> GetAll();
        Task<Customer> Get(string id);
        Task Add(Customer customer);
        Task<string> Update(string id, Customer customer);
        Task<DeleteResult> Remove(string id);


    }
}

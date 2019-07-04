using MongoDB.Driver;
using MotorcycleCompany.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MotorcycleCompany.IRepository
{
    public interface IEmployeeRepository
    {
        Task<IEnumerable<Employee>> GetAll();
        Task<Employee> Get(string id);
        Task Add(Employee employee);
        Task<string> Update(string id, Employee employee);
        Task<DeleteResult> Remove(string id);
    }
}

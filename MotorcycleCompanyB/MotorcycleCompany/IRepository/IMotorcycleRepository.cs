using MongoDB.Driver;
using MotorcycleCompany.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MotorcycleCompany.IRepository
{
    public interface IMotorcycleRepository
    {
        Task<IEnumerable<Motorcycle>> GetAll();
        Task<Motorcycle> Get(string id);
        Task Add(Motorcycle motorcycle);
        Task<string> Update(string id, Motorcycle motorcycle);
        Task<DeleteResult> Remove(string id);
    }
}

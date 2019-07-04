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
    public class MotorcycleRepository : IMotorcycleRepository
    {
        private readonly ObjectContext _context = null;

        public MotorcycleRepository(IOptions<Settings> settings)
        {
            _context = new ObjectContext(settings);
        }

        public async Task Add(Motorcycle motorcycle)
        {
            await _context.Motorcycles.InsertOneAsync(motorcycle);
        }

        public async Task<Motorcycle> Get(string id)
        {
            var motorcycle = Builders<Motorcycle>.Filter.Eq("id", id);
            return await _context.Motorcycles.Find(motorcycle).FirstOrDefaultAsync();
        }

        public async Task<IEnumerable<Motorcycle>> GetAll()
        {
            return await _context.Motorcycles.Find(x => true).ToListAsync();
        }

        public async Task<DeleteResult> Remove(string id)
        {
            return await _context.Motorcycles.DeleteOneAsync(Builders<Motorcycle>.Filter.Eq("id", id));
        }

        public async Task<string> Update(string id, Motorcycle motorcycle)
        {
            await _context.Motorcycles.ReplaceOneAsync(x => x.id == id, motorcycle);
            return id;
        }
    }
}

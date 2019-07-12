using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Options;
using MongoDB.Driver;
using MotorcycleCompany.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MotorcycleCompany.DbModels
{
    public class ObjectContext
    {
        public IConfigurationRoot Configuration { get; }
        private IMongoDatabase _database = null;

        public ObjectContext(IOptions<Settings> settings)
        {
            Configuration = settings.Value.iConfigurationRoot;
            settings.Value.ConnectionString = Configuration.GetSection("MongoConnection:ConnectionString").Value;
            settings.Value.Database = Configuration.GetSection("MongoConnection:Database").Value;

            var client = new MongoClient(settings.Value.ConnectionString);
            if(client != null)
            {
                _database = client.GetDatabase(settings.Value.Database);
            }
        }

        public IMongoCollection<Customer> Customers
        {
            get
            {
                return _database.GetCollection<Customer>("Customers");
            }
        }
        public IMongoCollection<Employee> Employees
        {
            get
            {
                return _database.GetCollection<Employee>("Employees");
            }
        }
        public IMongoCollection<Motorcycle> Motorcycles
        {
            get
            {
                return _database.GetCollection<Motorcycle>("Motorcycles");
            }
        }

        public IMongoCollection<Reservation> Reservation
        {
            get
            {
                return _database.GetCollection<Reservation>("Reservation");
            }
        }

        public IMongoCollection<DateReservation> DateReservation
        {
            get
            {
                return _database.GetCollection<DateReservation>("DateReservation");
            }
        }
    }
}

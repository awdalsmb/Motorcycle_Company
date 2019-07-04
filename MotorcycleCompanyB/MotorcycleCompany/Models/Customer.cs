using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace MotorcycleCompany.Models
{
    public class Customer
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string id { get; set; }

        public string firstName { get; set; }
        
        public string lastName { get; set; }


        [JsonConverter(typeof(StringEnumConverter))]
        [BsonRepresentation(BsonType.String)]
        public Gender gender { get; set; }


        public Customer(string id_, string firstName_, string lastName_, Gender gender_)
        {
            id = id_;
            firstName = firstName_;
            lastName = lastName_;
            gender = gender_;
        }

        public static explicit operator Customer(Task<Customer> v)
        {
            throw new NotImplementedException();
        }
    }


  

}

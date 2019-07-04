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
    public class Employee
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string id { get; set; }

        public string firstName { get; set; }

        public string lastName { get; set; }

        public string salary { get; set; }

        public string position { get; set; }

        [JsonConverter(typeof(StringEnumConverter))]
        [BsonRepresentation(BsonType.String)]
        public Gender gender { get; set; }

        [DataType(DataType.Date)]
        [JsonConverter(typeof(JsonDateConverter))]
        [BsonRepresentation(BsonType.DateTime)]
        public DateTime dateOfEmployment { get; set; }

        public Employee(string id_, string firstName_, string lastName_, string salary_, string position_, Gender gender_, DateTime dateOfEmployment_)
        {
            id = id_;
            firstName = firstName_;
            lastName = lastName_;
            salary = salary_;
            position = position_;
            gender = gender_;
            dateOfEmployment = dateOfEmployment_;
        }


    }

    internal class JsonDateConverter : IsoDateTimeConverter
    {
        public JsonDateConverter()
        {
            DateTimeFormat = "yyyy-MM-dd";
        }
    }
}

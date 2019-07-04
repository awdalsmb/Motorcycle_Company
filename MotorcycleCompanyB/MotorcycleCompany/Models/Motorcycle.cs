using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MotorcycleCompany.Models
{
    public class Motorcycle
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string id { get; set; }

        public string brand { get; set; }

        [JsonConverter(typeof(StringEnumConverter))]
        [BsonRepresentation(BsonType.String)]
        public Classification classification { get; set; }

        public string model { get; set; }

        public string power { get; set; }

        public string weight { get; set; }

        public Motorcycle(string id_, string brand_, Classification classification_, string model_, string power_, string weight_)
        {
            id = id_;
            brand = brand_;
            classification = classification_;
            model = model_;
            power = power_;
            weight = weight_;
        }
    }
}

using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace MotorcycleCompany.Models
{
    public class Reservation
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        [BsonElement("Day")]
        public string Day { get; set; }
        [BsonElement("G8")]
        public int G8 { get; set; }
        [BsonElement("G9")]
        public int G9 { get; set; }
        [BsonElement("G10")]
        public int G10 { get; set; }
        [BsonElement("G11")]
        public int G11 { get; set; }
        [BsonElement("G12")]
        public int G12 { get; set; }
        [BsonElement("G13")]
        public int G13 { get; set; }
        [BsonElement("G14")]
        public int G14 { get; set; }
        [BsonElement("G15")]
        public int G15 { get; set; }
        [BsonElement("G16")]
        public int G16 { get; set; }
    }
}

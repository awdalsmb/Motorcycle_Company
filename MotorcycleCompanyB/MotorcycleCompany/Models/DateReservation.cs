using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;


namespace MotorcycleCompany.Models
{
    public class DateReservation
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        [BsonElement("Id_reservation")]
        public string Id_reservation { get; set; }
        [BsonElement("Hour")]
        public int Hour { get; set; }
        [BsonElement("Id_customer")]
        public string Id_customer { get; set; }
        [BsonElement("Id_motocycle")]
        public string Id_motocycle { get; set; }
    }
}

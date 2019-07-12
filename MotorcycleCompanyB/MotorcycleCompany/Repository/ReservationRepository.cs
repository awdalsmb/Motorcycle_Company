using System;
using System.Collections.Generic;
using System.Linq;
using MongoDB.Driver;
using MotorcycleCompany.Models;
using Microsoft.Extensions.Options;
using MotorcycleCompany.DbModels;
using MotorcycleCompany.IRepository;
using System.Threading.Tasks;

namespace MotorcycleCompany.Repository
{
    public class ReservationRepository
    {
        private readonly ObjectContext _context = null;

        public ReservationRepository(IOptions<Settings> settings)
        {
            _context = new ObjectContext(settings);
        }

        public List<Reservation> Get()
        {
            return _context.Reservation.Find(res => true).ToList();
        }

        public Reservation Get(string id)
        {
            return _context.Reservation.Find<Reservation>(res => res.Id == id).FirstOrDefault();
        }

        public Reservation GetDay(string szDay)
        {
            return _context.Reservation.Find<Reservation>(dzien => dzien.Day == szDay).FirstOrDefault();
        }

        public Reservation Create(Reservation res)
        {
            _context.Reservation.InsertOne(res);
            return res;
        }

        public void Update(string id, Reservation resIn)
        {
            _context.Reservation.ReplaceOne(res => res.Id == id, resIn);
        }

        public void Remove(Reservation resIn)
        {
            _context.Reservation.DeleteOne(res => res.Id == resIn.Id);
        }

        public void Remove(string id)
        {
            _context.Reservation.DeleteOne(res => res.Id == id);
        }

        /* 
         * Dane Klienta..
         */
        public List<DateReservation> GetDate()
        {
            return _context.DateReservation.Find(date => true).ToList();
        }

        public DateReservation GetDate(string id)
        {
            return _context.DateReservation.Find<DateReservation>(date => date.Id == id).FirstOrDefault();
        }

        public DateReservation GetId(string szid, int h)
        {
            return _context.DateReservation.Find<DateReservation>(id => id.Id_reservation == szid && id.Hour == h).FirstOrDefault();
        }

        public DateReservation CreateDate(DateReservation data)
        {
            _context.DateReservation.InsertOne(data);
            return data;
        }

        public void UpdateDate(string id, DateReservation dateIn)
        {
            _context.DateReservation.ReplaceOne(date => date.Id == id, dateIn);
        }

        public void RemoveDate(DateReservation dateIn)
        {
            _context.DateReservation.DeleteOne(date => date.Id == dateIn.Id);
        }

        public void RemoveDate(string id)
        {
            _context.DateReservation.DeleteOne(date => date.Id == id);
        }
    }
}

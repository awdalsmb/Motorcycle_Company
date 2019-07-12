using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MotorcycleCompany.Models;

namespace MotorcycleCompany.Controllers
{
    [ApiController]
    public class ReservationDateController : ControllerBase
    {
        private readonly Repository.ReservationRepository _dateService;

        public ReservationDateController(Repository.ReservationRepository dateService)
        {
            _dateService = dateService;
        }

        [Route("api/Date")]
        [HttpGet]
        public ActionResult<List<DateReservation>> Get()
        {
            return _dateService.GetDate();
        }

        [Route("api/Date/{id}")]
        [HttpGet("{id:length(24)}", Name = "GetDate")]
        public ActionResult<DateReservation> Get(string id)
        {
            var date = _dateService.GetDate(id);

            if (date == null)
            {
                return NotFound();
            }

            return date;
        }

        [Route("api/Date/Rez/{szRez}/{Hour}")]
        [HttpGet("{szRez:length(24)}/{Hour:length(24)}")]
        public ActionResult<DateReservation> GetId(string szRez, int Hour)
        {
            var date = _dateService.GetId(szRez, Hour);

            if (date == null)
            {
                return NotFound();
            }

            return date;
        }

        [Route("api/Date/Create")]
        [HttpPost]
        public ActionResult<DateReservation> Create([FromBody]DateReservation date)
        {
            _dateService.CreateDate(date);

            return CreatedAtRoute("GetDate", new { id = date.Id.ToString() }, date);
        }

        [Route("api/Date/Update/{id}")]
        [HttpPut("{id:length(24)}")]
        public IActionResult Update(string id, [FromBody]DateReservation dateIn)
        {
            var date = _dateService.GetDate(id);

            if (date == null)
            {
                return NotFound();
            }

            _dateService.UpdateDate(id, dateIn);

            return NoContent();
        }

        [Route("api/Date/Delete/{id}")]
        [HttpDelete("{id:length(24)}")]
        public IActionResult Delete(string id)
        {
            var date = _dateService.GetDate(id);

            if (date == null)
            {
                return NotFound();
            }

            _dateService.RemoveDate(date.Id);

            return NoContent();
        }
    }
}

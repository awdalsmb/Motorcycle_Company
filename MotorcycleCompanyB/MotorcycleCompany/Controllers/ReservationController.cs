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
    public class ReservationController : ControllerBase
    {
        private readonly Repository.ReservationRepository _resService;

        public ReservationController(Repository.ReservationRepository resService)
        {
            _resService = resService;
        }

        [Route("api/Rez")]
        [HttpGet]
        public ActionResult<List<Reservation>> Get()
        {
            return _resService.Get();
        }

        [Route("api/Rez/{id}")]
        [HttpGet("{id:length(24)}", Name = "GetRez")]
        public ActionResult<Reservation> Get(string id)
        {
            var res = _resService.Get(id);

            if (res == null)
            {
                return NotFound();
            }

            return res;
        }

        [Route("api/Rez/Day/{szDay}")]
        [HttpGet("{szDay:length(24)}", Name = "GetRezDz")]
        public ActionResult<Reservation> GetDzien(string szDay)
        {
            var day = _resService.GetDay(szDay);

            if (day == null)
            {
                return NotFound();
            }

            return day;
        }

        [Route("api/Rez/Create")]
        [HttpPost]
        public ActionResult<Reservation> Create([FromBody]Reservation res)
        {
            _resService.Create(res);

            return CreatedAtRoute("GetRez", new { id = res.Id.ToString() }, res);
        }

        [Route("api/Rez/Update/{id}")]
        [HttpPut("{id:length(24)}")]
        public IActionResult Update(string id, [FromBody]Reservation resIn)
        {
            var res = _resService.Get(id);

            if (res == null)
            {
                return NotFound();
            }

            _resService.Update(id, resIn);

            return NoContent();
        }

        [Route("api/Rez/Delete/{id}")]
        [HttpDelete("{id:length(24)}")]
        public IActionResult Delete(string id)
        {
            var res = _resService.Get(id);

            if (res == null)
            {
                return NotFound();
            }

            _resService.Remove(res.Id);

            return NoContent();
        }
    }
}

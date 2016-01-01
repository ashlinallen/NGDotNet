using NGDotNet.DAL;
using NGDotNet.Model.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace NGDotNet.API.Controllers
{
    public class AvengerController : ApiController
    {
        private readonly EfContext _db = new EfContext();

        // GET api/<controller>
        [HttpGet]
        public IEnumerable<Avenger> Get()
        {
            return _db.Avengers.AsEnumerable();
        }

        // GET api/<controller>/5
        public Avenger Get(int id)
        {
            Avenger Avenger = _db.Avengers.Find(id);
            if (Avenger == null)
            {
                throw new HttpResponseException(Request.CreateResponse(HttpStatusCode.NotFound));
            }

            return Avenger;
        }

        // POST api/<controller>
        public HttpResponseMessage Post(Avenger Avenger)
        {
            if (ModelState.IsValid)
            {
                _db.Avengers.Add(Avenger);
                _db.SaveChanges();

                HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.Created, Avenger);
                response.Headers.Location = new Uri(Url.Link("DefaultApi", new { id = Avenger.Id }));
                return response;
            }
            else
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
            }
        }

        // PUT api/<controller>/5
        public HttpResponseMessage Put(int id, Avenger Avenger)
        {
            if (!ModelState.IsValid)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
            }

            if (id != Avenger.Id)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest);
            }

            _db.Entry(Avenger).State = EntityState.Modified;

            try
            {
                _db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.NotFound, ex);
            }

            return Request.CreateResponse(HttpStatusCode.OK);
        }

        // DELETE api/<controller>/5
        public HttpResponseMessage Delete(int id)
        {
            Avenger Avenger = _db.Avengers.Find(id);
            if (Avenger == null)
            {
                return Request.CreateResponse(HttpStatusCode.NotFound);
            }

            _db.Avengers.Remove(Avenger);

            try
            {
                _db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.NotFound, ex);
            }

            return Request.CreateResponse(HttpStatusCode.OK, Avenger);
        }

        protected override void Dispose(bool disposing)
        {
            _db.Dispose();
            base.Dispose(disposing);
        }
    }
}
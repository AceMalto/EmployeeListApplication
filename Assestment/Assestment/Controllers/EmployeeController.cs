using Assestment.Models;
using System.Linq;
using System.Web.Http;
using System.Web.Http.Cors;

namespace Assestment.Controllers
{
    [EnableCors(origins: "http://localhost:5173", headers: "*", methods: "*")]
    public class EmployeeController : ApiController
    {
        private AppDbContext db = new AppDbContext();

        [HttpGet]
        public IHttpActionResult GetEmployees()
        {
            return Ok(db.Employees.ToList());
        }

        [HttpGet]
        public IHttpActionResult GetEmployee(int id)
        {
            var emp = db.Employees.Find(id);
            return emp == null ? (IHttpActionResult)NotFound() : Ok(emp);
        }

        [HttpPost]
        public IHttpActionResult CreateEmployee(Employee emp)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            db.Employees.Add(emp);
            db.SaveChanges();

            return Ok(emp);
        }

        [HttpPut]
        public IHttpActionResult UpdateEmployee(int id, Employee emp)
        {
            var existing = db.Employees.Find(id);
            if (existing == null)
                return NotFound();

            existing.Name = emp.Name;
            existing.Position = emp.Position;
            existing.Salary = emp.Salary;

            db.SaveChanges();
            return Ok(existing);
        }

        [HttpDelete]
        public IHttpActionResult DeleteEmployee(int id)
        {
            var emp = db.Employees.Find(id);
            if (emp == null)
                return NotFound();

            db.Employees.Remove(emp);
            db.SaveChanges();
            return Ok();
        }
    }
}
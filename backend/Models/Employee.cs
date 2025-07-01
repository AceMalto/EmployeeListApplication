using System;

namespace EmployeeAPI.Models
{
    public class Employee
    {
        public int Id { get; set; } // Primary key
        public string Name { get; set; }
        public string Position { get; set; }
        public string Department { get; set; }
        public decimal Salary { get; set; }
    }
}

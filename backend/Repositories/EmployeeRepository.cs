using EmployeeAPI.Data;
using EmployeeAPI.Models;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;

namespace EmployeeAPI.Repositories
{
    public class EmployeeRepository : IEmployeeRepository
    {
        private readonly AppDbContext _context;

        public EmployeeRepository(AppDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Employee>> GetAll()
        {
            return await _context.Employees
                .FromSqlRaw("EXEC GetEmployees")
                .ToListAsync();
        }

        public async Task<Employee> GetById(int id)
        {
            var param = new SqlParameter("@Id", id);
            return await _context.Employees
                .FromSqlRaw("EXEC GetEmployeeById @Id", param)
                .FirstOrDefaultAsync();
        }

        public async Task Create(Employee emp)
        {
            var parameters = new[]
            {
                new SqlParameter("@Name", emp.Name),
                new SqlParameter("@Position", emp.Position),
                new SqlParameter("@Department", emp.Department),
                new SqlParameter("@Salary", emp.Salary),
            };

            await _context.Database.ExecuteSqlRawAsync("EXEC CreateEmployee @Name, @Position, @Department, @Salary", parameters);
        }

        public async Task Update(Employee emp)
        {
            var parameters = new[]
            {
                new SqlParameter("@Id", emp.Id),
                new SqlParameter("@Name", emp.Name),
                new SqlParameter("@Position", emp.Position),
                new SqlParameter("@Department", emp.Department),
                new SqlParameter("@Salary", emp.Salary),
            };

            await _context.Database.ExecuteSqlRawAsync("EXEC UpdateEmployee @Id, @Name, @Position, @Department, @Salary", parameters);
        }

        public async Task Delete(int id)
        {
            var param = new SqlParameter("@Id", id);
            await _context.Database.ExecuteSqlRawAsync("EXEC DeleteEmployee @Id", param);
        }
    }
}

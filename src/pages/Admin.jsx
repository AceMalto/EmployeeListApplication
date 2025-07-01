import React, { useEffect, useState } from 'react';

const Admin = ({ editingEmployee }) => {
    const [form, setForm] = useState({ Name: '', Position: '', Salary: '' });

  useEffect(() => {
    if (editingEmployee) {
      setForm(editingEmployee);
    } else {
      setForm({ Name: '', Position: '', Salary: '' });
    }
  }, [editingEmployee]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = editingEmployee
      ? `http://localhost:xxxx/api/employee/${editingEmployee.EmployeeId}`
      : 'http://localhost:xxxx/api/employee';

    editingEmployee
      ? await axios.put(url, form)
      : await axios.post(url, form);

    setForm({ Name: '', Position: '', Salary: '' });

  };
    return (
        <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow-md border border-gray-200">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        {editingEmployee ? 'Update Employee' : 'Add New Employee'}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <input
            type="text"
            placeholder="e.g. John Doe"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={form.Name}
            onChange={(e) => setForm({ ...form, Name: e.target.value })}
            required
          />
        </div>

        {/* Position */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Position</label>
          <input
            type="text"
            placeholder="e.g. Software Engineer"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={form.Position}
            onChange={(e) => setForm({ ...form, Position: e.target.value })}
          />
        </div>

        {/* Salary */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Salary</label>
          <input
            type="number"
            placeholder="e.g. 50000"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={form.Salary}
            onChange={(e) => setForm({ ...form, Salary: e.target.value })}
          />
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
          >
            {editingEmployee ? 'Update Employee' : 'Add Employee'}
          </button>
        </div>
      </form>
    </div>
    )
}

export default Admin


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EmployeeForm from './employeeForm';
import EmployeeDetail from './employeeDetail';

const Home = () => {
    const [employees, setEmployees] = useState([]);
    const [editingEmployee, setEditingEmployee] = useState(null);
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [showForm, setShowForm] = useState(false);


    const API_BASE = 'https://localhost:44325/api/employee';

    // Fetch all employees
    const fetchEmployees = async () => {
        try {
            const res = await axios.get(API_BASE);
            setEmployees(res.data);
        } catch (err) {
            console.error('Error fetching employees:', err);
        }
    };

    useEffect(() => {
        fetchEmployees();
    }, []);

    // Delete employee
    const deleteEmployee = async (id) => {
        if (!window.confirm('Are you sure you want to delete this employee?')) return;

        try {
            await axios.delete(`${API_BASE}/${id}`);
            fetchEmployees();
        } catch (err) {
            console.error('Error deleting employee:', err);
        }
    };

    // Add or Update employee
    const handleSave = async (employeeData) => {
        try {
            if (editingEmployee) {
                // Update
                await axios.put(`${API_BASE}/${editingEmployee.EmployeeId}`, employeeData);
            } else {
                // Create
                await axios.post(API_BASE, employeeData);
            }

            setEditingEmployee(null);
            setShowForm(false);
            fetchEmployees();
        } catch (err) {
            console.error('Error saving employee:', err);
        }
    };

    // Edit employee
    const handleEdit = (emp) => {
        setEditingEmployee(emp);
        setShowForm(true);
    };

    // View employee
    const handleView = (emp) => {
        setSelectedEmployee(emp);
    };

    // Form cancel handler
    const handleCancel = () => {
        setEditingEmployee(null);
        setShowForm(false);
    };

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-6">Employee Management</h1>

            <button
                onClick={() => {
                    setShowForm(!showForm);
                    setEditingEmployee(null);
                }}
                className="mb-4 bg-green-600 text-white px-4 py-2 rounded"
            >
                {showForm ? 'Cancel' : 'Add Employee'}
            </button>

            {showForm && (
                <EmployeeForm
                    onSave={handleSave}
                    editingEmployee={editingEmployee}
                    onCancel={handleCancel}
                />
            )}

            <table className="w-full border mt-4">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="p-2">Name</th>
                        <th className="p-2">Position</th>
                        <th className="p-2">Salary</th>
                        <th className="p-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((emp) => (
                        <tr key={emp.EmployeeId} className="border-b">
                            <td className="p-2">{emp.Name}</td>
                            <td className="p-2">{emp.Position}</td>
                            <td className="p-2">₱{emp.Salary}</td>
                            <td className="p-2 space-x-2">
                                <button
                                    onClick={() => handleView(emp)}
                                    className="bg-blue-500 text-white px-2 py-1 rounded"
                                >
                                    View
                                </button>
                                <button
                                    onClick={() => handleEdit(emp)}
                                    className="bg-yellow-500 text-white px-2 py-1 rounded"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => deleteEmployee(emp.EmployeeId)}
                                    className="bg-red-600 text-white px-2 py-1 rounded"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {selectedEmployee && (
                <EmployeeDetail
                    employee={selectedEmployee}
                    onClose={() => setSelectedEmployee(null)}
                />
            )}
        </div>
    );
};

export default Home;


import React, { useEffect, useState } from 'react';
import axios from 'axios';

const employeeForm = ({ editingEmployee }) => {
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

        if (editingEmployee) {
            await axios.put(`https://localhost:44325/api/employee/${form.Id}`, form);
        } else {
            await axios.post('https://localhost:44325/api/employee', form);
        }

        setForm({ Name: '', Position: '', Salary: '' });
    };
    
    return (
        <form onSubmit={handleSubmit} className="mb-6">
            <div className="grid grid-cols-3 gap-4">
                <input type="text" placeholder="Name" className="border p-2" value={form.Name}
                onChange={(e) => setForm({ ...form, Name: e.target.value })} required />
                <input type="text" placeholder="Position" className="border p-2" value={form.Position}
                onChange={(e) => setForm({ ...form, Position: e.target.value })} />
                <input type="number" placeholder="Salary" className="border p-2" value={form.Salary}
                onChange={(e) => setForm({ ...form, Salary: e.target.value })} />
            </div>
            <button type="submit" className="mt-4 bg-green-600 text-white px-4 py-2 rounded">
                {editingEmployee ? 'Update Employee' : 'Add Employee'}
            </button>
        </form>
    )
}

export default employeeForm
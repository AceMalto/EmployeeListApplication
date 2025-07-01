import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EmployeeForm from './Admin';
import EmployeeDetail from './EmployeeDetail';

const customers = () => {
    const [employees, setEmployees] = useState([]);
    const [editingEmployee, setEditingEmployee] = useState(null);
    const [selectedEmployee, setSelectedEmployee] = useState(null);

    const fetchEmployees = async () => {
        const res = await axios.get('http://localhost:xxxx/api/employee'); 
        setEmployees(res.data);
    };

    useEffect(() => {
        fetchEmployees();
    }, []);

    const deleteEmployee = async (id) => {
        await axios.delete(`http://localhost:xxxx/api/employee/${id}`);
        fetchEmployees();
    };
    return (
        <div>customers</div>
    )
}

export default customers
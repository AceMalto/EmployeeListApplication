import React from 'react'

const employeeDetail = ({ employee, onClose }) => {
    return (
        <div className="fixed top-0 left-0 w-full h-full bg-black/40 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg w-96 shadow-xl relative">
                <h2 className="text-xl font-bold mb-2">Employee Details</h2>
                <p><strong>Name:</strong> {employee.Name}</p>
                <p><strong>Position:</strong> {employee.Position}</p>
                <p><strong>Salary:</strong> ₱{employee.Salary}</p>

                <button onClick={onClose} className="absolute top-2 right-2 text-red-600 font-bold text-lg">×</button>
            </div>
        </div>
    )
}

export default employeeDetail
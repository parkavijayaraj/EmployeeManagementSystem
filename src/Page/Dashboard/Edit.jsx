import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

function Edit({ employees, selectedemployee, setEmployees, setISEditing }) {
  const id = selectedemployee.id;

  
  const [employeeName, setEmployeeName] = useState('');
  const [email, setEmail] = useState('');
  const [department, setDepartment] = useState('');
  const [role, setRole] = useState('');
  const [date, setDate] = useState('');
  const [status, setStatus] = useState('');

  
  useEffect(() => {
    if (selectedemployee) {
      setEmployeeName(selectedemployee.employeeName || '');
      setEmail(selectedemployee.email || '');
      setDepartment(selectedemployee.department || '');
      setRole(selectedemployee.role || '');
      setDate(selectedemployee.date || '');
      setStatus(selectedemployee.status || '');
    }
  }, [selectedemployee]);

  const handleUpdate = (e) => {
    e.preventDefault();

    if (!employeeName || !email || !department || !role || !date || !status) {
      return Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'All fields are required',
        showConfirmButton: true
      });
    }

    const updatedEmployee = {
      id,
      employeeName,
      email,
      department,
      role,
      date,
      status
    };

    const updatedEmployees = [...employees];
    const index = updatedEmployees.findIndex((emp) => emp.id === id);

    if (index !== -1) {
      updatedEmployees[index] = updatedEmployee;
      setEmployees(updatedEmployees);

      Swal.fire({
        icon: 'success',
        title: 'Updated',
        text: `${updatedEmployee.employeeName}'s data has been updated`,
        showConfirmButton: false,
        timer: 1500
      });

      setISEditing(false);
    } else {
      console.error("Employee not found");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md w-full max-w-6xl mx-auto p-12 bg-blue-200 rounded-lg shadow-lg overflow-x-auto">
      <form onSubmit={handleUpdate} className="space-y-4">
        <h1 className="text-2xl font-semibold mb-4">Update Employee</h1>

        {/* Employee Name */}
        <label htmlFor="employeeName" className="block text-sm font-medium text-gray-600">
          Employee Name
        </label>
        <input
          id="employeeName"
          type="text"
          name="employeeName"
          value={employeeName}
          onChange={(e) => setEmployeeName(e.target.value)}
          className="border rounded-md p-2 w-full"
        />

        {/* Email */}
        <label htmlFor="email" className="block text-sm font-medium text-gray-600">
          Email
        </label>
        <input
          id="email"
          type="text"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border rounded-md p-2 w-full"
        />

        {/* Department */}
        <label htmlFor="department" className="block text-sm font-medium text-gray-600">
          Department
        </label>
        <select
          id="department"
          name="department"
          value={department}
          onChange={(e) => {
            setDepartment(e.target.value);
          }}
          className="border rounded-md p-2 w-full"
        >
          <option value="" disabled hidden>Select Department</option>
          <option value="HR">HR</option>
          <option value="Finance">Finance</option>
          <option value="IT">IT</option>
          <option value="Sales">Sales</option>
          <option value="Marketing">Marketing</option>
          <option value="Operations">Operations</option>
          <option value="Support">Support</option>
        </select>

        {/* Role */}
        <label htmlFor="role" className="block text-sm font-medium text-gray-600">
          Role
        </label>
        <select
          id="role"
          name="role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="border rounded-md p-2 w-full"
          disabled={!department}
        >
          <option value="">Select Role</option>
          {department === "HR" && (
            <>
              <option value="HR Manager">HR Manager</option>
              <option value="Recruiter">Recruiter</option>
              <option value="HR Executive">HR Executive</option>
            </>
          )}
          {department === "Finance" && (
            <>
              <option value="Accountant">Accountant</option>
              <option value="Financial Analyst">Financial Analyst</option>
              <option value="Auditor">Auditor</option>
            </>
          )}
          {department === "IT" && (
            <>
              <option value="Software Engineer">Software Engineer</option>
              <option value="Frontend Developer">Frontend Developer</option>
              <option value="Backend Developer">Backend Developer</option>
              <option value="Full Stack Developer">Full Stack Developer</option>
              <option value="System Administrator">System Administrator</option>
            </>
          )}
          {department === "Sales" && (
            <>
              <option value="Sales Executive">Sales Executive</option>
              <option value="Sales Manager">Sales Manager</option>
              <option value="Business Development Executive">Business Development Executive</option>
            </>
          )}
          {department === "Marketing" && (
            <>
              <option value="Marketing Executive">Marketing Executive</option>
              <option value="Digital Marketer">Digital Marketer</option>
              <option value="SEO Specialist">SEO Specialist</option>
            </>
          )}
          {department === "Operations" && (
            <>
              <option value="Operations Executive">Operations Executive</option>
              <option value="Operations Manager">Operations Manager</option>
            </>
          )}
          {department === "Support" && (
            <>
              <option value="Support Executive">Support Executive</option>
              <option value="Customer Service Representative">Customer Service Representative</option>
              <option value="Technical Support">Technical Support</option>
            </>
          )}
        </select>

        {/* Date */}
        <label htmlFor="date" className="block text-sm font-medium text-gray-600">
          Date
        </label>
        <input
          id="date"
          type="date"
          name="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border rounded-md p-2 w-full"
        />

        {/* Status */}
        <label htmlFor="status" className="block text-sm font-medium text-gray-600">
          Status
        </label>
        <input
          id="status"
          type="text"
          name="status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="border rounded-md p-2 w-full"
        />

        {/* Buttons */}
        <div className="mt-4 flex space-x-2">
          <input
            type="submit"
            value="Update"
            className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 cursor-pointer"
          />
          <input
            type="button"
            value="Cancel"
            onClick={() => setISEditing(false)}
            className="bg-gray-500 text-white rounded-md px-4 py-2 hover:bg-gray-400 cursor-pointer"
          />
        </div>
      </form>
    </div>
  );
}

export default Edit;

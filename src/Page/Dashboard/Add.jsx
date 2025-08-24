import React, { useState, useRef, useEffect } from "react";
import Swal from "sweetalert2";

function Add({ employees, setEmployees, setIsAdding }) {
  const [employeeName, setEmployeeName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  const [role, setRole] = useState("");
  const [date, setDate] = useState("");
  const [status, setstatus] = useState("");
  const textInput = useRef(null);

  useEffect(() => {
    if (textInput.current) {
      textInput.current.focus();
    }
  }, []);

  const addEmployee = (newEmployee) => {
    setEmployees((prevEmployees) => [...prevEmployees, newEmployee]);
  };

  const handleAdd = (e) => {
    e.preventDefault();

    if (!employeeName || !email || !department || !role || !date || !status) {
      return Swal.fire({
        icon: "error",
        title: "Error",
        text: "All fields are required.",
        showConfirmButton: true,
        timer: 1500,
      });
    }

    const id = employees.length + 1;
    const newEmployee = {
      id,
      employeeName,
      email,
      department,
      role,
      date,
      status,
    };

    addEmployee(newEmployee);

    setIsAdding(false);

    Swal.fire({
      icon: "success",
      title: "Added",
      text: `${employeeName}'s data has been added`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-blue-500">
    <div className="w-full max-w-6xl mx-auto p-12 bg-blue-200 rounded-lg shadow-lg overflow-x-auto">

      <form onSubmit={handleAdd} className="space-y-4 bg-blue">
        <h1 className="text-2xl font-semibold mb-4">Add Employee</h1>
        <label
          htmlFor="firstName"
          className="block text-sm font-medium text-gray-600"
        >
          Employee Name
        </label>
        <input
          id="employeename"
          type="text"
          name="employeename"
          value={employeeName}
          onChange={(e) => setEmployeeName(e.target.value)}
          placeholder="Enter Employee Name"  
          className="border rounded-md p-2 w-full"
        />

        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-600"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter EmailId"  
          className="border rounded-md p-2 w-full"
        />

       <label
  htmlFor="department"
  className="block text-sm font-medium text-gray-600"
>
  Department
</label>
<select
  id="department"
  name="department"
  value={department}
  onChange={(e) => setDepartment(e.target.value)}
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


        <label
  htmlFor="role"
  className="block text-sm font-medium text-gray-600"
>
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
  <option value="" >Select Role</option>
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


        <label
          htmlFor="date"
          className="block text-sm font-medium text-gray-600"
        >
          Date
        </label>
        <input
          id="date"
          type="date"
          name="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
            placeholder="Select Date"  
          className="border rounded-md p-2 w-full"
        />

        <label
          htmlFor="status"
          className="block text-sm font-medium text-gray-600"
        >
          Status
        </label>
        <select
          id="status"
          name="status"
          value={status}
          onChange={(e) => setstatus(e.target.value)}
          className="border rounded-md p-2 w-full"
        >
          <option value="">Select Status </option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>


        <div className="mt-4 flex space-x-2">
          <input
            type="submit"
            value="Add"
            className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 cursor-pointer"
          />
          <input
            type="button"
            value="Cancel"
            onClick={() => setIsAdding(false)}
            className="bg-gray-500 text-white rounded-md px-4 py-2 hover:bg-gray-400 cursor-pointer"
          />
        </div>
      </form>
    </div>
    </div>
  );
}

export default Add;

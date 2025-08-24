import React, { useState } from "react";
import { employeesData } from "./employeesData";

function EmployeeTable() {
  const [searchTerm, setSearchTerm] = useState("");
  const [departmentFilter, setDepartmentFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");

  // Filtered employees
  const filteredEmployees = employeesData.filter((emp) => {
    // Search (by name or email)
    const matchesSearch =
      emp.employeeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emp.email.toLowerCase().includes(searchTerm.toLowerCase());

    // Department filter
    const matchesDepartment =
      departmentFilter === "All" || emp.department === departmentFilter;

    // Status filter
    const matchesStatus =
      statusFilter === "All" || emp.status === statusFilter;

    return matchesSearch && matchesDepartment && matchesStatus;
  });

  return (
    <div className="p-6 max-w-6xl mx-auto bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4 text-blue-700">
        Employee List
      </h1>

      {/* Search + Filters */}
      <div className="flex flex-wrap gap-4 mb-6">
        {/* Search */}
        <input
          type="text"
          placeholder="Search by Name or Email"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border rounded-md p-2 w-full sm:w-1/3"
        />
        {/* Department filter */}
        <select
          value={departmentFilter}
          onChange={(e) => setDepartmentFilter(e.target.value)}
          className="border rounded-md p-2"
        >
          <option value="All">All Departments</option>
          <option value="HR">HR</option>
          <option value="Finance">Finance</option>
          <option value="IT">IT</option>
          <option value="Sales">Sales</option>
          <option value="Marketing">Marketing</option>
          <option value="Operations">Operations</option>
          <option value="Support">Support</option>
        </select>

        {/* Status filter */}
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="border rounded-md p-2"
        >
          <option value="All">All Status</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </div>

      {/* Employee Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-blue-100 text-left">
              <th className="border p-2">Name</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Department</th>
              <th className="border p-2">Role</th>
              <th className="border p-2">Date</th>
              <th className="border p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredEmployees.length > 0 ? (
              filteredEmployees.map((emp) => (
                <tr key={emp.id} className="hover:bg-gray-50">
                  <td className="border p-2">{emp.employeeName}</td>
                  <td className="border p-2">{emp.email}</td>
                  <td className="border p-2">{emp.department}</td>
                  <td className="border p-2">{emp.role}</td>
                  <td className="border p-2">{emp.date}</td>
                  <td
                    className={`border p-2 font-semibold ${
                      emp.status === "Active"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {emp.status}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center p-4 text-gray-500">
                  No employees found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EmployeeTable;

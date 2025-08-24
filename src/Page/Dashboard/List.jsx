import React, { useState } from "react";

function List({ employees, handleEdit, handleDelete }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [departmentFilter, setDepartmentFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const employeesPerPage = 8;
  
  const filteredEmployees = employees.filter((employee) => {
    const matchesSearch =
      employee.employeeName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      employee.email.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesDepartment = departmentFilter
      ? employee.department === departmentFilter
      : true;

    const matchesStatus = statusFilter
      ? employee.status === statusFilter
      : true;

    return matchesSearch && matchesDepartment && matchesStatus;
});
   // Pagination Logic
  const indexOfLastEmployee = currentPage * employeesPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  const currentEmployees = filteredEmployees.slice(
    indexOfFirstEmployee,
    indexOfLastEmployee
  );
  const totalPages = Math.ceil(filteredEmployees.length / employeesPerPage);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="overflow-x-auto w-screen p-4">
      <div className="flex flex-wrap gap-4 mb-4">
        {/* Search name or email */}
        <input
          type="text"
          placeholder="Search by Name or Email"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border p-2 rounded w-64"
        />

        {/* Department Filter */}
        <select
          value={departmentFilter}
          onChange={(e) => setDepartmentFilter(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="">All Departments</option>
          <option value="HR">HR</option>
          <option value="IT">IT</option>
          <option value="SDE">SDE</option>
          <option value="Finance">Finance</option>
        </select>

        {/* Status Filter */}
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="">All Status</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </div>

      {/* Employee Table */}
      <table className="w-full border-collapse">
        <thead className="bg-blue-500 text-white">
          <tr>
            <th className="px-4 py-2 text-center">Id</th>
            <th className="px-4 py-2 text-center">Employee Name</th>
            <th className="px-4 py-2 text-center">Email</th>
            <th className="px-4 py-2 text-center">Department</th>
            <th className="px-4 py-2 text-center">Role</th>
            <th className="px-4 py-2 text-center">Date Of Join</th>
            <th className="px-4 py-2 text-center">Status</th>
            <th className="px-4 py-2 col-span-2 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {currentEmployees.length > 0 ? (
            currentEmployees.map((employee, i) => (
              <tr
                key={employee.id}
                className={i % 2 === 0 ? "bg-white" : "bg-gray-100"}
              >
                <td className="border px-4 py-2 text-center">{i + 1}</td>
                <td className="border px-4 py-2 text-center">{employee.employeeName}</td>
                <td className="border px-4 py-2 text-center">{employee.email}</td>
                <td className="border px-4 py-2 text-center">{employee.department}</td>
                <td className="border px-4 py-2 text-center">{employee.role}</td>
                <td className="border px-4 py-2 text-center">{employee.date}</td>
                <td className="border px-4 py-2 text-center">{employee.status}</td>
                <td className="border px-4 py-2 text-center">
                  <button
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded transition duration-300 ease-in-out transform hover:scale-105"
                    onClick={() => handleEdit(employee.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded ml-2 transition duration-300 ease-in-out transform hover:scale-105"
                    onClick={() => handleDelete(employee.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8" className="border px-4 py-2 text-center">
                No Employees Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <div className="flex justify-center mt-4 gap-2">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => handlePageChange(i + 1)}
            className={`px-3 py-1 border rounded ${
              currentPage === i + 1
                ? "bg-blue-500 text-white"
                : "bg-white hover:bg-gray-200"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default List;

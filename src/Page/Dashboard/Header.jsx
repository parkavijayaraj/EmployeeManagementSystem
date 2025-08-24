import React from "react";

function Header({ setIsAdding }) {
  return (
    <div className="w-screen">
    <div className="bg-gray-100 py-3 w-full">
      <div className="container mx-auto flex items-center justify-center">
        <header className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-black">Employee Management System</h1>
          <div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-medium rounded-full px-4 py-2 focus:outline-none"
              onClick={() => setIsAdding(true)}
            >
              Add Employee
            </button>
          </div>
        </header>
      </div>
    </div>
    </div>
  );
}

export default Header;

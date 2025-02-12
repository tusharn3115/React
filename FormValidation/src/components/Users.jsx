import React from "react";

const Users = ({ users }) => {
  return (
    <div className="max-w-3xl mx-auto mt-8 p-4 bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-white text-2xl font-bold mb-4 text-center">
        User Data
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-600">
          <thead>
            <tr className="bg-gray-700 text-white">
              <th className="border border-gray-600 px-4 py-2">Name</th>
              <th className="border border-gray-600 px-4 py-2">Email</th>
              <th className="border border-gray-600 px-4 py-2">Password</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, idx) => (
              <tr key={idx} className="text-white odd:bg-gray-900 even:bg-gray-800">
                <td className="border border-gray-600 px-4 py-2">{user.name}</td>
                <td className="border border-gray-600 px-4 py-2">{user.email}</td>
                <td className="border border-gray-600 px-4 py-2">{user.password}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;

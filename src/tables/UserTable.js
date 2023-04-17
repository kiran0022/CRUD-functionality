import React from "react";

function UserTable(props) {
  return (
    <div className="grid place-items-center">
      <table className="">
        <thead>
          <tr className="">
            <th className="border-b-2 px-3">Name</th>
            <th className="border-b-2 px-3">Username</th>
            <th className="border-b-2 px-3">Actions</th>
          </tr>
        </thead>

        <tbody>
          {props.users.length > 0 ? (
            props.users.map((user) => (
              <tr className=" p-4" key={user.id}>
                <td className="border-b-2 px-3 py-3">{user.name}</td>
                <td className="border-b-2 px-3">{user.username}</td>
                <td className="border-b-2 px-3">
                  <button
                    onClick={() => props.editRow(user)}
                    className="rounded-md border border-4 border-black bg-blue-300 px-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => props.delUser(user.id)}
                    className="mx-2 rounded-md border border-4 border-black bg-blue-300 px-2"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3}>No users</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;

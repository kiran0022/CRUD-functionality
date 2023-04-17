import React, { useState } from "react";
import AddUserForm from "./forms/AddUserForm";
import EditUserForm from "./forms/EditUserForm";
import UserTable from "./tables/UserTable";

function App() {
  const usersData = [
    { id: 1, name: "wefw", username: "vresdfs" },
    { id: 2, name: "acada", username: "jrdfdsd" },
    { id: 3, name: "asaf", username: "saascars" },
  ];

  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const delUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const editRow = (user) => {
    setEditing(true);
    setCurrrentUser({ id: user.id, name: user.name, username: user.username });
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };

  const [users, setUsers] = useState(usersData);

  const [editing, setEditing] = useState(false);

  const initialFormState = { id: null, name: "", username: "" };

  const [currentUser, setCurrrentUser] = useState(initialFormState);

  return (
    <div>
      <h1 className="text-center text-4xl font-semibold uppercase ">
        crud operations
      </h1>
      <div className="md:flex lg:justify-around lg:text-xl">
        {editing ? (
          <div>
            <h2>Edit user</h2>
            <EditUserForm
              setEditing={setEditing}
              updateUser={updateUser}
              currentUser={currentUser}
            />
          </div>
        ) : (
          <div className="text-center">
            <h2 className="mt-7 mb-5 text-2xl capitalize">add user</h2>
            <AddUserForm addUser={addUser} />
          </div>
        )}

        <div className="mt-8 text-center ">
          <h2 className="mb-7 text-2xl capitalize">view user</h2>
          <UserTable editRow={editRow} delUser={delUser} users={users} />
        </div>
      </div>
    </div>
  );
}

export default App;

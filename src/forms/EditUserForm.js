import React, { useState } from "react";

function EditUserForm(props) {
  const [user, setUser] = useState(props.currentUser);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setUser({ ...user, [name]: value });
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!user.name || !user.username) return;
        props.updateUser(user.id, user);
      }}
      className=""
    >
      <label>Name</label>
      <br />
      <input
        name="name"
        value={user.name}
        onChange={handleInputChange}
        className="rounded-md border-2 p-2"
      />
      <br />
      <label>Username</label>
      <br />
      <input
        name="username"
        value={user.username}
        onChange={handleInputChange}
        className="rounded-md border-2 p-2"
      />
      <br />
      <br />
      <button className="rounded-lg border-2 border-emerald-400 p-2">
        Update user
      </button>
      <button
        onClick={() => {
          props.setEditing(false);
        }}
        className="rounded-lg border-2 border-red-500 p-2"
      >
        Cancel
      </button>
    </form>
  );
}

export default EditUserForm;

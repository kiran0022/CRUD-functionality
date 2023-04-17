import React, { useState } from "react";

function AddUserForm(props) {
  const initialFormState = { id: null, name: "", username: "" };

  const [user, setUser] = useState(initialFormState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
// e.target.name = name
// e.target.value = value
    setUser({ ...user, [name]: value });
    console.log(user);
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!user.name || !user.username) return;
        props.addUser(user);
        setUser(initialFormState);
      }}
      
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
        Add new user
      </button>
    </form>
  );
}

export default AddUserForm;

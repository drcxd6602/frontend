import React, { useState } from "react";
import "./Admin.css"

export default function App() {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "johndoe@example.com" },
    { id: 2, name: "Jane Doe", email: "janedoe@example.com" },
  ]);

  const [newUser, setNewUser] = useState({ id: "", name: "", email: "" });
  const [editUser, setEditUser] = useState({ id: "", name: "", email: "" });

  const handleAddUser = () => {
    setUsers([...users, newUser]);
    setNewUser({ id: "", name: "", email: "" });
  };

  const handleDeleteUser = (id) => {
    const filteredUsers = users.filter((user) => user.id !== id);
    setUsers(filteredUsers);
  };

  const handleEditUser = (user) => {
    setEditUser(user);
  };

  const handleUpdateUser = () => {
    const updatedUsers = users.map((user) => {
      if (user.id === editUser.id) {
        return editUser;
      }
      return user;
    });
    setUsers(updatedUsers);
    setEditUser({ id: "", name: "", email: "" });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleEditInputChange = (event) => {
    const { name, value } = event.target;
    setEditUser({ ...editUser, [name]: value });
  };

  return (
    <div className="App">
      <h1>Admin Panel</h1>
      <div className="users-list">
        <h2>Users List</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <button onClick={() => handleEditUser(user)}>Edit</button>
                  <button onClick={() => handleDeleteUser(user.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="add-user">
        <h2>Add User</h2>
        <label>
          ID:
          <input
            type="text"
            name="id"
            value={newUser.id}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={newUser.name}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={newUser.email}
            onChange={handleInputChange}
          />
        </label>
        <button onClick={handleAddUser}>Add User</button>
      </div>
    <div className="edit-user">
        <h2>Edit User</h2>
        <label>
          ID:
          <input
            type="text"
            name="id"
            value={editUser.id}
            onChange={handleEditInputChange}
          />
        </label>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={editUser.name}
            onChange={handleEditInputChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={editUser.email}
            onChange={handleEditInputChange}
          />
        </label>
        <button onClick={handleUpdateUser}>Update User</button>
      </div>
    </div>
  );
}


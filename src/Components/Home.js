import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    LoadUsers();
  }, []);
  const LoadUsers = async () => {
    const response = await axios.get("http://localhost:3001/users");
    console.log(response.data);
    setUsers(response.data.reverse());
  };
  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3001/users/${id}`);
    LoadUsers();
  }
  return (
    <div className="container">
      <div className="py-4">
        <h1>Users</h1>
        <table class="table border shadow">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">User Name</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <th scope="row">{user.id}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <Link className="btn btn-primary mr-2" to={`/user/${user.id}`}>View</Link>
                  <Link
                    className="btn btn-outline-primary mr-2"
                    to={`/users/update/${user.id}`}
                  >
                    Edit
                  </Link>
                  <Link
                    className="btn btn-danger"
                    onClick={() => {
                      deleteUser(user.id);
                    }}
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;

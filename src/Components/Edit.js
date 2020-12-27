import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
const EditUser = () => {
  const userId = useParams().userId;
  const history = useHistory();
  const [showUser, setShowUser] = useState(false);
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });
  const onInputChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    await axios.put(`http://localhost:3001/users/${userId}`, user);
    history.push("/");
  };
  useEffect(() => {
    const loadUser = async () => {
      const response = await axios.get(`http://localhost:3001/users/${userId}`);
      setUser(response.data);
      setShowUser(true);
    };
    loadUser();
  }, []);
  return (
    <div className="container my-5">
      {showUser ? (
        <div className="w-80 mx-auto p-5 shadow">
          <h1 className="text-center">Edit User</h1>
          <form onSubmit={(event) => onSubmit(event)}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                className="form-control form-control-lg my-4"
                value={user.name}
                onChange={(event) => onInputChange(event)}
                placeholder="Enter Your Name"
              />
              <input
                type="text"
                name="username"
                className="form-control form-control-lg my-4"
                value={user.username}
                onChange={(event) => onInputChange(event)}
                placeholder="Enter Your UserName "
              />
              <input
                type="email"
                name="email"
                className="form-control form-control-lg my-4"
                value={user.email}
                onChange={(event) => onInputChange(event)}
                placeholder="Enter Your Email Address"
              />
              <input
                type="text"
                name="phone"
                className="form-control form-control-lg my-4"
                value={user.phone}
                onChange={(event) => onInputChange(event)}
                placeholder="Enter Your Phone Number"
              />
              <input
                type="text"
                name="website"
                className="form-control form-control-lg my-4"
                value={user.website}
                onChange={(event) => onInputChange(event)}
                placeholder="Enter Your Website's Url"
              />
              <button className="btn btn-warning w-100">Edit User</button>
            </div>
          </form>
        </div>
      ) : (
        <h1 className="text-center">loading...</h1>
      )}
    </div>
  );
};

export default EditUser;

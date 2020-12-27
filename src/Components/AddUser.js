import React ,{useState} from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";
const AddUser = () => {
    const history = useHistory();
    const [user,setUser] = useState({
        name: "",
        username:"",
        email:"",
        phone: "",
        website: "",
    })
    const onInputChange = (event)=>{
        setUser({...user,[event.target.name]:event.target.value})
    }
    const onSubmit = async (event)=>{
        event.preventDefault();
        await axios.post('http://localhost:3001/users/',user)
        history.push('/');
    }
  return (
    <div className="container my-5">
      <div className="w-80 mx-auto p-5 shadow">
          <h1 className="text-center">Add User</h1>
        <form onSubmit={event=>onSubmit(event)}>
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
              type="number"
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
            <button className="btn btn-primary w-100">
                Add User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;

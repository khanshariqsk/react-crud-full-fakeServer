import React ,{useState,useEffect}from 'react';
import {Link, useParams} from 'react-router-dom';
import axios from 'axios'
const View = () => {
    const userId = useParams().userId;
    const [user,setUser] = useState({
        name: "",
        username:"",
        email:"",
        phone: "",
        website: "",
    })
    useEffect(() => {
        loadUser()
    },[])
    const loadUser = async () => {
        const response = await axios.get(`http://localhost:3001/users/${userId}`)
        setUser(response.data)
    }
    return (
        <div className="container shadow my-5 p-5">
            <Link to='/' className="btn btn-primary ">Back to Home</Link>
            <hr></hr>
            <ul className="list-group w-60">
                <li className="list-group-item">Name: {user.name}</li>
                <li className="list-group-item">UserName: {user.username}</li>
                <li className="list-group-item">Email: {user.email}</li>
                <li className="list-group-item">Number: {user.phone}</li>
                <li className="list-group-item">Website: {user.website}</li>
            </ul>
        </div>
    );
}

export default View;
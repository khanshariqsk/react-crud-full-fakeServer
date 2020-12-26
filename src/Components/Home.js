import React, { useEffect } from "react";
const Home = () => {
  fetch("http://localhost:3001/users")
    .then((data) => data.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));

  useEffect(() => {
    console.log("hey there");
  },[]);
  return (
    <div className="container">
      <div className="py-4">
        <h1>Home</h1>
      </div>
    </div>
  );
};

export default Home;

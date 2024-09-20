"use client"
import { useState } from "react";

export default function Page() {
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [email, setEmail] = useState("");

  const addUser = async () => {
    let response = await fetch("http://localhost:3000/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        age,
        email,
      }),
    });

  
    let data = await response.json();
    console.log(data);

    if (data.success) {
      alert("New user added");
    }else{
        alert("check and try again")
    }
  };

  return (
    <div className="add-user-form">
      <h2 className="form-title">Add User</h2>
      <div className="form-fields">
        <div className="field">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            placeholder="Enter Name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="field">
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            value={age}
            placeholder="Enter Age"
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>
      <button onClick={addUser} className="submit-button">
        Add User
      </button>
    </div>
  );
}
"use client"
import React, { useEffect, useState } from 'react'

export default function Update({params}) {
    let id = params.userId;
    console.log(id)
    const [name, setName] = useState("");
    const [age, setAge] = useState();
    const [email, setEmail] = useState("");

useEffect(()=>{
 getDetails()
},[])
const getDetails= async ()=>{
  let data= await fetch(`http://localhost:3000/api/users/${id}`);
  data = await data.json();
  console.log(data)
 setName(data.result.name)
 setAge(data.result.age)
 setEmail(data.result.email)
}
const updatedUser = async()=>{
  let res= await fetch(`http://localhost:3000/api/users/${id}`,{
    method:"PUT",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({name,age,email})

  });
  res = await res.json()
  console.log(res)
  if(res.success){
    alert("User information updated")
  }else{
    alert("please try with valid input")
  }
 
}
  return (
<div className="add-user-form">
      <h2 className="form-title">Update User</h2>
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
      <button onClick={updatedUser} className="submit-button">
        Add User
      </button>
    </div>
  )
}

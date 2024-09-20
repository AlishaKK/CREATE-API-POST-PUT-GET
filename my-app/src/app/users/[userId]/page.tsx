import React from 'react'
async function getUsers(id){
    let data= await fetch(`http://localhost:3000/api/users/${id}`);
    data = await data.json();
    return data.result;
  }
export default async function Dynamic({params}) {
    
    const user = await getUsers(params.userId)
    
  return (
    <div>
      <h1>Hello</h1>
      <h4>Name:{user.name}</h4>
      <h4>Name:{user.age}</h4>
      <h4>Name:{user.id}</h4>
    </div>
  )
}

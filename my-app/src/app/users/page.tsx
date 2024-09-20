import Link from 'next/link';
import React from 'react'

async function getUsers(){
    let data= await fetch("http://localhost:3000/api/users");
    data = await data.json();
    return data;
  }
export default async function Users() {
    const users = await getUsers()
  return (
    <div>
      <h1>User List</h1>
      {Array.isArray(users) && users.map((item: any) => (
            <div key={item.id}>
              <Link href={`users/${item.id}`}> {item.name}</Link>
              <span> <Link href={`users/${item.id}/update`}> EDIT</Link></span>
             
             
            </div>
          ))}
    </div>
  )
}

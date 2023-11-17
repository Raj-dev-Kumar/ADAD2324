import React, {useState, useEffect} from "react";

import Profile from "../components/Profile"

export default function App() {
  let [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const response = await fetch('http://localhost:3000/users', {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json'
        },
      });
      
      const data = await response.json();
      setUsers(data);
      console.log(data)

    } catch (error) {
      console.error('Error:', error);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="container pt-5 pb-5">
      <h2>Users</h2>

            {users && users.map((user) => {
              return(
               <div>
               <Profile user={user}/>
               {console.log(user)}
                </div>
                )
            })}
    </div>
  )
}
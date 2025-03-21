import React, { useState,useEffect } from 'react'
import axios from 'axios'
const View = () => {
    const [users,setUsers]=useState([])
    useEffect(()=>{
        viewdata();
    },[])
    const viewdata =async ()=>{
        const res=await axios.get('http://localhost:9000/getdata');
        console.log(res);
        setUsers(res.data);
    }
  return (
    <div>
      <h1>View Data</h1>
      <table style={{backgroundColor: 'grey',border: '3px solid yellow',width: '100%'}}>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
            </tr>
        </thead>
        <tbody>
            {
                users.map((user) =>(
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.age}</td>
                    </tr>
                ))
            }
        </tbody>
      </table>
      
    </div>
  )
}

export default View

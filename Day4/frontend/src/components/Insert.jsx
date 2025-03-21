import React from 'react'
import axios from 'axios'
const Insert = () => {
    const handlesave = async (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const age = e.target.age.value
        const newUser = { name, age }
        await axios.post('http://localhost:9000/users',newUser)
        e.target.reset()
      }

    
  return (
    <div>
        <h2>Register User</h2>
      <form onSubmit={handlesave}>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Age:
          <input type="number" name="age" />
        </label>
        <button type='submit'>Register</button>
      </form>
    </div>
  )
}

export default Insert

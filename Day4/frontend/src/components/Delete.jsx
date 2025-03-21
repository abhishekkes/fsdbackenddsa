import React from 'react'
import axios from 'axios'
const Delete = () => {
    const handledelete = async (e) => {
        e.preventDefault()
        const id = e.target.id.value
        await axios.delete(`http://localhost:9000/users/${id}`)
        alert('Product deleted successfully')
      }
  return (
    <div>
        <h2>Delete Data</h2>
      <form onSubmit={handledelete}>
        <label>
          Product ID:
          <input type="text" name="id" />
        </label>
        <input type="submit" value="Delete" />

      </form>
    </div>
  )
}

export default Delete

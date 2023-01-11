import React, { useState } from 'react'
import { json, useNavigate } from 'react-router-dom'

const Home = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")))
  const navigate = useNavigate("")

  const handleLogout = () => {
    setUser("")
    localStorage.clear("user")
    navigate("/")
    
  }
  return (
    <div className='flex flex-col h-screen bg-color-base text-white justify-center items-center gap-6'>
        <h1>Home</h1>
        <h3>Welcome {user.name}</h3>
        <button className='border-none p-3 font-semibold rounded-lg bg-color-brand cursor-pointer' onClick={handleLogout}>LogOut</button>
    </div>
  )
}

export default Home
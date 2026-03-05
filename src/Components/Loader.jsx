import React from 'react'
import loader from "../assets/200.gif"
const Loader = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center bg-black'>
        <img src={loader} alt="loader" />
    </div>
  )
}

export default Loader

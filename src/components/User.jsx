import React from 'react'
import {useParams} from "react-router-dom"
function User() {
    const {user} = useParams()
  return (
    <div className='bg-orange-400 text-center p-4 text-white mx-28'>
      user : {user}
    </div>
  )
}

export default User

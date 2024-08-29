import React from 'react'
import {Link,NavLink} from "react-router-dom"
function Header() {
  return (
    <>
     <header className='border-y-2 bg-white '>
      <nav className=''>
        <div className='grid grid-cols-12 gap-1 m-2'>
          <div className='col-span-2 flex justify-end pt-1'>
          <Link to="/"><img src="https://images.pexels.com/photos/26691734/pexels-photo-26691734/free-photo-of-photo-of-jellyfish-swimming-underwater.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" className='h-14 w-14 rounded-3xl ml-5'  /></Link>
          </div>
          <div className='flex col-span-8 justify-center gap-24 pt-4'>
            <div><NavLink to="/" className={({isActive})=>`
                ${isActive ? "text-orange-700" : "text-black"} hover:text-orange-700 `
            }>Home</NavLink></div>
            <div><NavLink to="/about" className={({isActive})=>`
                ${isActive ? "text-orange-700" : "text-black"} hover:text-orange-700 `
            }>About</NavLink></div>
            <div><NavLink to="/contact us" className={({isActive})=>`
                ${isActive ? "text-orange-700" : "text-black"} hover:text-orange-700 `
            }>Contact Us</NavLink></div>
            <div><NavLink to="/github" className={({isActive})=>`
                ${isActive ? "text-orange-700" : "text-black"} hover:text-orange-700 `
            }>Github</NavLink></div>
          </div>
          <div className='flex col-span-2 justify-center gap-4'>
              <button><Link to="/">Log In</Link></button>
              <button className='bg-orange-700 h-10 mt-2 text-center p-2 rounded-md'><Link to="/">Sign up</Link></button>
          </div>
        </div>
      </nav>
     </header>
    </>
  )
}

export default Header

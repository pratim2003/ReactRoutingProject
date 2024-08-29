import React from 'react'
import {Link} from "react-router-dom"
function Contact() {
  return (
    <>
      <div className='flex justify-center my-14 gap-8'>
        <div className='bg-gray-200 p-4 rounded-md'>
          <p className='text-2xl'><b>GET IN TOUCH</b></p>
          <p>Fill in the form to start a conversation</p>
          <div className='flex mt-5'>
          <img src="https://cdn.iconscout.com/icon/free/png-512/free-location-logo-icon-download-in-svg-png-gif-file-formats--social-media-vol-2-pack-logos-icons-675550.png?f=webp&w=256" alt=""  className='h-6 mt-3'/>
          <div className='ml-3'>
            <p>Avmc Com</p>
            <p>State postal Post</p>
          </div>
          </div>
          <div className='flex mt-5'>
          <img src="https://cdn.iconscout.com/icon/free/png-512/free-call-icon-download-in-svg-png-gif-file-formats--logo-incoming-calling-pack-network-communication-icons-3627895.png?f=webp&w=256" alt=""  className='h-6 mt-3'/>
          <div className='ml-3'>
            <p className='mt-2'>+919064707096</p>
          </div>
          </div>
          <div className='flex mt-5'>
          <img src="https://cdn.iconscout.com/icon/free/png-512/free-email-logo-icon-download-in-svg-png-gif-file-formats--social-media-pack-logos-icons-567530.png?f=webp&w=256" alt=""  className='h-6 mt-3'/>
          <div className='ml-3'>
            <p className='mt-2'>duttapratim003@gmail.com</p>
          </div>
          </div>
        </div>
        <div className=''>
          <div className='my-4'><input type="text" name="" id="" className='border-x-2 border-y-2 rounded-md p-2 w-64' placeholder='Enter your name'/></div>
          <div  className='my-4'>
            <input type="number" name="" id="" className='border-x-2 border-y-2 rounded-md p-2 w-64' placeholder='Phone Number' />
          </div>
          <div className='my-4'>
            <input type="email" name="" id="" className='border-x-2 border-y-2 rounded-md p-2 w-64' placeholder='enter your email'/>
          </div>
          <Link to="/"><button className='bg-orange-500 p-3 rounded-lg w-28 text-white'>submit</button></Link>
        </div>
      </div>
    </>
  )
}

export default Contact

import React from 'react'
import {Link,NavLink} from "react-router-dom"
function Footer() {
  return (
    <>
    <footer>
      <div className='grid grid-cols-2 gap-3 p-4 border-y-2' >
        <div className='flex justify-center mr-52'>
          <div>
          <Link to="/">
              <img src="https://images.pexels.com/photos/26691734/pexels-photo-26691734/free-photo-of-photo-of-jellyfish-swimming-underwater.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" className='h-[170px] w-[170px] rounded-3xl' alt="" />
          </Link>
          </div>
        </div>
        <div className='flex justify-start gap-40'>
          <div className=""> 
            <b>RECOURCES</b>
            <div className='mt-10 '><NavLink to="/" className={({isActive})=>`${isActive ? "text-orange-800":"text-green-700"} hover:underline`}>Home</NavLink></div>
            <div className='mt-10'><NavLink to="/about" className={({isActive})=>`${isActive ? "text-orange-800":"text-green-700"} hover:underline`}>About</NavLink></div>
          </div>
          <div>
            <b>FOLLOW US</b>
            <div className='mt-10 '><NavLink to="github"  className={({isActive})=>`${isActive ? "text-orange-800":"text-green-700"} hover:underline`}>Github</NavLink></div>
            <div className='mt-10'><NavLink to="discord"  className={({isActive})=>`${isActive ? "text-orange-800":"text-green-700"} hover:underline`}>Discord</NavLink></div>
          </div>
          <div>
            <b>LEGAL</b>
            <div className='mt-10 '><NavLink to="privacyPolicy" className={({isActive})=>`${isActive ? "text-orange-800":"text-green-700"} hover:underline`}>Privacy Policy</NavLink></div>
            <div className='mt-10'><NavLink to="termsConditions" className={({isActive})=>`${isActive ? "text-orange-800":"text-green-700"} hover:underline`}>Terms And Conditions</NavLink></div>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-2 border-y-2 p-3'>
        <div className='flex justify-center'>
          <div>@2023pratimdutta.All rights reserved</div>
        </div>
        <div className='flex justify-center gap-20'>
            <div>
              <Link to="/">
                <img src="https://cdn.iconscout.com/icon/free/png-512/free-twitter-logo-icon-download-in-svg-png-gif-file-formats--social-media-network-pack-logos-icons-2496114.png?f=webp&w=256"className='h-5' alt="" />
              </Link>
            </div>
            <div>
              <Link to="/">
                <img src="https://cdn.iconscout.com/icon/free/png-512/free-facebook-icon-download-in-svg-png-gif-file-formats--logo-fb-social-media-font-awesome-pack-user-interface-icons-44659.png?f=webp&w=256"className='h-5' alt="" />
              </Link>
            </div>
            <div>
              <Link to="/">
                <img src="https://cdn.iconscout.com/icon/free/png-512/free-instagram-icon-download-in-svg-png-gif-file-formats--logo-ui-vol-6-pack-user-interface-icons-3014829.png?f=webp&w=256"className='h-5' alt="" />
              </Link>
            </div>
            <div>
              <Link to="/">
                <img src="https://cdn.iconscout.com/icon/free/png-512/free-github-logo-icon-download-in-svg-png-gif-file-formats--social-media-pack-logos-icons-2496133.png?f=webp&w=256"className='h-5' alt="" />
              </Link>
            </div>
            <div>
              <Link to="/">
                <img src="https://cdn.iconscout.com/icon/free/png-512/free-discord-logo-icon-download-in-svg-png-gif-file-formats--social-media-pack-logos-icons-3147482.png?f=webp&w=256"className='h-5' alt="" />
              </Link>
            </div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer

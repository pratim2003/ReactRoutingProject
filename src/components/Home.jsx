import React from 'react'

function Home() {
  return (
    <>
      <div>
        <div className='flex justify-around'>
          <div className='flex justify-start'>
            <div className='pt-20'>
              <img src="https://images.pexels.com/photos/26700466/pexels-photo-26700466/free-photo-of-close-up-of-a-pelican-standing-near-a-body-of-water.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" className='h-72 w-52 rounded-full' />
            </div>
          </div>
          <div className='pt-36 text-end mr-60'>
            <p className='text-3xl'><b>DOWNLOAD NOW</b></p>
            <p className='text-2xl'><b>Lorem, ipsum.</b></p>
            <button className='bg-orange-500 mt-3 p-2 rounded-lg flex ml-28' ><img src="https://cdn.iconscout.com/icon/free/png-512/free-playstore-logo-icon-download-in-svg-png-gif-file-formats--social-media-vol-1-pack-logos-icons-675406.png?f=webp&w=256" alt="" className='h-4 m-1'/>Download Now</button>
          </div>
        </div>
        <div className='flex justify-center'>
        <div className='pt-20 text-center mt-3'>
              <img src="https://images.pexels.com/photos/26059002/pexels-photo-26059002/free-photo-of-waterbuck-in-nature.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='h-72 w-52 rounded-lg ml-12' />
              <p className='text-2xl mt-3 my-3 text-center'><b>Lorem ipsum dolor sit amet.</b></p>
        </div>
        </div>
      </div>
    </>
  )
}

export default Home

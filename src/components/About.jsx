import React from 'react'
import {Link,NavLink} from "react-router-dom"

function About() {
  return (
    <>
    <div className='grid grid-cols-2 m-5 gap-4 mb-10'>
      <div className='flex justify-center'>
        <div className='pt-12'>
          <img src="https://images.pexels.com/photos/26731669/pexels-photo-26731669/free-photo-of-lionesses-lying-down-together.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='h-72 w-52 rounded-lg ml-12' />  
        </div>
      </div>
      <div className='flex justify-start mr-16'>
        <div className='pt-16 '>
          <p className='text-3xl'><b>React devolopement is carried out by paasonate web devolopers</b></p>
          <p className='mt-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo hic fugit quas deleniti doloribus, qui alias debitis voluptatem quis fugiat nihil explicabo, voluptatum ullam officiis odit mollitia, obcaecati a iste incidunt facilis soluta maxime? Suscipit.</p>
          <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse perspiciatis, et facilis rem magni fugit praesentium molestias reiciendis, deserunt consequuntur ratione quis. Optio, iste inventore.</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default About

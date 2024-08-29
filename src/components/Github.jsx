import React from 'react'
import{useState,useEffect} from "react"
import {useLoaderData} from "react-router-dom"
function Github() {
    const data = useLoaderData()
    /*const [data,setData]=useState(0)
    const[imag,setImag]=useState("")

    useEffect(()=>{
        fetch("https://api.github.com/users/pratim2003")
        .then((res)=>res.json())
        .then((res)=>{setData(res["following"]); setImag(res["avatar_url"])})
    },[])*/
  return (
    <>
    <div className='flex justify-center p-4'>
    <div className='text-orange-700'>
     Following : {data.following}
    </div>
    <img src={data.avatar_url} alt="" className='h-10 ml-3' />
    </div>
    </>
  )
}

export default Github
export const githubInfo = async()=>{
    const info = await fetch('https://api.github.com/users/pratim2003')
    return info.json()
}


import { useState } from 'react'
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from './components/Home'
import About from "./components/About"
import './App.css'
import {Outlet} from "react-router-dom"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App

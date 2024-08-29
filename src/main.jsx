import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {RouterProvider,createBrowserRouter,createRoutesFromElements,Route} from "react-router-dom"
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import User from './components/User.jsx'
import Github,{githubInfo} from './components/Github.jsx'

/*const router=createBrowserRouter([{
  path:"/",
  element:<App/>,
  children:[
    {
      path:"",
      element:<Home/>
    },
    {
      path:"about",
      element:<About/>
    },
    {
      path:"contact us",
      element:<Contact/>
    }
  ]
}])*/

const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path={"/"} element={<App/>}> 
        <Route path={"/"} element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path={"/contact us"} element={<Contact/>}/>
        <Route path={"/user/:user"} element={<User/>} />
        <Route 
        loader={githubInfo}
        path={"/github"}
        element={<Github/>}/>
      </Route>
    )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

import React,{useState} from 'react'
import './app.css'
import {Routes,Route} from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import NavBar from './Components/NavBar/NavBar.jsx'
import Blogs from './Components/Blogs/Blogs.jsx'

const App = () => {
  const [active, setActive] = useState("homepage");
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Home active={active}/>}/>
        <Route path='/collections' element={<Blogs active={active}/>}/>
      </Routes>
      <NavBar active={active} setActive={setActive}/>
    </div>
  )
}

export default App

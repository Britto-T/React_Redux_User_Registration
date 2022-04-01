import React from "react"
import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
import Home from "./Home"
import Users from "./Users"
import PrimeGrid from "./PrimeGrid"

const NavBar=()=>{
    return(
       
    <BrowserRouter>
     <header className="header">
		<h1 className="logo"><a href="#">React Training</a></h1>
      <ul className="main-nav">
          <li><Link to="Home">Home</Link></li>
          <li><Link to="Users">Users</Link></li>
          <li><Link to="PrimeGrid">Prime Grid</Link></li>
          <li><a href="#">Factorial</a></li>
          <li><Link to="Student">Student</Link></li>
      </ul>
      </header> 
      <Routes>
        <Route path="Home" element={<Home/>}></Route>
        <Route path="Users" element={<Users/>}></Route>
        <Route path="PrimeGrid" element={<PrimeGrid/>}></Route>
      </Routes>
    </BrowserRouter>
    )
}

export default NavBar
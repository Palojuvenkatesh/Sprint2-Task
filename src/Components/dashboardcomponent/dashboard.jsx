import { useState } from 'react'
import Header from '../Headercomponent/header'
import Sidebar from '../sidebarcomponent/sidebar'
import './dashboard.css';
import Home from '../homecomponent/home';
import ProductList from '../Productlistcomponent/productlist';


function Dashboard() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>
      
<Header OpenSidebar={OpenSidebar}></Header>
<Sidebar  openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}></Sidebar>
<Home ></Home>
      
    </div>
  )
}

export default Dashboard
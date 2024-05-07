import { useState } from 'react'
import Header from '../Headercomponent/header'
import Sidebar from '../sidebarcomponent/sidebar'

import Home from '../homecomponent/home';
import ProductList from '../Productlistcomponent/productlist';
import EditProduct from '../editproductcomponent/editproduct';


function Dashboardedit() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>
      
<Header OpenSidebar={OpenSidebar}></Header>
<Sidebar  openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}></Sidebar>

      <EditProduct></EditProduct>
    </div>
  )
}

export default Dashboardedit
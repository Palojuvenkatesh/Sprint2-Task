import { useState } from 'react'
import Header from '../Headercomponent/header'
import Sidebar from '../sidebarcomponent/sidebar'
import './dashboardproductlist.css';

import ProductList from '../Productlistcomponent/productlist';


function Dashboardlist() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>
      
<Header OpenSidebar={OpenSidebar}></Header>
<Sidebar  openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}></Sidebar>
<ProductList></ProductList>
      
    </div>
  )
}

export default Dashboardlist
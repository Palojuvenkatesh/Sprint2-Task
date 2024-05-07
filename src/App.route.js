import { Route, Routes } from "react-router-dom";
import Dashboard from "./Components/dashboardcomponent/dashboard";
import Dashboardproductlist from "./Components/dashboardcomponent/dashboardproductlist";
import Dashboardlist from "./Components/dashboardcomponent/dashboardproductlist";
import Dashboardedit from "./Components/dashboardcomponent/dashboardeditproduct";
import EditProduct from "./Components/editproductcomponent/editproduct";

export function Approute(){
    return(
        <Routes>
            <Route path="/" element={<Dashboard></Dashboard>}></Route>
            <Route ></Route>
            <Route path="/Product-list" element={<Dashboardlist></Dashboardlist>}></Route> 
            {/* <Route path="/edit-product/:id" element={<Dashboardedit></Dashboardedit>}></Route> */}
            <Route path="/edit-product/:id" element={<Dashboardedit></Dashboardedit>}></Route>
        </Routes>
    )
}
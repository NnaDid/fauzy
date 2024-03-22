import NavBar from "../NavBar"
import NavLinks from "../NavLinks"
import { Outlet } from "react-router-dom"

const Dashboard = () => {
  return (
    <>
       <NavBar/>
       <div className="row">
        <NavLinks/>
             <div className="col-md-9">
                {/*  Other pages will load in here */}
                <div className="container"> 
                  <Outlet/>
                </div>
            </div>
        </div> 
    </>
  )
}

export default Dashboard

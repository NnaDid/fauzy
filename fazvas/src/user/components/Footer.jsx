import React from 'react'
import { Link } from 'react-router-dom'
import { FaSquarePhone } from "react-icons/fa6";
import { AiTwotoneMail } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="footer py-5 bg-dark">
        <div className="container py-3 px-2 bg-dark">
              <div className='row'>
                  <div className="col-md-4 col-sm-6 col-lg-4"> 
                        <ul class="list-group list-group-flush">
                        
                          <li class="list-group-item"> <FaSquarePhone /> Phone: <a href="https://api.whatsapp.com/send?phone=09098765342" className={`links`} >09098765342</a></li>
                          <li class="list-group-item"> <AiTwotoneMail /> Email: info@fazvas.com.ng</li>
                          <li class="list-group-item"> <IoLocationOutline /> Address: Jahi 1, FCT </li> 
                        </ul>
                    </div>
                  <div className="col-md-4 col-sm-6 col-lg-4"> 
                        <ul class="list-group list-group-flush">
                          <li class="list-group-item"><Link className={`links`} to='/signup'> Signup </Link></li>
                          <li class="list-group-item"><Link className={`links`} to='/signup'> Login </Link></li>
                          <li class="list-group-item"><Link className={`links`} to='/signup'> Support </Link></li> 
                        </ul>
                    </div>
                  <div className="col-md-4 col-sm-6 col-lg-4"> 
                        <ul class="list-group list-group-flush">
                          <li class="list-group-item"> <Link className={`links`} to='/signup'> Privacy Policy</Link> </li>
                          <li class="list-group-item"> <Link className={`links`} to='/signup'>Terms & Condition </Link></li>  
                        </ul>
                    </div>
                </div>
        </div>
    </div>


  )
}

export default Footer
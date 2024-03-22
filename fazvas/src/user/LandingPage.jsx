import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Completed from '../assets/ompleted.svg'
import { Link } from "react-router-dom"

const LandingPage = () => {
  return (
    <>
      {/*  avigatio ar */}
        <Navbar />
         
         {/* the Hero sectio */}
         <div className="hero bg-dark text-white text-center p-2">
                <div className="container w-50 py-5 px-2"> 
                        <h1> Welcome to FazVas</h1>
                        <p className="text-center">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                            Cumque, reprehenderit porro? Corrupti mollitia consequuntur, voluptatibus facilis recusandae labore 
                            nam corporis ut ipsum ullam similique dolore laborum unde, earum nesciunt optio?
                        </p>

                </div>
         </div>

         {/* CTA */}

         <div className="cta py-5 bg-light text-center">
             <div className="container w-50 py-3 px-2"> 
                     <div className="row">
                           <div className="col-md-4 col-sm-6 col-lg-4">
                                 <img src={Completed} alt="completed" height={200} />
                           </div> 
                           <div className="col-md-8 col-sm-6 col-lg-8">
                                <p className="lead">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, 
                                    voluptate, fugiat harum architecto sed alias rem delectus, 
                                    quod nesciunt laboriosam nulla voluptatem sint modi sunt!
                                </p>
                               <Link className="btn btn-primary btn-lg mx-1" to='/signup'> Get Started </Link>
                           </div>
                     </div>
             </div>
         </div>

        <Footer/>
      
    </>
  )
}

export default LandingPage

import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand text-white" href="#">Xploit </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>

            <div className="d-flex justify-content-between align-items-center ms-auto">
                    <Link to='/signup' className="btn btn-primary mx-1 rounded-0"> Sign Up </Link>
                    <Link to='/login' className="btn btn-primary mx-1 rounded-0"> Login </Link>
            </div>
        
        </div>

        </nav>
    </>
  )
}

export default NavBar
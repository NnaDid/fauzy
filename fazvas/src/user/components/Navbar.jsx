import Logo from '../../assets/fazvas.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
        <nav className="navbar bg-body-tertiary ">
            <div className="container-fluid d-flex justify-content-between align-items-center">
                <Link className="navbar-brand" to='/'>
                    <img src={Logo} className="img-thumbnail" alt="logo"  height={50} width ={50}/>
                </Link>

                  <div className="btn-group">
                      <Link className="btn btn-primary mx-1" to='/signup'> Signup </Link>
                      <Link className="btn btn-primary mx-1" to='/login'> Login </Link>
                  </div>
            </div> 
        </nav>
    </>
  )
}

export default Navbar
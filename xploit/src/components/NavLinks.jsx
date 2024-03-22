
import { Link } from "react-router-dom"
const NavLinks = () => {
  return (
    <>
        <div className="col-md-3 bg-light mx-auto px-2" style={{ height: 'calc(100vh - 90px)' }}>
            <div className="list-group">
                <Link to="/dashboard/users"   className="list-group-item list-group-item-action">Users</Link>
                <Link to="/dashboard/tx"      className="list-group-item list-group-item-action">Transactions</Link>
                <Link to="/dashboard/funding" className="list-group-item list-group-item-action">Funding History</Link> 
            </div>
        </div>
    </>
  )
}

export default NavLinks
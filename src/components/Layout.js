import { Outlet, Link } from "react-router-dom";
import "./Home.css";
import "./About.css";


const Layout = () => {
    return(
      <>
        <nav>
            <li className='navHeight'>
              <div className='flex-container'>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
              </div>
            </li>
        </nav>
        <Outlet />
      </>
    )
};


export default Layout;
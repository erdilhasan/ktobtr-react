import './navbar.css'
import { Link, NavLink } from 'react-router-dom';


function CustomNavbar() {
    return (<div className="navbar-container">
        <nav>
            <NavLink to="/" className='navitem' >Anasayfa</NavLink>
            <NavLink to="/bizkimiz" className='navitem' >Biz Kim ki</NavLink>
            <NavLink to="/iletisim" className='navitem' >İletişimki</NavLink>
          
        </nav>
    </div>);
}

export default CustomNavbar;
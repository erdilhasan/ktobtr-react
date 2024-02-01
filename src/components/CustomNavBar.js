import './navbar.css'
import logo from '../ktobtr.jpg'
import { NavLink } from 'react-router-dom';


function CustomNavbar() {
    return (<div className="navbar-container px-2 ">
        <img className='h-14 m-1 rounded-full' src={logo} alt='logo'></img>        
       
            <nav className='items-center  justify-center '>
                
                <NavLink to="/" className='navitem ' >Anasayfa</NavLink>
                <NavLink to="/bizkimiz" className='navitem' >Biz Kimiz</NavLink>
                <NavLink to="/iletisim" className='navitem' >İletişim</NavLink>
                <NavLink to="/uyeol" className='navitem bg-slate-400 rounded-full' >Üye Ol!</NavLink>
            
            </nav>
       
    </div>);
}

export default CustomNavbar;
import React from "react";
import './NavBar.css'
import {Link} from "react-router-dom";
function NavBar() {
    return (
        <>
        <nav className="nav-conteiner">
            <h1 className='nav-logo'>logo</h1>
            <ul className="nav-items">
             <li className="nav-item"><Link to="/">Home</Link></li>
             <li className="nav-item"><Link to="/productos">Productos</Link></li>
             <li className="nav-item"><Link to="/contacto">Contacto</Link></li>
            </ul>
         </nav>
        </>
    )
}
 
export default NavBar

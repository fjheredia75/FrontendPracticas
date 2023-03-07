import { NavLink } from "react-router-dom";
import './Navbar.css'

export default function Navbar (){

return (
    <ul className="navStev">
        <li className="liStev">
            <span>
            <NavLink to="/inicio">
                Inicio
            </NavLink>
            </span>
        </li>

      
        <li className="liStev">
        <span>
            <NavLink to="/Customer">
                Customer
            </NavLink>
            </span>
        </li>


        <li className="liStev">
        <span>
            <NavLink to="/Category">
                Category
            </NavLink>
            </span>
        </li>


        
        <li className="liStev">
        <span>
            <NavLink to="/Activity">
                Activity
            </NavLink>
            </span>
        </li>

        
       

        <li className="liStev">
        <span>
            <NavLink to="/Oportunity">
                Oportunity
            </NavLink>
            </span>
        </li>

        <li className="liStev">
        <span>
            <NavLink to="/contactos">
                Contactos                                  
            </NavLink>
            </span>
        </li>
    </ul>
);

}
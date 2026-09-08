import headerlogo from "../assets/headlogo.png"
import {Link} from "react-router-dom"

function Header() {
    return(
        <header>
     <img className= "logo-img" src= {headerlogo}
          alt="Kasa logo of the header "/>
     <ul> 
     <li><Link to ="/">Home</Link></li>
     <li><Link to ="/about">About</Link></li>
     </ul>
    </header>
    );
}

export default Header
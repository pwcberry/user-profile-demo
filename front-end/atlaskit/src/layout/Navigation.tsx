import { NavLink } from "react-router";

function Navigation() {
    return (
        <nav className="">
           <ul>
               <li className=""><NavLink to="/" className="">Your profile</NavLink></li>
               <li className=""><NavLink to="/personal-details" className="">Personal details</NavLink></li>
               <li className=""><NavLink to="/address-history" className="">Address history</NavLink></li>
               <li className=""><NavLink to="/work-history" className="">Work history</NavLink></li>
               <li className=""><NavLink to="/government-identity"  className="">Tax File Number</NavLink></li>
           </ul>
        </nav>
    );
}

export default Navigation;

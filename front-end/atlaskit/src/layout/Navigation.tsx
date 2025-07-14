import { NavLink } from "react-router";

function Navigation() {
  return (
    <nav className="grid__col-span_2 nav">
      <ul>
        <li>
          <NavLink to="/">Your profile</NavLink>
        </li>
        <li>
          <NavLink to="/personal-details">Personal details</NavLink>
        </li>
        <li>
          <NavLink to="/address-history">Address history</NavLink>
        </li>
        <li>
          <NavLink to="/work-history">Work history</NavLink>
        </li>
        <li>
          <NavLink to="/government-identity">Tax File Number</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;

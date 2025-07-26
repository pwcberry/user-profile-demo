import { NavLink } from "react-router";
import "@salesforce-ux/design-system/css/vertical-navigation/list/index.css";

function Navigation() {
  return (
    <nav className="profile-nav grid__col-span_3 slds-nav-vertical">
      <ul>
        <li className="slds-nav-vertical__item">
          <NavLink to="/" className="slds-nav-vertical__action">
            Your profile
          </NavLink>
        </li>
        <li className="slds-nav-vertical__item">
          <NavLink to="/personal-details" className="slds-nav-vertical__action">
            Personal details
          </NavLink>
        </li>
        <li className="slds-nav-vertical__item">
          <NavLink to="/address-history" className="slds-nav-vertical__action">
            Address history
          </NavLink>
        </li>
        <li className="slds-nav-vertical__item">
          <NavLink to="/work-history" className="slds-nav-vertical__action">
            Work history
          </NavLink>
        </li>
        <li className="slds-nav-vertical__item">
          <NavLink to="/government-identity" className="slds-nav-vertical__action">
            Tax File Number
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;

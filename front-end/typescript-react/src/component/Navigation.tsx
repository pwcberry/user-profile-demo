import "@salesforce-ux/design-system/css/vertical-navigation/list/index.css";

function Navigation() {
    return (
        <nav className="profile-nav slds-nav-vertical">
           <ul>
               <li className="slds-nav-vertical__item"><a href="#" className="slds-nav-vertical__action">Your profile</a></li>
           </ul>
        </nav>
    );
}

export default Navigation;

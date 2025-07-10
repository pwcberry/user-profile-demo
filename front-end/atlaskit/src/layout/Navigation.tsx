import "@salesforce-ux/design-system/css/vertical-navigation/list/index.css";

function Navigation() {
    return (
        <nav className="profile-nav slds-nav-vertical">
           <ul>
               <li className="slds-nav-vertical__item"><a href="#" className="slds-nav-vertical__action">Your profile</a></li>
               <li className="slds-nav-vertical__item"><a href="#" className="slds-nav-vertical__action">Personal details</a></li>
               <li className="slds-nav-vertical__item"><a href="#" className="slds-nav-vertical__action">Address history</a></li>
               <li className="slds-nav-vertical__item"><a href="#" className="slds-nav-vertical__action">Work history</a></li>
               <li className="slds-nav-vertical__item"><a href="#" className="slds-nav-vertical__action">Tax File Number</a></li>
           </ul>
        </nav>
    );
}

export default Navigation;

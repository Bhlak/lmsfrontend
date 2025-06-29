import { react } from "react";
import "./Navbar.css";

function Navbar({ name }) {
  const userName = name ? name.charAt(0).toUpperCase() + name.slice(1) : null;
  return (
    <nav className={`product-bar`}>
      {name ? <p>Hello, {userName}</p> : <p>Hey There, Friend</p>}
      <div className="shopbells">
        <input type="search" className="searching" placeholder="search" />
        <div className="gg--shopping-cart"></div>
        <div className="mage--notification-bell"></div>
      </div>
    </nav>
  );
}

export default Navbar;

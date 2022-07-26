import { Link } from "react-router-dom";
import "../../../scss/_header.scss";
import logo from "../../../img/logo.png";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <img className="header__logo" src={logo} alt="" href="#s" />
          <nav className="nav">
            <Link className="nav__link" to="/">
              Home
            </Link>
            <Link className="nav__link" to="/donate">
              Donate
            </Link>
            <Link className="nav__link" to="/event">
              Event
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;

import logo from "../images/logo/header_logo.svg";
import { Link } from "react-router-dom";

function Header({ loggedIn, email }) {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Логотип сайта" />
      {loggedIn && <p className="header__email">{email}</p>}

      <Link to="/sign-in" className="header__link">
        Выйти
      </Link>
    </header>
  );
}

export default Header;

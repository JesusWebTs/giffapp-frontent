import React from "react";
import { Link, useRoute } from "wouter";
import "./Header.css";
import useUser from "../../hooks/useUser";
function Header() {
  const { isLogged, logOut } = useUser();
  const [match] = useRoute("/login");

  const renderLoginButtons = ({ isLogged }) => {
    return isLogged ? (
      <Link to="" onClick={logOut}>
        Logout
      </Link>
    ) : (
      <React.Fragment>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </React.Fragment>
    );
  };
  const content = match ? null : renderLoginButtons({ isLogged });
  return <header className="gf-header">{content}</header>;
}

export default Header;

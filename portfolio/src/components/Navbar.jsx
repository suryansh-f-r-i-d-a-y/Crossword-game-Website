import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./navbar.css";

export default function Navbar() {
  const [hamburger, setBurgerClass] = useState("hamburger unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();

  //toggle burger menu

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("hamburger clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("hamburger unclicked");
      setMenuClass("menu hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <>
      <nav>
        <header className="head">
          <a className="main-brand" href="#">
            blazingBucks
          </a>
          <ul className="navbar">
            {/* <li><a href="#">Home</a></li> */}
            {/* <li><a href="#">About</a></li> */}
            {/* <li><a href="#">Services</a></li> */}
            {/* <li><a href="#">Contact</a></li> */}
          </ul>
          {/* <button className='login-btn' >Sign in</button> */}
          {isAuthenticated ? (
          <button className="login-btn"onClick={() =>logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</button>
          ) : (
              <button className="login-btn" onClick={() => loginWithRedirect()}> Log In</button>
          )}

          <div className={menu_class}>
            <div className="for-background">
            <div className="burger-brand">
              <a href="#">@blazingBucks</a>
            </div>
            <div className="burger-icons">
              <ul className="burger-list">
                <li>
                  <a href="https://github.com/suryansh-f-r-i-d-a-y">
                    <ion-icon name="logo-github"></ion-icon>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/suryansh-chauhan-friday/">
                    <ion-icon name="logo-linkedin"></ion-icon>
                  </a>
                </li>
                <li>
                  <a href="mailto:suryansh1016star@gmail.com">
                    <ion-icon name="mail"></ion-icon>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/suryansh1016/">
                    <ion-icon name="logo-instagram"></ion-icon>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <ion-icon name="logo-twitter"></ion-icon>
                  </a>
                </li>
              </ul>
            </div>
            </div>
          </div>

          <div className="menu-btn" onClick={updateMenu}>
            <div className={hamburger}></div>
            <div className={hamburger}></div>
            <div className={hamburger}></div>
          </div>
        </header>
      </nav>
    </>
  );
}

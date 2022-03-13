import React, { useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { DataContext } from "../../store/GlobalState";
import { NavDropdown, Image } from "react-bootstrap";
import Cookie from "js-cookie";

function Navbar() {
  const router = useRouter();
  const { state, dispatch } = useContext(DataContext);
  const { auth, cart } = state;

  const isActive = (r) => {
    if (r === router.pathname) {
      return " active";
    } else {
      return "";
    }
  };

  const handleLogout = () => {
    Cookie.remove("refreshtoken", { path: "api/auth/accessToken" });
    localStorage.removeItem("firstLogin");
    dispatch({ type: "AUTH", payload: {} });
    dispatch({ type: "NOTIFY", payload: { success: "Logged out!" } });
  };

  const loggedRouter = () => {
    return (
      <>
        <Image
          src={auth.user.avatar}
          alt={auth.user.avatar}
          width="35px"
          height="35px"
          roundedCircle="true"
        ></Image>
        <NavDropdown
          id="nav-dropdown-dark-example"
          title={auth.user.name}
          menuVariant="light"
        >
          <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
          {/* <NavDropdown.Item href="/about">About</NavDropdown.Item> */}
          <NavDropdown.Item onClick={handleLogout}>Sign Out</NavDropdown.Item>
        </NavDropdown>
      </>
    );
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-warning">
      <div className="container">
        <Link href="/">
          <a className="navbar-brand">PruComm</a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav p-1">
            <li className="nav-item">
              <Link href="/cart">
                <a className={"nav-link" + isActive("/cart")}>
                  <i
                    className="fas fa-shopping-cart position-relative"
                    aria-hidden="true"
                  >
                    <span
                      className="position-absolute"
                      style={{
                        padding: "3px 6px",
                        background: "red",
                        borderRadius: "50%",
                        color: "white",
                        top: "-15px",
                        right: "-10px",
                        fontSize: "12px",
                      }}
                    >
                      {cart.length}
                    </span>
                  </i>
                  &nbsp;Cart&nbsp;
                </a>
              </Link>
            </li>

            {Object.keys(auth).length === 0 ? (
              <li className="nav-item">
                <Link href="/signin">
                  <a className={"nav-link" + isActive("/signin")}>
                    <i className="fas fa-user" aria-hidden="true"></i> Sign in
                  </a>
                </Link>
              </li>
            ) : (
              loggedRouter()
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

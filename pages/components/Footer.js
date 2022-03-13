import React, { useState } from "react";
import Link from "next/link";

const Footer = () => {
  const [inputEmailAddress, setEmailAddress] = useState("");

  return (
    <div className="container position-static border-top mt-5 fixed-bottom">
      <footer className="py-3 mt-1">
        <div className="row">
          <div className="col-2">
            <h5>Pages</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link href="/" className="nav-link p-0 text-muted">
                  Home
                </Link>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Categories
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  FAQs
                </a>
              </li>
              <li className="nav-item mb-2">
                <Link href="/about" className="nav-link p-0 text-muted">
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-6 offset-1">
            <strong>Subscribe to our newsletter</strong>
            <div className="d-flex col-9 col-lg-0">
              <input
                className="w-50 form-control form-control-dark"
                type={inputEmailAddress}
                onChange={(e) => setEmailAddress(e.target.value)}
                placeholder="Type your E-mail..."
                aria-label="Newsletter Box"
              />
              <button type="button" className="btn btn-info text-dark me-5">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center py-4 my-4 border-top ">
          <h5>&copy; 2022 - Team 2 Project. All rights reserved.</h5>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

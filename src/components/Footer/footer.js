import React from "react";
import { FaGithub, FaFacebook, FaLinkedin  } from "react-icons/fa";

import "./footer.css";


function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h3>TextUtils</h3>
            <h5 className="list-unstyled">
              <li>+91-6392970190</li>
              <li>Lucknow, India</li>
              <li>123 Streeet, Gomti Nagar</li>
            </h5>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>Stuff</h4>
            <ui className="list-unstyled">
              <li>Word Counter</li>
              <li>UpperCase</li>
              <li>LowerCase</li>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>Contact Us</h4>
            <ui className="list-unstyled">
              <li><FaFacebook /> Facebook</li>
              <li><FaGithub /> Github</li>
              <li><FaLinkedin/> Linkedin</li>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} THICC MEMES | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
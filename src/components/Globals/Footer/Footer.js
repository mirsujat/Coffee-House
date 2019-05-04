import React from "react";

const Footer = () => (
  <footer className="footer py-3">
    <div className="container">
      <div className="row">
        <div className="col-10 max-auto col-md-12 text-yellow text-center text-capitalize">
          <h3>
            all rights reserved &copy; {new Date().getFullYear().toString()} mir
            sujat
          </h3>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;

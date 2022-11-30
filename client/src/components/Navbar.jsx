import React from "react";

export const Navbar = () => {
  return (
    <div className="navbar container-fluid bg-warning">
      <div className="container d-flex flex-row justify-content-between">
        <span className="logo">CarScope</span>
        <ul className="nav-items">
          <li className="list-item d-inline">All Cars</li>
          <li className="list-item d-inline">Admin</li>
          <li className="list-item d-inline">login/signup</li>
        </ul>
      </div>
    </div>
  );
};

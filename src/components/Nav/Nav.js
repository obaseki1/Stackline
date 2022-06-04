import React from "react";
import logo from "../../assets/logo.svg";

function Nav() {
  return (
    <nav
      style={{
        height: 50,
        backgroundColor: "#052849",
        paddingLeft: 20,
        display: "flex",
        alignItems: "center",
      }}
    >
      <img src={logo} alt="Stackline logo" style={{ objectFit: "contain", height: 25 }} />
    </nav>
  );
}

export default Nav;

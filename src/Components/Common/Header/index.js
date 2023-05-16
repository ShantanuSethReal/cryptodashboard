import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import Button from "../../Common/Button/index";
import TemporaryDrawer from "./drawer";
function Header() {
  return (
    <div className="navbar">
      <h1 className="logo">
        CryptoTracker<span style={{ color: "var(--blue)" }}>.</span>
      </h1>
      <div className="links">
        <Link to="/">
          <p className="link">Home</p>
        </Link>
        <Link to="/compare">
          <p className="link">Compare</p>
        </Link>
        <Link to="/watchlist">
          <p className="link">WatchList</p>
        </Link>
        <Link to="/dashboard">
          <Button text={"Dashboard"}></Button>
        </Link>
      </div>
      <div className="mobile-drawer"><TemporaryDrawer></TemporaryDrawer></div>
    </div>
  );
}

export default Header;

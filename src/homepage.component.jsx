import React from "react";
import "./homepage.styles.scss";

const HomePage = () => (
  <div className="homepage">
    <div className="directory-menu">
      <div className="menu-item">
        <div className="content">
          <h1 className="TITLE">HATS</h1>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="TITLE">JACKETS</h1>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="TITLE">SNEAKERS</h1>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="TITLE">WOMENS</h1>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="TITLE">MENS</h1>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;

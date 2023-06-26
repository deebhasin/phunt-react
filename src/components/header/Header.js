import React from "react";

export default function Header() {
  return (
    <header>
      <div className="header">
        <div className="left">
          <div className="logo">P</div>
          <input className="search" placeholder="Search"></input>
          <div className="menu">
            <ul>
              <li>Products</li>
              <li>Community</li>
              <li>MarketPlace</li>
              <li>Jobs</li>
              <li>Advertise</li>
              <li>About</li>
            </ul>
          </div>
        </div>
        <div className="right">
          <div className="submit">Submit</div>
          <div className="notification">
            <img src="/Users/deepakbhasin/workspace/html/patrick/images/dribble_icon.png" alt="notification" />
          </div>
          <div className="profile">
            <img src="./images/passport_size.jpg" alt="profile" />
          </div>
        </div>
      </div>
    </header>
  );
}

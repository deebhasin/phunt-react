import profileImage from "../../images/passport_size.jpg";
import notificationImage from "../../images/dribble_icon.png";

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
            <img src={notificationImage} alt="notification" />
          </div>
          <div className="profile">
            <img src={profileImage} alt="profile" />
          </div>
        </div>
      </div>
    </header>
  );
}

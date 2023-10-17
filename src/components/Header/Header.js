import React, { useEffect, useState } from "react";
import "./index.css";
import { LOGO_URL } from "../../utils/Constants";
import { Link } from "react-router-dom";
import { useContext } from "react";
import UserInfoContext from "../../utils/contextAPI/UserInfoContext";
import { useSelector } from "react-redux";

function Header() {
  const [isOnline, setIsOnline] = useState(true);
  const [userName, setUserName] = useState("");
  const { fullName } = useContext(UserInfoContext);
  const cart = useSelector((store)=>store.cart.items)

  useEffect(() => {
    window.addEventListener("online", () => {
      setIsOnline(true);
    });
    window.addEventListener("offline", () => {
      setIsOnline(false);
    });
  }, []);
  useEffect(()=>{
    setUserName(fullName);

  },[fullName])

  return (
    <div className="heading">
      <div className="logo-container">
        <img alt="" src={LOGO_URL} className="logo" />
      </div>
      <ul className="nav-links">
        <Link to="/">
          <li className="link" id="online">
            Online: {!isOnline ? <span>🔴</span> : <span>🟢</span>}
          </li>
        </Link>
        <Link to="/">
          <li className="link">Home</li>
        </Link>
        <Link to="/about">
          <li className="link">About Us</li>
        </Link>
        <Link to="/contact">
          <li className="link">Contact US</li>
        </Link>
        <Link to="/cart">
          <li className="link font-bold">Cart: ({cart.length} items)</li>
        </Link>
        <Link to="">
          <li className="link">UserName: {userName}</li>
        </Link>
      </ul>
    </div>
  );
}

export default Header;

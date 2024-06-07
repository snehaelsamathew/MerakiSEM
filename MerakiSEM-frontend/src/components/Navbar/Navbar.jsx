import React, { useContext, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import searchIcon from '../../assets/search_icon.png';
import basketicon from '../../assets/basket_icon.png';
import profileicon from '../../assets/profileicon.png';
import bagicon from '../../assets/bag_icon.png';
import logouticon from '../../assets/logout_icon.png';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const { getTotalCartAmounts, token, setToken } = useContext(StoreContext);

  //2) //when the user will logout we will send them to homepage, to send this - usenavigate

  const navigate = useNavigate();
  // 1) logout

  const logout = () => {
      //for logout we have to remove the token
      localStorage.removeItem("token");
      setToken("");
      navigate("/")  
      

  }

  return (
    <div className='navbar'>
      <Link to='/Home'><img src={logo} alt="Logo" className="logo" /></Link>
      <ul className="navbar-menu">
        <li><Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link></li>
        <li><Link to='/About' onClick={() => setMenu("about")} className={menu === "about" ? "active" : ""}>About</Link></li>
        <li><Link to='/Moments' onClick={() => setMenu("portfolio")} className={menu === "portfolio" ? "active" : ""}>Portfolio</Link></li>
        <li><Link to='/Crafts' onClick={() => setMenu("shop")} className={menu === "shop" ? "active" : ""}>Shop</Link></li>
        <li><Link to='#footer' onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>Contact</Link></li>
      </ul>

      <div className="navbar-right">
        <img width={"30px"} height={"30px"} src={searchIcon} alt="Search Icon" />
        <div className="navbar-search-icon">
          <Link to='/Cart'><img width={"30px"} height={"35px"} src={basketicon} alt="Basket Icon" /></Link>
          <div className={getTotalCartAmounts() === 0 ? "" : "dot"}></div>
        </div>

        {!token ? (
          <button onClick={() => setShowLogin(true)}>Sign In</button>
        ) : (
          <div className='navbar-profile'>
            <img width={'30px'} height={'30px'} src={profileicon} alt="Profile Icon" />
            <ul className='nav-profile-dropdown'>
              <li><img src={bagicon} alt="Bag Icon" /><p>Orders</p></li>
              <hr />
              <li onClick={logout}><img src={logouticon} alt="Logout Icon" /><p>Logout</p></li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

import React, { useRef } from "react";
import "./navbar.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../../assets/menu-open.png";
import cross from "../../assets/cross.png";

import crossbtn from "./cross-btn.png";
import sidemenu from "./side-menu.png";


const Navbar = () => {

  // const[menu,setMenu] = useState("home");
  const menuRef = useRef();
  const openMenu = () => {
    menuRef.current.style.right="0";
  }
  const closeMenu = () => {
    menuRef.current.style.right="-350";
  }

  return(
    <div className = 'navbar'>
      <img src={menu_open} onClick={openMenu} alt= "" className="menu-btn-open" />
      <div></div>
        <ul ref={menuRef} className="navmenu">
          <img src ={cross} onClick={closeMenu} alt ="" className="menu-btn-close"/>
            <li><AnchorLink className="anchor-link" href='#home'><p>Home</p></AnchorLink></li>
            <li><AnchorLink className="anchor-link" offset ={50} href='#about'><p>About me</p></AnchorLink></li>
            <li><AnchorLink className="anchor-link" offset ={50} href='#work'><p>Projects</p></AnchorLink></li>
            <li><AnchorLink className="anchor-link" offset ={50} href='#contact'><p>Contact</p></AnchorLink></li>
        </ul>

        

        <div className="nav-connect"><AnchorLink className="anchor-link" offset ={50} href='#contact'>Connect with me !</AnchorLink></div>
    </div>
  )
}

export default Navbar;
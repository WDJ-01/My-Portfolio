import React, { useState } from "react";
import NavLink from "./NavLink";
import { navLinks } from "./navLinks";
import "./nav.css";
import { AiOutlineMenu , AiOutlineMenuUnfold, AiOutlineMenuFold} from "react-icons/ai";

const Nav = () => {
  const [menu, setMenu] = useState(false);
  const onClick = () => {
    if (menu === false) {
      setMenu(true);
    } else setMenu(false);

    console.log(menu);
  };
  const style1 = {visibility: 'hidden'}
  const style2 = {visibility: 'visible'}
  return (
    <nav>
      <div className="header_name">
        <p>devWian</p>
      </div>
      <div className="menu">
        {menu ?  < AiOutlineMenuUnfold
          onClick={onClick}
          style={{ color: "black", fontSize: "1.5rem", marginRight: "5%" }}
        /> : < AiOutlineMenuFold
        onClick={onClick}
        style={{ color: "black", fontSize: "1.5rem", marginRight: "5%" }}
      />}
    
      </div>
      <div className="responsive_menu" style={menu ? style2 : style1}>
          {" "}
          {navLinks.map(({ navLinkId, scrollToId }, idx) => (
            <NavLink key={idx} navLinkId={navLinkId} scrollToId={scrollToId} />
          ))}
      </div>

      <div className="header_links">
        {navLinks.map(({ navLinkId, scrollToId }, idx) => (
          <NavLink key={idx} navLinkId={navLinkId} scrollToId={scrollToId} />
        ))}
      </div>
    </nav>
  );
};

export default Nav;

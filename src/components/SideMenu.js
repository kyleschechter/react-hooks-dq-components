import React from "react";
import Search from "./Search"
import Logo from "./Logo"
import MenuLinks from "./MenuLinks";

function SideMenu() {
  return (
    <aside className="side-bar open">
      <Logo />
      <MenuLinks />
      <Search />
    </aside>
  );
}

export default SideMenu;

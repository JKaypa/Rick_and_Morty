import React from "react";
import style from "./Nav.module.css";
import SearchBar from "../Search/SearchBar";
import { NavLink } from "react-router-dom";

function Nav({onSearch, onChange, id}) {

  const active = ({isActive}) => isActive ? style.active : undefined;

  return (
    <div className={style.nav}>
      <div className={style.linkContainer}>
          <img className={style.img} src="Rick_and_Morty.svg.png" alt="rnm" />
        <NavLink to="/home" className={active}>
          <span className={style.navLink}>Home</span>
        </NavLink>
        <NavLink to="favorites" className={active}>
          <span className={style.navLink}>Favorites</span>
        </NavLink>
        <NavLink to="/about" className={active}>
          <span className={style.navLink}>About</span>
        </NavLink>
      </div>
      <SearchBar
        onSearch={onSearch}
        onChange={onChange}
        id={id}
      />
    </div>
  );
}

export default Nav;

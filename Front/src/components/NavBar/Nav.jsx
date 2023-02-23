import React from "react";
import style from "./Nav.module.css";
import SearchBar from "../Search/SearchBar";
import { NavLink } from "react-router-dom";
import { useState } from "react";

function Nav({ onSearch, onChange, id }) {
  const [toggle, setToggle] = useState(false);

  const active = ({ isActive }) => (isActive ? style.active : undefined);
  const toggleActive = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <div className={style.nav}>
        <NavLink to='/home'><img className={style.img} src="Rick_and_Morty.svg.png" alt="rnm" /></NavLink> 
        <div className={style.linkContainer}>
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
        <div className={style.search} ><SearchBar onSearch={onSearch} onChange={onChange} id={id} /></div>
        <button onClick={toggleActive} className={toggle ? style.burgerAct : style.burgerDis}>
          <div></div>
          <div></div>
          <div></div>
        </button>
      </div>
      <div className={toggle ? style.menu : style.menuDis}>
        <NavLink to="/home" className={active}>
          <span className={style.navLink}>Home</span>
        </NavLink>
        <NavLink to="favorites" className={active}>
          <span className={style.navLink}>Favorites</span>
        </NavLink>
        <NavLink to="/about" className={active}>
          <span className={style.navLink}>About</span>
        </NavLink>
        <SearchBar onSearch={onSearch} onChange={onChange} id={id} />
      </div>
    </div>
  );
}

export default Nav;

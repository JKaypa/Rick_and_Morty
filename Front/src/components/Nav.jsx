import React from 'react';
import style from './Nav.module.css'
import SearchBar from './SearchBar';
import { NavLink } from 'react-router-dom'

function Nav(props) {
    return (
        <div className={style.nav}>          
            <div className='style.rout'>
                <NavLink to='/home'>
                    <span className={style.bar}>Home</span>
                </NavLink>
                <NavLink to='favorites'>
                <span>Favorites</span>
                </NavLink>
                <NavLink to='/about'>
                    <span className={style.bar}>About</span>
                </NavLink>
            </div>
            <SearchBar onSearch={props.onSearch} onChange={props.onChange} id={props.id}/>
        </div>
    );
}

export default Nav;


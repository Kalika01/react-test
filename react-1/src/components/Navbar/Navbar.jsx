import React from 'react';
import s from'./Navbar.module.css';
import { NavLink } from 'react-router-dom';


const Navbar = (props) => {
return <nav className={s.nav}>
            <div>
            <NavLink to='/profile' className={navData => navData.isActive ? s.activeLink : s.item}> Profile</NavLink>
            </div>
            <div>
            <NavLink to='/users' className={navData => navData.isActive ? s.activeLink : s.item}> Users</NavLink>
            </div>
            <div>
            <NavLink to='/dialogs' className={navData => navData.isActive ? s.activeLink : s.item} >Messages</NavLink>
            </div>
            <div>
            <NavLink to='/news' className={navData => navData.isActive ? s.activeLink : s.item} >News</NavLink>
            </div>
            <div>
            <NavLink to='/music' className={navData => navData.isActive ? s.activeLink : s.item} >Music</NavLink>
            </div>
            <div>
            <NavLink to='/settings' className={navData => navData.isActive ? s.activeLink : s.item} >Settings</NavLink>
            </div>
            <div>
            <NavLink to='/friends' className= {navData => navData.isActive ? s.activeLink : s.item} >Friends </NavLink>
            </div>
            <div>
            
            </div>
      </nav>
}

export default Navbar;
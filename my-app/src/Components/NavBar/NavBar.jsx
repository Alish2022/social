import React from 'react'
import style from './NavBar.module.css'
import { NavLink } from 'react-router-dom';
import Link from './Link/Link'

const NavBar = () => {
    return (
        <nav className={style.nav}>
            <Link id='/profile' name='Profile' />
            <Link id='/dialogs' name='Messages' />
            <Link id='/news' name='News' />
            <Link id='/music' name='Music' />
            <Link id='/settings' name='Settings' />
        </nav>
    );
}

export default NavBar;

import React from 'react'
import style from './Header.module.css'


const Header = () => {
    return (
        <div className={style.header}>
            <img src='./img/logo.jpg' alt='logo' />
        </div>
    );
}

export default Header;


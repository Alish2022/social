import React from 'react'
import style from './Link.module.css'
import { NavLink } from 'react-router-dom';

const Link = (props) => {
    return (
    <div ><NavLink to={props.id} className={style.item} activeClassName={style.active} >{props.name}</NavLink></div>
    );
}

export default Link;

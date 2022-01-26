import React from 'react'
import style from './Dialog.module.css'
import { NavLink } from 'react-router-dom'


const Dialog = (props) => {
    let dialogs = props.data.map(el =><div> <NavLink className={style.dialog} activeClassName={style.active} to={'/dialogs/' + el.id}>{el.name}</NavLink></div> )
    console.log(dialogs)
    return (
        <div >
           {dialogs} 
        </div>
    );
}

export default Dialog;

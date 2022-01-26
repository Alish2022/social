import React from 'react'
import style from './Dialogs.module.css'
import { NavLink } from 'react-router-dom'
import Dialog from './Dialog/Dialog'
import Message from './Message/Message'

const Dialogs = (props) => {
   
    return (
        <div className={style.dialogsList}>
            <div className={style.dialogs}>
                <Dialog data={props.data.dialogData}/>
            </div>
            <div className={style.messages}>
                <Message data={props.data.messageData}/>
            </div>
        </div>
    );
}

export default Dialogs;

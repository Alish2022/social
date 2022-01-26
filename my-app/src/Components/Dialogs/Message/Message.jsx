import React from 'react'
import style from './Message.module.css'

const Message = (props) => {
    let messages = props.data.map(el => <div className={style.message}>{el.message}</div>)
    return (<div>
        { messages}
    </div>
    );
}

export default Message;

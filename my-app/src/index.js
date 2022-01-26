import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import App from './App';

let dialogData=[
  {name:'Borya', id:1},
  {name:'Ivan', id:2},
  {name:'Alex', id:3},
  {name:'Sergey', id:4}
]

let messageData=[
  {id:1,message:'hi'},
  {id:2,message:'How are you'},
  {id:3,message:'What is your name?'}
]
let data={
  dialogData: dialogData,
  messageData: messageData
}

ReactDOM.render(
  <React.StrictMode>
    <App data={data}/>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

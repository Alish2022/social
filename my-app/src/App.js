import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Dialogs from './Components/Dialogs/Dialogs';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import NavBar from './Components/NavBar/NavBar';
import Profile from './Components/Profile/Profile';
import Settings from './Components/Settings/Settings';
import News from './Components/News/News';
import Music from './Components/Music/Music';

const App = (props) => {
  
  return (
    <BrowserRouter>
      <div className="app-wraper">
        <Header />
        <NavBar />
        <div className='app-wraper-content'>
          <Route path='/dialogs' render={()=><Dialogs data={props.data}/>} />
          <Route path='/profile' render={()=><Profile/>} />
          <Route path='/settings' render={()=><Settings/>} />
          <Route path='/news' render={()=><News/>} />
          <Route path='/music' render={()=><Music/>} />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
